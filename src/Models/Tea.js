import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Html } from '@react-three/drei'

import { a as three } from '@react-spring/three'

export default function Tea(props) {
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
        <meshStandardMaterial color={hovered ? '#f0f0f0' : '#116D6E'} />
      </mesh>
      <mesh geometry={nodes.Mesh_cupTea_1.geometry}>
        <meshStandardMaterial color={hovered ? '#f0f0f0' : '#65451F'} />
      </mesh>
    </group>
  )
}
