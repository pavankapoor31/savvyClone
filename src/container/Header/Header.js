import React from 'react'
import Logo from '../../assets/images/logo.webp'

function Header() {
  return (

    <div className='header wrap'>
        <img src={Logo} alt="logo" className='header__logo'/>
        <span className='header__text'>pay</span>
    </div>
  )
}

export default Header