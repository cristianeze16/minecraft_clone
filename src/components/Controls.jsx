import React from "react";
import Draggable from "react-draggable";

function Controls({
  handleMoveForwardStart,
  handleMoveForwardStop,
  handleMoveBackwardStart,
  handleMoveBackwardStop,
  handleMoveLeftStart,
  handleMoveLeftStop,
  handleMoveRightStart,
  handleMoveRightStop,
  handleDragCamera,
  handleStopCamera,
  position,
}) {
  return (
    <>
      <div className="hide-on-desktop">
        <div className="controls-container hide-on-desktop">
          <button
            className="control-button up"
            onMouseDown={handleMoveForwardStart}
            onMouseUp={handleMoveForwardStop}
            onTouchStart={handleMoveForwardStart}
            onTouchEnd={handleMoveForwardStop}
          >
            Up
          </button>
          <button
            className="control-button down"
            onMouseDown={handleMoveBackwardStart}
            onMouseUp={handleMoveBackwardStop}
            onTouchStart={handleMoveBackwardStart}
            onTouchEnd={handleMoveBackwardStop}
          >
            Down
          </button>
        </div>
        <div className="controls-container-left-right  hide-on-desktop">
          <button
            className="control-button left"
            onMouseDown={handleMoveLeftStart}
            onMouseUp={handleMoveLeftStop}
            onTouchStart={handleMoveLeftStart}
            onTouchEnd={handleMoveLeftStop}
          >
            Left
          </button>
          <button
            className="control-button right"
            onMouseDown={handleMoveRightStart}
            onMouseUp={handleMoveRightStop}
            onTouchStart={handleMoveRightStart}
            onTouchEnd={handleMoveRightStop}
          >
            Right
          </button>
        </div>
      </div>

      <div
        className="hide-on-desktop"
        style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          position: "absolute",
          top: "40%",
          right: "20px",
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

export default Controls;
