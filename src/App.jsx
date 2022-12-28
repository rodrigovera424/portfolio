import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/Experience/Experience"
import Services from "./components/Services/Services"
import Portfolio from "./components/Portfolio/Portfolio"
import Testimonios from './components/testimonios/Testimonios'
import Contact from "./components/contact/Contact"
import Footer from './components/Footer/Footer'
const App = () => {
  return (
     <>
         <Header/>
         <Nav/>
         <About/>
         <Experience/>
         <Services/>
         <Portfolio/>
         <Testimonios/>
         <Contact/>
         <Footer/>
         </>


    

     )
}

export default App