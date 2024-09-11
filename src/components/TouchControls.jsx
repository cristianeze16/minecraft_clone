import { useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { useRef } from "react";

const TouchControls = ({ setMoveDirection, setRotateDirection }) => {
  const moveRef = useRef();
  const rotateRef = useRef();

  const bindMove = useDrag(({ offset: [x, y], last }) => {
    console.log("last", last);

    if (last) {
      setMoveDirection({ x: 0, y: 0 });
    } else {
      setMoveDirection({ x, y });
    }
  });

  const bindRotate = useDrag(({ offset: [x, y], last }) => {
    console.log("last", last);

    if (last) {
      setRotateDirection({ x: 0, y: 0 });
    } else {
      setRotateDirection({ x, y });
    }
  });

  return (
    <>
      <div
        ref={moveRef}
        {...bindMove()}
        style={{
          touchAction: "none",
          position: "absolute",
          top: "50px",
          left: "47px",
          width: "150px",
          height: "150px",
        }}
      />
      <div
        ref={rotateRef}
        {...bindRotate()}
        style={{
          touchAction: "none",
          position: "absolute",
          top: "50px",
          right: "30px",
          width: "150px",
          height: "150px",
        }}
      />
    </>
  );
};

export default TouchControls;
