import React,{useState}from 'react'
import Draggable from 'react-draggable'



function Controls() {
 const [position,setPosition] = useState({x:0,y:0});

 const handleDrag =  (event,data) =>{
  const {x,y} = data;
  setPosition({x,y});

}
console.log(position)
 
const handleStop = ()=>{
  setPosition({x:0,y:0})
}
 
 
 
 
  return (
    <div
      style={{
        width: 150,
        height: 150,
        borderRadius: "50%",
        position: "absolute",
        top: 50,
        left: 50,
        zIndex: 1,
        backgroundColor: "transparent",
        border:'5px solid white'
      }}
    >
      <Draggable
        position={position}
        onDrag={handleDrag}
        bounds={{ top: -75, left: -75, right: 75, bottom: 75 }}
        onStop={handleStop}
      >
        <div
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: `translate(50%, -50%)`,
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "grey",
            cursor: 'pointer',
            // zIndex:2,
          }}
        />
      </Draggable>
    </div>
  );
}

export default Controls
