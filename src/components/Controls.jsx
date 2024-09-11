import React,{useState}from 'react'
import Draggable from 'react-draggable'



function Controls({
  handleDragWalk,
  handleStopWalk,
  handleDragCamera,
  handleStopCamera,
  positionWalk,
  position,
}) {
  return (
    <>
      <div
        className="hide-on-desktop"
        style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          position: "absolute",
          top: "40%",
          left: 50,
          zIndex: 1,
          backgroundColor: "transparent",
          border: "5px solid white",
        }}
      >
        <Draggable
          position={positionWalk}
          onDrag={handleDragWalk}
          bounds={{ top: -75, left: -75, right: 75, bottom: 75 }}
          onStop={handleStopWalk}
        >
          <div
            style={{
              position: "relative",
              top: "33%",
              left: "33%",
              transform: `translate(50%, -50%)`,
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: "grey",
              cursor: "pointer",
              // zIndex:2,
            }}
          />
        </Draggable>
      </div>
      <div
        className="hide-on-desktop"
        style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          position: "absolute",
          top: "40%",
          right: 50,
          zIndex: 1,
          backgroundColor: "transparent",
          border: "5px solid white",
        }}
      >
        <Draggable
          position={position}
          onDrag={handleDragCamera}
          bounds={{ top: -75, left: -75, right: 75, bottom: 75 }}
          onStop={handleStopCamera}
        >
          <div
            style={{
              position: "relative",
              top: "33%",
              left: "33%",
              transform: `translate(50%, -50%)`,
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: "grey",
              cursor: "pointer",
              // zIndex:2,
            }}
          />
        </Draggable>
      </div>
    </>
  );
}

export default Controls
