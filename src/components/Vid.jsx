import React from "react";
import { useRef } from "react";

const Vid = ({ playState, setPlaystate }) => {
    const player = useRef(null);
    const closePlayer = (e)=>{
        if(e.target === player.current)
        {
            setPlaystate(false);
        }
    }
  return (
    <div
     
      className={`fixed top-0 left-0 w-[100%] h-[100%] bg-black opacity-90 rounded-lg z-50 flex items-center justify-center ${
        playState ? '' : "hidden"
      }`} 
      ref={player} onClick={closePlayer} >
      <video
        className="w-[98%] max-w-[900px] h-auto border-[4px] border-solid"
        controls
      >
        <source src="src/assets/Nexus.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Vid;
