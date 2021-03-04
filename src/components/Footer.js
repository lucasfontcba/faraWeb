import React, { useState, useContext } from "react";
import "../css/Footer.css";

import Logo from "../images/Logo.png";


// 

    export default function Footer() {


  return (
      <div className='containerFooter'>
          <div className="containerTop" >
              <div className='column uno'>
              <img id="imagenLogo " src={Logo} alt="Logo" />
                  <p> We provides a full range of interior design, architectural design.</p>
              </div>
              <div className='column'>
                  <h4>Contact us</h4>
                  <p>411 University St, Seattle, USA</p>
                  <p>theratio_interior@mail.com</p>
                  <p>+1 800 456 789 123</p>
              </div>
              <div className='column'>
                  <h4>
                  Latest Projects
                  </h4>
                  <p>Stylish Family Appartment</p>
                  <p>Modern Villa in Belgium</p>
                  <p>Private House in Spain</p>
              </div>
              <div className='column'>
              <h4>
              Subscribe
                  </h4>
                  <input placeholder='your email'/>
                  <a>Follow our newsletter to stay updated about agency.</a>
                  

              </div>
          </div>
          <div className='containerButton'>
              <p>Copyright © 2021 Theratio by ThemeModern. All Rights Reserved.</p>
              <p>Privacy Environmental Policy</p>
               </div>

      </div>

  
   
  );
}