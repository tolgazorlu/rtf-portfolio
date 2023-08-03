import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, useGLTF, ContactShadows, Html, OrbitControls, Edges, Bounds, useBounds, Cylinder, PerspectiveCamera } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a as three } from '@react-spring/three'
import { a as web } from '@react-spring/web'

function Table(props) {
  const [hovered, setHovered] = useState(false)
  const group = useRef()
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/desk/model.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-4.26, 0, -0.17]} rotation={[0, 1.56, 0]} scale={12.5}>
        <mesh
          geometry={nodes.Cube007.geometry}
          onPointerOver={(event) => (event.stopPropagation(), setHovered(true))}
          onPointerOut={(event) => setHovered(false)}>
          <meshStandardMaterial color={hovered ? '#f0d0d0' : 'black'} />
        </mesh>
        <mesh
          geometry={nodes.Cube007_1.geometry}
          onPointerOver={(event) => (event.stopPropagation(), setHovered(true))}
          onPointerOut={(event) => setHovered(false)}>
          <meshStandardMaterial color={hovered ? '#f0d0d0' : '#f2f2f2'} />
        </mesh>
      </group>
    </group>
  )
}

function Tea(props) {
  const [hovered, setHovered] = useState(false)
  const group = useRef()
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={6}>
      <mesh
        geometry={nodes.Mesh_cupTea.geometry}
        material={materials._defaultMat}
        onPointerOver={(event) => (event.stopPropagation(), setHovered(true))}
        onPointerOut={(event) => setHovered(false)}>
        <meshStandardMaterial color={hovered ? '#f0d0d0' : '#116D6E'} />
      </mesh>
      <mesh geometry={nodes.Mesh_cupTea_1.geometry}>
        <meshStandardMaterial color={hovered ? '#f0d0d0' : '#65451F'} />
      </mesh>
    </group>
  )
}

function Phone(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 1.56, 0]}>
        <mesh geometry={nodes.Circle038.geometry} material={nodes.Circle038.material} />
        <mesh geometry={nodes.Circle038_1.geometry} material={materials['Front.001']} />
        <mesh geometry={nodes.Circle038_2.geometry} material={nodes.Circle038_2.material} />
        <mesh geometry={nodes.Circle038_3.geometry} material={materials['BackGrey.001']} />
        <mesh geometry={nodes.Circle038_4.geometry} material={materials['Rubber.001']} />
        <mesh geometry={nodes.AntennaLineBottom001.geometry} material={nodes.AntennaLineBottom001.material} position={[0, -2.68, 0]} />
        <mesh geometry={nodes.AntennaLineTop001.geometry} material={nodes.AntennaLineTop001.material} position={[0, 0.02, 0]} />
        <mesh geometry={nodes.BackCameraBottomLens001.geometry} material={nodes.BackCameraBottomLens001.material} position={[0.7, 0.88, -0.08]} />
        <mesh geometry={nodes.AppleLogo001.geometry} material={materials['AppleLogo.001']} position={[0.17, 0.52, -0.08]} />
        <mesh geometry={nodes.BackCameraBottomGreyRing001.geometry} material={nodes.BackCameraBottomGreyRing001.material} position={[0.7, 0.88, -0.09]} />
        <mesh geometry={nodes.BackCameraP1001.geometry} material={materials['Black.015']} position={[0.7, 1.03, -0.09]} />
        <mesh geometry={nodes.BackCameraTopLens001.geometry} material={nodes.BackCameraTopLens001.material} position={[0.7, 1.18, -0.08]} />
        <mesh geometry={nodes.FlashBG001.geometry} material={materials['PinkFlash.002']} position={[0.71, 1.03, -0.09]} />
        <mesh geometry={nodes.FrontSpeakerBG001.geometry} material={materials['FrontSpeaker.001']} position={[0.16, 1.36, 0.08]} />
        <mesh geometry={nodes.FrontCameraContainer001.geometry} material={materials['FrontCameraBlack.002']} position={[0.34, 1.36, 0.08]} />
        <mesh geometry={nodes.CameraBump001.geometry} material={nodes.CameraBump001.material} position={[0.7, 1.04, -0.08]} />
        <mesh geometry={nodes.BackCameraTopGreyRing001.geometry} material={nodes.BackCameraTopGreyRing001.material} position={[0.7, 1.18, -0.09]} />
        <mesh geometry={nodes.iPhoneLogo001.geometry} material={materials['iPhoneLogo.001']} position={[0.2, -1.18, -0.08]} />
        <mesh geometry={nodes.MuteSwitch001.geometry} material={nodes.MuteSwitch001.material} position={[-0.65, 0.92, 0.01]} />
        <group position={[0.98, -0.04, 0]}>
          <mesh geometry={nodes.Circle031.geometry} material={materials['Black.014']} />
          <mesh geometry={nodes.Circle031_1.geometry} material={nodes.Circle031_1.material} />
        </group>
        <mesh geometry={nodes.VolumeButtons001.geometry} material={nodes.VolumeButtons001.material} position={[-0.66, 0.21, 0]} />
        <group position={[0.97, 0.56, 0]}>
          <mesh geometry={nodes.Circle032.geometry} material={nodes.Circle032.material} />
          <mesh geometry={nodes.Circle032_1.geometry} material={nodes.Circle032_1.material} />
        </group>
        <mesh geometry={nodes.SCREEN.geometry}>
          <Html
            style={{ borderRadius: 37, overflow: 'hidden', opacity: open ? 1 : 0 }}
            transform
            wrapperClass="htmlScreen"
            distanceFactor={2}
            position={[0.15, -0.20, 0.07]}>
            <iframe width={300} height={640} src="https://tolg.dev" />
          </Html>
        </mesh>
      </group>
    </group>
  )
}

