import { useBox } from "@react-three/cannon";
import { useEffect, useRef, useState } from "react";
import * as textures from "../assets/images/textures_projects";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";


export const CubeProjects = ({ position, texture,page }) => {
  const [isHovered, setIsHovered] = useState(false);



  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    //
    api.rotation.set(0,a,0);
  });
  const [ref,api] = useBox(() => ({
    type: "Dynamic",
    position,
   }),
   
 );
 
  

  
  const activeTexture = textures[texture + "Texture"];

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
        e.stopPropagation();
        console.log("click");
        if (e.ctrlKey) {
          window.open(page, "_blank");
        }
      }}
      
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        color={isHovered ? "grey" : "white"}
        transparent
        map={activeTexture}
      />
    </mesh>
  );
};
