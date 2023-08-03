import React, { useRef, useState } from 'react'
import { useGLTF, Html} from '@react-three/drei'

export default function Table(props) {
    const [hovered, setHovered] = useState(false)
    const group = useRef()
    const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/desk/model.gltf')
    return (
      <group ref={group} {...props} dispose={null}>
        <group position={[-4.26, 0, -0.17]} rotation={[0, -1.56, 0]} scale={12.5}>
          <mesh
            geometry={nodes.Cube007.geometry}
            onPointerOver={(event) => (event.stopPropagation(), setHovered(true))}
            onPointerOut={(event) => setHovered(false)}>
            <meshStandardMaterial color={hovered ? '#7070f0' : 'black'} />
          </mesh>
          <mesh
            geometry={nodes.Cube007_1.geometry}
            onPointerOver={(event) => (event.stopPropagation(), setHovered(true))}
            onPointerOut={(event) => setHovered(false)}>
            <meshStandardMaterial color={hovered ? '#f0f0f0' : 'orange'} />
          </mesh>
        </group>
      </group>
    )
  }