import React, { useState, useEffect,useCallback } from "react"

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import "../css/Carousel.css";

//   import gallery4 from '../images/dto1.jpg' ;
//   import gallery3 from '../images/dto2.jpeg' ;
//   import gallery2 from '../images/dto3.jpg' ;
//   import gallery1 from '../images/dto4.jpg' ;





function Carousel2() {
      // configure Swiper to use modules
 

      const [currentImage, setCurrentImage] = useState(0);
      const [viewerIsOpen, setViewerIsOpen] = useState(false);
    
      const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
      }, []);
    
      const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
      };
    
      return (
        <div className='carouselContainer'>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      );
}

export default Carousel2;