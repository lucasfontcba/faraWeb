import React, { useState, useEffect } from "react";
// core version + navigation, pagination modules:

import "../css/TextoBody.css";

function TextBody() {
  // configure Swiper to use modules

  return (
    <div className="ContainerText">
      <p>
        <span>C</span>onsidering the physical, mental, and emotional needs of people, interior
        designers use human-centered approaches to address how we live today.
        Creating novel approaches to promoting health, safety, and welfare,
        contemporary interiors are increasingly inspired by biophilia as a
        holistic approach to promoting health, safety, and welfare, contemporary
        interiors are increasingly inspired by biophilia as a holistic approach
        to design. By definition, interior design encompasses diverse aspects of
        our environment. The discipline extends to building materials and
        finishes; casework, furniture.<br/> <br/> <span id='lineMidle'>Biophilia is the idea that humans possess
        an innate tendency to seek connections with nature.</span> The term translates
        to ‘the love of living things’ in ancient Greek (philia = the love of /
        inclination towards), and was used by German-born American psychoanalyst
        Erich Fromm in The Anatomy of Human Destructiveness (1973), which
        described biophilia as “the passionate love of life and of all that is
        alive.” The term was later used by American biologist Edward O. Wilson
        in his work Biophilia (1984), which proposed that the tendency of humans
        to focus on and to affiliate with nature and other life-forvms.
      </p>
      <div className='imagen'></div>
    </div>
  );
}

export default TextBody;
