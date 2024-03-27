import React from 'react'
import { HeaderButton, HomeContainer, Paragraph } from '../../style'
import decore from '../../assets/home-decore.png'
import traveller from '../../assets/travel-women.png'
import playButton from '../../assets/play-button.png'

function Header() {
  return (
    <HomeContainer>
        <div>
            <p className='navbar-title'>Best Destinations around the world</p>
            <h1>Travel, enjoy <br />and live a new <br />and full life</h1>
            <Paragraph>Built Wicket longer admire do barton vanity itself do in it. <br /> Preferred to sportsmen it engrossed listening. Park gate <br /> sell they west hard for the.</Paragraph>
            <div style={{display: "flex", alignItems: "center"}}>
                <HeaderButton>Find out more</HeaderButton>
                <img src={playButton} alt="play button" style={{marginTop: "30px"}}/>
                <Paragraph>Play Demo</Paragraph>
            </div>
        </div>
        <div>
            <img src={decore} alt="" style={{position: "absolute", top: "0", right: "0", zIndex: "-1"}}/>
            <img src={traveller} alt="" />
        </div>
    </HomeContainer>
  )
}

export default Header
