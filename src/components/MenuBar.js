import React, { useState, useEffect, useContext } from "react";
import "../css/MenuBar.css";
// import Logo from '../../public'
import Logo from "../images/Logo5.png";
import { Link } from "react-scroll";
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
    window.onscroll = function () {
      if (window.pageYOffset < 44.400001525878906) {
        console.log("aa", window.pageYOffset);
        // alert('I AM AT THE TOP');
        setScrollOnTP(true);
      }  else {
        setScrollOnTP(false);
      }
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

  const FixedBarClass = scrollOnTP ? "hiden" : "containerMenuBarFixed";
  const containerMenuBar = scrollOnTP ? "containerMenuBar" : "hiden";
  console.log("scrolONTOP", scrollOnTP);

  return (
    <>
      <div className={FixedBarClass}>
        <img id="imagenLogo " src={Logo} alt="Logo" />
        <div className="redesFixed">
          {/* <span>{facebook}</span>
        <span>{Instagram}</span>
        <span>{Twitter}</span> */}
        </div>
        <div className="menusFixed">
          <Link
            activeClass="active"
            to="AboutUs"
            spy={true}
            smooth={true}
            duration={250}
            offset={-70}
            style={{ display: "inline-block", margin: "20px" }}
          >
            <h3>About Us</h3>
          </Link>
          <Link
            activeClass="active"
            to="Gallery"
            spy={true}
            smooth={true}
            duration={250}
            offset={-70}
            style={{ display: "inline-block", margin: "20px" }}
          >
            <h3>Gallery</h3>
          </Link>
          <Link
            activeClass="active"
            to="tour"
            spy={true}
            smooth={true}
            duration={250}
            offset={-70}
            style={{ display: "inline-block", margin: "20px" }}
          >
            <h3>Virtual Tour</h3>
          </Link>
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            duration={250}
            offset={-70}
            style={{ display: "inline-block", margin: "20px" }}
          >
            <h3>Contact</h3>
          </Link>
        </div>
      </div>
      <div className={containerMenuBar}>
        <img id="imagenLogo " src={Logo} alt="Logo" />

        <div className="redes">
          {/* <span>{facebook}</span>
        <span>{Instagram}</span>
        <span>{Twitter}</span> */}
        </div>
        <div className="menus">
          <Link
            activeClass="active"
            to="AboutUs"
            spy={true}
            smooth={true}
            duration={250}
            offset={-70}
            style={{ display: "inline-block", margin: "20px" }}
          >
            {" "}
            <h3>About Us</h3>
          </Link>
          <Link
            activeClass="active"
            to="Gallery"
            spy={true}
            smooth={true}
            duration={250}
            offset={-70}
            style={{ display: "inline-block", margin: "20px" }}
          >
            <h3>Gallery</h3>
          </Link>
          <Link
            activeClass="active"
            to="tour"
            spy={true}
            smooth={true}
            duration={250}
            offset={-70}
            style={{ display: "inline-block", margin: "20px" }}
          >
            <h3>Virtual Tour</h3>
          </Link>
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            duration={250}
            offset={-70}
            style={{ display: "inline-block", margin: "20px" }}
          >
            <h3>Contact</h3>
          </Link>
        </div>
      </div>
    </>
  );
}
