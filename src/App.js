
import React from 'react'
import Header from './components/Header'
import Carousel2 from'./components/Carousel2'
// import Ue4player from './components/Ue4player'
import Form from'./components/Form'
import TextBody from './components/TextBody'
import Ue4player2 from './components/Ue4player2'
// import AppProvider from './AppProvider'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function App() {
  return (
    <>
    <Header/>
    <TextBody/>
    <Carousel2/> 
    <Ue4player2/> 
    <Form/>
    
</>
  )
}

export default App;
   
