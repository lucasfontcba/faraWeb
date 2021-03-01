import React, { useState, useEffect } from "react"
import { Player } from 'furioos-sdk';
import './App.css';

const options = {
  whiteLabel: true,
  hideToolbar: true,
  hideTitle: true,
  hidePlayButton: false,
  // debugAppMode: true
};

function App() {

  const [loaded, setLoaded] = useState(false)
  const [player, setPlayer] = useState()

  useEffect(() => {
    loaded && setPlayer(new Player("849.492", "Ue4Container", options))
  }, [loaded])

  return (
    <div onMouseEnter={() => setLoaded(true)} style={{ width: "90vw", height: "90vh" }} id="Ue4Container">

    </div>

  );
}

export default App;
