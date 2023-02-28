import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./components/Ground.jsx";
import { Player } from "./components/Player.jsx";
import { FPV as Fpv } from "./components/FPV.jsx";
import { Cubes } from "./components/Cubes.jsx";
import { TextureSelector } from "./components/TextureSelector.jsx";
import { Menu } from "./components/Menu.jsx";
import { Munequito } from "./components/Munequito.jsx";
import { CubeProjects } from "./components/CubeProjects";
import {Linkedin } from "./components/Linkedin.jsx"
import { Github } from "./components/Github.jsx";
import Dialog  from "./components/Dialog.jsx"
import Controls from "./components/Controls.jsx"
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
          <Dialog
            msj={
              "Algunos proyectos presiona  " +
              " CTRL" +
              "+" +
              " click " +
              "  para visitarlos "
            }
            position={[-5.2, 2.5, -3]}
            size={0.1}
            height={0}
            color={"black"}
          />
          <CubeProjects
            texture={"motorX"}
            position={[-3, 0.2, -3]}
            page={"https://motorx.vercel.app/"}
          />
          <CubeProjects
            texture={"mighty"}
            position={[-4.5, 0.2, -3]}
            page={"https://cristianeze16.github.io/mdhlc-hermosa/"}
          />
          <CubeProjects
            texture={"myTinerary"}
            position={[-3.7, 1.5, -3]}
            page={"https://mytineraryteamperro.vercel.app/"}
          />
          <Dialog
            msj={
              "Mis Redes " + " CTRL" + "+" + " click " + "  para visitarlas "
            }
            position={[6, 2.2, -3]}
            size={0.1}
            height={0}
            color={"black"}
          />
          <Linkedin />
          <Github />
        </Physics>
      </Canvas>
      <Controls />
      {/* <h1 className="test">hola</h1> */}
      <div className="pointer">+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
