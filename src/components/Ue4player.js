import React, { useState, useEffect } from "react"
import SDK from 'furioos-sdk';

const Player = SDK.Player;

const options = {
  whiteLabel: true,
  hideToolbar: false,
  hideTitle: true,
  hidePlayButton: false
  // debugUe$playerMode: true
};

function Ue4player() {

  const [loaded, setLoaded] = useState(false)
  const [player, setPlayer] = useState()
  const [maximize, setMaximize] = useState(false)

  useEffect(() => !player && setPlayer(new Player("129.948", "Ue4Container1", options)), [loaded])

 const max= maximize? 'maximi' : 'minimi'


  return (
    <div   id='tour' className={max} style={{
      display: "grid",
      height: "80vh",
      backgroundColor: "white",
      justifyContent: "center",
      alignContent: "center",
      overflow: "hidden",
      marginBottom: '2em'
    
    }} >
      {/* <button onClick={()=>setMaximize(!maximize)}>on press</button> */}

      <div  className={max} onMouseEnter={() => setLoaded(true)}
        style={{
          display: "flex",
          boxSizing: "border-box",
          width: "calc(80vw + 4px)",
          height: "calc(80vh + 4px)",
          backgroundColor: "black",
          overflow: "hidden",
          justifyContent: "center",
          alignContent: "center"

        }} id="Ue4Container1" />

    </div>
  );
}

export default Ue4player;