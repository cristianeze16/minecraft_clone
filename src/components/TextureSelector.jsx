import { useEffect, useState } from 'react'
import * as images from '../assets/images/images.js'
import { useStore } from "../hooks/useStore";
import { useKeyboard } from "../hooks/useKeyboard.js";


export const TextureSelector = () =>{
  const [visible, setVisible] = useState(false)
 
  const [texture,setTexture] = useStore(state =>[state.texture, state.setTexture])

  const { dirt, grass, glass, wood, log,water } = useKeyboard();

  useEffect(()=>{
    const visibilityTimeout= setTimeout(()=>{
    setVisible(false);
      
    },2000)
    setVisible(true)
    return ()=>{
      clearTimeout(visibilityTimeout)
    }
  },[texture])

  useEffect(() => {
    const options = {
      dirt,
      grass,
      glass,
      wood,
      log,
      water,
    };
    const selectedTexture = Object.entries(options).find(([texture, isEnabled]) => isEnabled) 
    if(selectedTexture){
      const [textureName] = selectedTexture
      setTexture(textureName)

    }
  }, [dirt, grass, glass, wood, log, water]);
  
 
  return (
    <div className={'texture-selector'}>
      {Object.entries(images).map(([imgKey, img]) => {
        return (
          <img
            className={texture === imgKey.replace("Img", "") ? "selected" : ""}
            key={imgKey}
            src={img}
            alt={imgKey}
          />
        );
      })}
    </div>
  );
}