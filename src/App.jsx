import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./components/Ground.jsx";
import { Player } from "./components/Player.jsx";
import { FPV as Fpv } from "./components/FPV.jsx";
import { Cubes } from "./components/Cubes.jsx";
import { TextureSelector } from "./components/TextureSelector.jsx";
import { Menu } from "./components/Menu.jsx";
import {Munequito} from "./components/Munequito.jsx"
import { useStore } from "./hooks/useStore";






function App() {

 
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Fpv />
        <Physics>
          <Munequito />
          <Player />
          <Cubes />
          <Ground />
      
        </Physics>
      </Canvas>

      <div className="pointer">+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
