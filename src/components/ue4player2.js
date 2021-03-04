import React, { useState, useEffect } from "react"
import SDK from 'furioos-sdk';

const Player = SDK.Player;

const options = {
  whiteLabel: true,
  hideToolbar: true,
  hideTitle: true,
  hidePlayButton: false
  // debugUe$playerMode: true
};

function Ue4player() {

  const [loaded, setLoaded] = useState(false)
  const [player, setPlayer] = useState()

  useEffect(() => !player && setPlayer(new Player("375.200", "Ue4Container2", options)), [loaded])

  return (
    <div   id='tour' style={{
      display: "grid",
      height: "80vh",
      backgroundColor: "white",
      justifyContent: "center",
      alignContent: "center",
      overflow: "hidden",
      marginBottom: '2em'
    
    }} >

      <div onMouseEnter={() => setLoaded(true)}
        style={{
          display: "flex",
          boxSizing: "border-box",
          width: "calc(80vw + 4px)",
          height: "calc(80vh + 4px)",
          backgroundColor: "black",
          overflow: "hidden",
          justifyContent: "center",
          alignContent: "center"

        }} id="Ue4Container2" />

    </div>
  );
}

export default Ue4player;