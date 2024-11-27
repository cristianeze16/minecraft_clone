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
import { Linkedin } from "./components/Linkedin.jsx";
import { Github } from "./components/Github.jsx";
import Dialog from "./components/Dialog.jsx";
import Controls from "./components/Controls.jsx";
import { useState } from "react";
function App() {
  const [positionWalk, setPositionWalk] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleDragWalk = (event, data) => {
    const { x, y } = data;
    setPositionWalk({ x, y });
  };
  const handleDragCamera = (event, data) => {
    const { x, y } = data;
    setPosition({ x, y });
  };
  console.log("position", position);

  const handleStopCamera = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleMoveForwardStart = () => {
    setPositionWalk((prev) => ({  y: -1 }));
  };

  const handleMoveForwardStop = () => {
    setPositionWalk((prev) => ({ ...prev, y: 0 }));
  };

  const handleMoveBackwardStart = () => {
    setPositionWalk((prev) => ({ ...prev, y: 1 }));
  };

  const handleMoveBackwardStop = () => {
    setPositionWalk((prev) => ({ ...prev, y: 0 }));
  };

  const handleMoveLeftStart = () => {
    setPositionWalk((prev) => ({ ...prev, x: 1 }));
  };

  const handleMoveLeftStop = () => {
    setPositionWalk((prev) => ({ ...prev, x: 0 }));
  };

  const handleMoveRightStart = () => {
    setPositionWalk((prev) => ({ ...prev, x: -1 }));
  };

  const handleMoveRightStop = () => {
    setPositionWalk((prev) => ({ ...prev, x: 0 }));
  };

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Fpv />
        <Physics>
          <Munequito />
          <Player position={position} positionWalk={positionWalk} />
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
            msj={"Mis Redes " + " CTRL" + "+" + " click " + "  para visitarlas "}
            position={[6, 2.2, -3]}
            size={0.1}
            height={0}
            color={"black"}
          />
          <Linkedin />
          <Github />
        </Physics>
      </Canvas>
      <Controls
        handleDragCamera={handleDragCamera}
        handleStopCamera={handleStopCamera}
        positionWalk={positionWalk}
        position={position}
        handleMoveForwardStart={handleMoveForwardStart}
        handleMoveForwardStop={handleMoveForwardStop}
        handleMoveBackwardStart={handleMoveBackwardStart}
        handleMoveBackwardStop={handleMoveBackwardStop}
        handleMoveLeftStart={handleMoveLeftStart}
        handleMoveLeftStop={handleMoveLeftStop}
        handleMoveRightStart={handleMoveRightStart}
        handleMoveRightStop={handleMoveRightStop}
      />
      <div className="pointer">+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
