import React from 'react'
import { FooterColumnContainer, FooterColumnH2, FooterColumnP, FooterContainer, Paragraph } from '../../style'

import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.svg'

import googlePlay from '../../assets/google-play.png'
import appleStore from '../../assets/apple-store.svg'

function Footer() {
  return (
    <FooterContainer>
        <div style={{display: "flex", gap: "80px"}}>
            <div>
                <h1 style={{marginBottom: "20px", color: "#181E4B", fontSize: "40px"}}>Jadoo.</h1>
                <Paragraph>Book your trip in minute, get full <br />Control for much longer.</Paragraph>
            </div>
            <FooterColumnContainer>
                <FooterColumnH2>Company</FooterColumnH2>
                <FooterColumnP>About</FooterColumnP>
                <FooterColumnP>Careers</FooterColumnP>
                <FooterColumnP>Mobile</FooterColumnP>
            </FooterColumnContainer>

            <FooterColumnContainer>
                <FooterColumnH2>Contact</FooterColumnH2>
                <FooterColumnP>Help/FAQ</FooterColumnP>
                <FooterColumnP>Press</FooterColumnP>
                <FooterColumnP>Affilates</FooterColumnP>
            </FooterColumnContainer>

            <FooterColumnContainer>
                <FooterColumnH2>More</FooterColumnH2>
                <FooterColumnP>Airlinefees</FooterColumnP>
                <FooterColumnP>Airline</FooterColumnP>
                <FooterColumnP>Low fare tips</FooterColumnP>
            </FooterColumnContainer>

            <div style={{display: "flex", flexDirection: "column", alignItems: "start", gap: "15px"}}>
                <div>
                    <img src={facebook} alt="" style={{cursor: "pointer"}}/>
                    <img src={instagram} alt="" style={{cursor: "pointer"}}/>
                    <img src={twitter} alt="" style={{cursor: "pointer"}}/>
                </div>
                <FooterColumnP>Discover our app</FooterColumnP>
                <div style={{display: "flex",  gap: "10px"}}>
                    <img src={googlePlay} alt="" />
                    <img src={appleStore} alt="" />
                </div>
            </div>
        </div>
        
        <div>
            <FooterColumnP>All rights reserved@jadoo.co</FooterColumnP>
        </div>
    </FooterContainer>
  )
}

export default Footer
