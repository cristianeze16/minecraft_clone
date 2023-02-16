/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 munequito.gltf
*/

import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import Dialog from "../components/Dialog";




export function Munequito() {
  const { nodes, materials } = useGLTF("/munequito.gltf");


  return (
    <>
      <group
        scale={2}
        dispose={null}
        position={[0, -0.5, -3]}
        onClick={
          (e)=>{e.stopPropagation()
          
          
          

        }
        }

      >
        <mesh
          geometry={nodes.Cara.geometry}
          material={materials.Cara}
          position={[0, 0.56, 0]}
          scale={0.1}
        />
        <mesh
          geometry={nodes.Cuerpo.geometry}
          material={materials.Cuerpo}
          position={[0, 0.36, 0]}
          scale={[0.1, 0.1, 0.05]}
        />
        <mesh
          geometry={nodes.brazo.geometry}
          material={materials.Brazo}
          position={[0.14, 0.36, 0]}
          rotation={[-0.07, 0, 0]}
          scale={[0.04, 0.1, 0.04]}
        />
        <mesh
          geometry={nodes.brazo001.geometry}
          material={materials.Brazo}
          position={[-0.13, 0.36, 0]}
          rotation={[-0.12, 0, 0]}
          scale={[0.04, 0.1, 0.04]}
        />
        <mesh
          geometry={nodes.pierna.geometry}
          material={materials.pierna}
          position={[-0.05, 0.16, 0]}
          scale={[0.05, 0.13, 0.05]}
        />
        <mesh
          geometry={nodes.pierna001.geometry}
          material={materials.pierna}
          position={[0.05, 0.16, 0]}
          scale={[0.05, 0.13, 0.05]}
        />
      </group>
      <Dialog msj={"hola"} position={[-0.3, 1, -3]}/>
    </>
  );
}

useGLTF.preload("/munequito.gltf");
