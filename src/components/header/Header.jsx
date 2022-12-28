import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png" 
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
    <div className='container header__container'>
    <h5>Hola! yo soy</h5>
    <hi>Rodrigo Vera</hi>
    <h5 className='text-light'>FullStack Developer</h5>
    <CTA/>
    <HeaderSocials/>


  <div className='me'>
  <img src={ME} alt="me"/>
  </div>

  </div>
  <a href='#contact'className='scroll_down'>sigue hacia abajo</a> 
</header>
  )
}

export default Header