function Model({ open, hinge, ...props }) {
  const group = useRef()
  // Load model
  const { nodes, materials } = useGLTF('/mac-draco.glb')
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false)

  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
  // Make it float in the air when it's opened
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.position.z = THREE.MathUtils.lerp(group.current.position.z, open ? -26 / 6 : -4.3, 0.1)
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? -26 / 6 : -4.3, 0.1)
  })
  // The view was auto-generated by: https://github.com/pmndrs/gltfjsx
  // Events and spring animations were added afterwards
  return (
    <group ref={group} {...props} onPointerOver={(e) => (e.stopPropagation(), setHovered(true))} onPointerOut={(e) => setHovered(false)} dispose={null}>
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
          <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
          <mesh material={materials['screen.001']} geometry={nodes['Cube008_2'].geometry}>
            <Html style={{ opacity: open ? 1 : 0 }} transform wrapperClass="htmlScreen" distanceFactor={2} rotation-x={-190.05}>
              <iframe width={1665} height={1040} src="https://tolg.dev" />
            </Html>
          </mesh>
        </group>
      </three.group>
      <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
        <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
      </group>
      <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />
    </group>
  )
}

export default function App() {
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(false)
  const p = [0, 0, 0]
  const p2 = [0, 0, -25]
  const r = [0, 0, 0]
  const r2 = [-0.35, 0, 0]
  
  const fp2  = [-5, 0, -20]
  const fr2  = [30, 0, 0]

  const [cameraPosition, setCameraPosition] = useState([0, 0, 0])
  const [cameraRotation, setCameraRotation] = useState([0, 0, 0])
  

  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) })
  return (
    <web.main style={{ background: props.open.to([0, 1], ['#f0f0f0', '#b0b0b0']) }}>
      <web.h1 style={{ opacity: props.open.to([0, 1], [1, 0]), transform: props.open.to((o) => `translate3d(-50%,${o * 50 - 100}px,0)`) }}>Hi</web.h1>
      <web.h1 style={{ color: 'white', opacity: props.open.to([0, 1], [0, 1]), transform: props.open.to((o) => `translate3d(-50%,${o * 50 - 300}px,0)`) }}>
        Click tea!
      </web.h1>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
        <PerspectiveCamera position={cameraPosition} rotation={cameraRotation}>
          <three.pointLight position={[10, 10, 10]} intensity={1.5} color={props.open.to([0, 1], ['#f0f0f0', '#b0b0b0'])} />
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]}>
              <Model
                onClick={(e) => (e.stopPropagation(), setOpen(!open), setCameraPosition(p), setCameraRotation(r))}
                open={open}
                hinge={props.open.to([0, 1], [1.575, -0.425])}
                position={[0, 0, -30]}
              />
              <Phone position={[-8, -4.4, 0]} rotation={[-1.57, 0, 0]} onClick={(e) => (e.stopPropagation(), setCameraPosition(fp2), setCameraRotation(fr2))}/>
              <Table position={[4, -6, 0]}/>
              <Tea
                rotation={[0, 2.4, 0]}
                position={[8, -4.5, 0]}
                onClick={(e) => {
                  e.preventDefault, setCameraPosition(p2)
                  setCameraRotation(r2)
                }}
              />
              {/* <Bookcase position={[0, -13, -10]} /> */}
            </group>
            <Environment preset="city" />
          </Suspense>
          <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
        </PerspectiveCamera>
      </Canvas>
    </web.main>
  )
}
