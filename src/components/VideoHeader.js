import React from "react";
import "../css/VideoHeader.css";
import ReactPlayer from 'react-player'
import { Video } from '../videos/loop.mp4';
// import { baseUrlVideos } from "../../assets/loop.mp4";
import gallery4 from '../images/dto1.jpg' ;




export default function VideoHeader(props) {
 

  return (
      <div>
       
    
    <ReactPlayer
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
 
  ></ReactPlayer>
  </div>
   
  );
}
