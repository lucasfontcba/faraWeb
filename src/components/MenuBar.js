import React, { useState, useEffect, useContext } from "react";
import "../css/MenuBar.css";
// import Logo from '../../public'
import Logo from '../images/Logo.png'
// import Logo2 from '../images/Logo2.png'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import { faInsagram } from "@fortawesome/free-regular-svg-icons";

export default function MenuBar() {
  
  // const facebook = <FontAwesomeIcon icon={faFacebook} />;
  // const Instagram = <FontAwesomeIcon icon={faInstagram} />;
  // const Twitter = <FontAwesomeIcon icon={faTwitter} />;

  const [scrollOnTP, setScrollOnTP] = useState(false);
 

  useEffect(() => {
    window.onscroll = function() {
      if(window.pageYOffset !== 0) {
        // alert('I AM AT THE TOP');
        setScrollOnTP(true)
       

      }
      else{ setScrollOnTP(false)}
    };
  }, []);
  ///revisar para desmontar la escucha y q no quede abieirto//

  // componentDidMount() {
  //   window.onscroll = function() {
  //     if(window.pageYOffset === 0) {
  //       alert('I AM AT THE TOP');
  //     }
  //   };
  // }
  // componentWillUnmount() {
  //   window.onscroll = null;
  // }
 

  
 const FixedBarClass = scrollOnTP? 'containerMenuBarFixed'  : 'hiden'
 console.log('scrolONTOP',scrollOnTP)
 
  return (
<>
    <div className= {FixedBarClass} >
     <img id="imagenLogo " src={Logo} alt="Logo" />
      <div className="redesFixed">
        {/* <span>{facebook}</span>
        <span>{Instagram}</span>
        <span>{Twitter}</span> */}
      </div>
      <div className='menusFixed'>
      <h3>About Us</h3>
      <h3>Gallery</h3>
      <h3>Contact</h3>
      </div>
     
    </div>
    <div className="containerMenuBar">
    <img id="imagenLogo " src={Logo} alt="Logo" />
      
      <div className="redes">
        {/* <span>{facebook}</span>
        <span>{Instagram}</span>
        <span>{Twitter}</span> */}
      </div>
      <div className='menus'>
      <h3>About Us</h3>
      <h3>Gallery</h3>
      <h3>Contact</h3>
      </div>
     
    </div>
    </>
  );
}
