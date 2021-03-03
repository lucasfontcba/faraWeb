import React from "react";
import "../css/VideoHeader.css";
import ReactPlayer from 'react-player'
// import { loop } from '../videos/loop.mp4'
// import { baseUrlVideos } from "../../assets/loop.mp4";
import gallery4 from '../images/dto1.jpg' ;




export default function VideoHeader(props) {
 

  return (
      <div>
        <video autoPlay muted loop
         style={{ position:"relative",
         width:'100%',
          top:'0',
          left:'0',
         height:'100%',
         objectFit:'cover',
        //  transform: 'translate (-50%, -50%')',
         zIndex:'-1',


      
      
      }}>
        <source  src='loop.mp4' type='video/mp4'/>

        </video>
       
    
    {/* <ReactPlayer
    id="reproductor"
    width="100%"
    height='100%'
    controls={false}
    playing= {true}
    loop={true}
    playsinline={true}
    muted={true}
    autoplay={true}
    
    
    // url={Video}
    // url="../../assets/loop.mp4"
    url="loop.MP4"
    config={{ 
      file: { 
        attributes: {
          // onContextMenu: e => e.preventDefault(),
          controlsList: 'nodownload'
        } 
      } 
    }}
 
  ></ReactPlayer> */}
  </div>
   
  );
}
