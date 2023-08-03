import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Html} from '@react-three/drei'

import { a as three } from '@react-spring/three'

export default function Macbook({ open, hinge, ...props }) {
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