/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 linkedinv2.gltf
*/

import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export function Linkedin() {
  const [isHovered, setIsHovered] = useState(false)

  const { nodes, materials } = useGLTF('/linkedinv2.gltf')
  return (
    <group dispose={null} scale={4} position={[6, 1, -3]}>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          console.log("click");
          if (e.ctrlKey) {
            window.open("https://www.linkedin.com/in/cristian-hermosa-", "_blank");
          }
        }}
        geometry={nodes.Curve.geometry}
        material={materials.SVGMat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[39.37, 5, 39.38]}
      />
    </group>
  );
}

useGLTF.preload('/linkedinv2.gltf')