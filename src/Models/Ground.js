import React from 'react'

const Ground = () => {
  return (
    <mesh position={[0,-13,0]}>
      <boxGeometry args={[100, 1, 100]}  />
      <meshBasicMaterial color="#3f3f3f"/>
    </mesh>
  )
}

export default Ground