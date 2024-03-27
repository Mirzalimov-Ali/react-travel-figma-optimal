import React from 'react'
import { NavbarContainer, NavbarParagraph, NavbarSignUpButton } from '../../style'

import logo from '../../assets/Logo.png'
import arrow from '../../assets/down-arrow.svg'

function Navbar() {
  return (
    <NavbarContainer>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <div style={{display: 'flex', gap: "60px", alignItems: "center"}}>
            <NavbarParagraph>Desitnations</NavbarParagraph>
            <NavbarParagraph>Hotels</NavbarParagraph>
            <NavbarParagraph>Flights</NavbarParagraph>
            <NavbarParagraph>Bookings</NavbarParagraph>
            <NavbarParagraph>Login</NavbarParagraph>
            <NavbarSignUpButton>Sign up</NavbarSignUpButton>
            <NavbarParagraph>EN <img src={arrow} alt="down arrow" /></NavbarParagraph>
        </div>
    </NavbarContainer>
  )
}

export default Navbar
