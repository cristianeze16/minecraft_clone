import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import Minecraft from "../assets/fonts/Minecraft_Ten_Regular.json";

extend({ TextGeometry });

export default function Dialog({msj,position,size,height,color}) {
  const font = new FontLoader().parse(Minecraft);

  return (
    <mesh position={position}>
    {/* <mesh position={[-0.3, 1, -3]}> */}
      <textGeometry args={[`${msj}`, { font, size:size, height: height }]} />
      <meshLambertMaterial attach="material" color={color} />
    </mesh>
  );
}
