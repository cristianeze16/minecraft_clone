import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";
import { useKeyboard } from "../hooks/useKeyboard.js";

const CHARACTER_SPEED = 4;
const CHARACTER_JUMP_FORCE = 4;
const ROTATION_THRESHOLD = 1;
const MAX_ROTATION_X = Math.PI / 4; // Limitar la rotación en el eje x a 45 grados
const MIN_ROTATION_X = -Math.PI / 4; // Limitar la rotación en el eje x a -45 grados


export const Player = ({ position, positionWalk }) => {
  const { moveBackward, moveForward, moveLeft, moveRight, jump } = useKeyboard();

  const { camera } = useThree();
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 0.5, 0],
  }));

  const pos = useRef([0, 0, 0]);
  useEffect(() => {
    api.position.subscribe((p) => {
      pos.current = p;
    });
  }, [api.position]);

  const vel = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((p) => {
      vel.current = p;
    });
  }, [api.velocity]);

  useFrame(() => {
    camera.position.copy(new Vector3(pos.current[0], pos.current[1], pos.current[2]));

    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      (moveBackward || positionWalk.y > 0 ? 1 : 0) -
        (moveForward || positionWalk.y < 0 ? 1 : 0),
    );

    const sideVector = new Vector3(
      (moveLeft || positionWalk.x < 0 ? 1 : 0) -
        (moveRight || positionWalk.x > 0 ? 1 : 0),
      0,
      0,
    );

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(CHARACTER_SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, vel.current[1], direction.z);

    if (jump && Math.abs(vel.current[1]) < 0.05) {
      api.velocity.set(vel.current[0], CHARACTER_JUMP_FORCE, vel.current[2]);
    }
    if (Math.abs(position.y) > ROTATION_THRESHOLD) {
      camera.rotation.x -= position.y * 0.0001; // Invertir el valor de position.y
      // Limitar la rotación en el eje x
      camera.rotation.x = Math.max(
        MIN_ROTATION_X,
        Math.min(MAX_ROTATION_X, camera.rotation.x),
      );
    }
    if (Math.abs(position.x) > ROTATION_THRESHOLD) {
      camera.rotation.y -= position.x * 0.0001; // Invertir el valor de position.x
    }
  });
  return <mesh ref={ref} />;
};
