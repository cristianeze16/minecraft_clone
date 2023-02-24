import { useBox } from "@react-three/cannon";
import { useState } from "react";
import { useStore } from "../hooks/useStore";
import * as textures from "../assets/images/textures.js";

export const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);
  const  [removeCube]  = useStore(state => [state.removeCube])

  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  const activeTexture = textures[texture + "Texture"];
   const [addCube] = useStore((state) => [state.addCube]);

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation()
        const clickedFace = Math.floor(e.faceIndex/2)
        console.log(clickedFace)
        const {x, y, z} = ref.current.position
        if (e.ctrlKey) {
          removeCube(id);
        } else if (clickedFace === 0) {
          addCube(x + 1, y, z);
        } else if (clickedFace === 1) {
          addCube(x - 1, y, z);
        } else if (clickedFace === 2) {
          addCube(x, y + 1, z);
        } else if (clickedFace === 3) {
          addCube(x, y - 1, z);
        } else if (clickedFace === 4) {
          addCube(x, y, z + 1);
        } else if (clickedFace === 5) {
          addCube(x , y, z - 1);
        }
      
      }}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? "grey" : "white"}
        transparent
        map={activeTexture}
        attach="material"
      />
    </mesh>
  );
};
