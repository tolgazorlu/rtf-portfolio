import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
import { a as web } from '@react-spring/web'
import Macbook from './Models/Macbook'
import Table from './Models/Table'
import Phone from './Models/Phone'
import Tea from './Models/Tea'
import Ground from './Models/Ground'

export default function App() {
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(false)
  const p = [0, 0, 0]
  const p2 = [0, 0, -25]
  const r = [0, 0, 0]
  const r2 = [-0.35, 0, 0]
  const fp2 = [-5, 0, -20]
  const fr2 = [30, 0, 0]

  const [cameraPosition, setCameraPosition] = useState([0, 0, 0])
  const [cameraRotation, setCameraRotation] = useState([0, 0, 0])

  const [focusPhone, setFocusPhone] = useState(false)

  const focusOnMac = (e) => {
    e.preventDefault
    if (open) {
      setCameraPosition(p2)
      setCameraRotation(r2)
    }
  }

  const focusOnPhone = (e) => {
    e.stopPropagation()
    if (!focusPhone) {
      setCameraPosition(fp2)
      setCameraRotation(fr2)
      setFocusPhone(true)
    } else {
      setCameraPosition(p)
      setCameraRotation(r)
      setFocusPhone(false)
    }
  }

  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) })

  return (
    // <web.main style={{ background: props.open.to([0, 1], ['#f0f0f0', '#b0b0b0']) }}>
    <web.main>
      <web.h1 style={{ opacity: props.open.to([0, 1], [1, 0]), transform: props.open.to((o) => `translate3d(-50%,${o * 50 - 100}px,0)`) }}>Hi</web.h1>
      <web.h1 style={{ color: 'black', opacity: props.open.to([0, 1], [0, 1]), transform: props.open.to((o) => `translate3d(-50%,${o * 50 - 300}px,0)`) }}>
        Click tea or phone!
      </web.h1>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
        <PerspectiveCamera position={cameraPosition} rotation={cameraRotation}>
          <OrbitControls />
           <spotLight color={[1, 0.25, 0.7]} intensity={1.5} angle={0.6} penumbra={0.5} position={[5, 5, 0]} castShadow shadow-bias={-0.0001} />
          <spotLight color={[0.14, 0.5, 1]} intensity={2} angle={0.6} penumbra={0.5} position={[-5, 5, 0]} castShadow shadow-bias={-0.0001} />
          <three.pointLight position={[1, 1, 1]} intensity={1} color={props.open.to([0, 1], ['#f0f0f0', '#b0b0b0'])} /> 
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]}>
              <Macbook
                onClick={(e) => (e.stopPropagation(), setOpen(!open), setCameraPosition(p), setCameraRotation(r))}
                open={open}
                hinge={props.open.to([0, 1], [1.575, -0.425])}
                position={[0, 0, -30]}
              />
              <Phone focus={focusPhone} position={[-8, -4.4, 0]} rotation={[-1.57, 0, 0]} onClick={focusOnPhone} />
              <Table position={[4, -6, 0]} />
              <Tea rotation={[0, 2.4, 0]} position={[8, -4.5, 0]} onClick={focusOnMac} />
              <Ground />
              {/* <Bookcase position={[0, -13, -10]} /> */}
            </group>
          </Suspense>
          <Environment files={
            [
              './environmentMaps/2/px.jpg',
              './environmentMaps/2/nx.jpg',
              './environmentMaps/2/py.jpg',
              './environmentMaps/2/ny.jpg',
              './environmentMaps/2/pz.jpg',
              './environmentMaps/2/nz.jpg',
            ]
          } />
          <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
        </PerspectiveCamera>
      </Canvas>
    </web.main>
  )
}
