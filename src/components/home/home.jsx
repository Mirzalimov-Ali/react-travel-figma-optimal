import React from 'react'
import { Category4Boxes, Category4BoxesP, Category4BoxesTitle, CategoryBox, FooterTop, H1Titles, HomeWrapper, LogoContainer, Paragraph, TopDestinationsContainer } from '../../style'

import box1 from '../../assets/box-1.svg'
import box2 from '../../assets/box-2.svg'
import box3 from '../../assets/box-3.png'
import box4 from '../../assets/box-4.svg'

import decore from '../../assets/box-decore.png'

import italy from '../../assets/italy.png'
import london from '../../assets/london.png'
import india from '../../assets/india.png'

import cursor from '../../assets/cursor.svg'

import trip1 from '../../assets/trip-1.svg'
import trip2 from '../../assets/trip-2.svg'
import trip3 from '../../assets/trip-3.png'

import tripRight from '../../assets/trip-right-img.png'

import threeDots from '../../assets/three-dots.svg'

import aboutRight from '../../assets/about-us-right.png'

import logo1 from '../../assets/logo-1.png'
import logo2 from '../../assets/logo-2.png'
import logo3 from '../../assets/logo-3.png'
import logo4 from '../../assets/logo-4.png'
import logo5 from '../../assets/logo-5.png'

function Home() {
  return (
    <HomeWrapper>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Paragraph>CATEGORY</Paragraph>
        <H1Titles>We Offer Best Services</H1Titles>
        <Category4Boxes>
          <CategoryBox>
            <img src={box1} alt="" />
            <Category4BoxesTitle>Calculated Weather </Category4BoxesTitle>
            <Category4BoxesP>Built Wicket longer <br /> admire do barton <br /> vanity itself do in it.</Category4BoxesP>
          </CategoryBox>

          <CategoryBox  style={{backgroundColor: "white", zIndex: "5",borderRadius: "36px", width: "250px",height: "300px", boxShadow: "0px 100px 80px 0px rgba(0, 0, 0, 0.02), 0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02), 0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01), 0px 1.852px 3.148px 0px rgba(0, 0, 0, 0.00)", marginRight: "-200px"}}>
            <img src={box2} alt="" style={{width: "100px"}}/>
            <Category4BoxesTitle>Best Flights </Category4BoxesTitle>
            <Category4BoxesP>Engrossed listening. <br /> Park gate sell they <br /> west hard for the.</Category4BoxesP>
          </CategoryBox>

          <img src={decore} alt="" style={{width: "100px", height: "100px", position: "relative", top: "150px", right: "200px", zIndex: "-3"}}/>

          <CategoryBox>
            <img src={box3} alt="" />
            <Category4BoxesTitle>Local Events</Category4BoxesTitle>
            <Category4BoxesP>Barton vanity itself do in it. <br /> Preferd to men it <br /> engrossed listening. </Category4BoxesP>
          </CategoryBox>

          <CategoryBox>
            <img src={box4} alt="" />
            <Category4BoxesTitle>Customization</Category4BoxesTitle>
            <Category4BoxesP>We deliver outsourced <br />aviation services for <br />military customers</Category4BoxesP>
          </CategoryBox>
        </Category4Boxes>
      </div>

      <div style={{marginTop: "100px"}}>
        <Category4BoxesP>Top Selling</Category4BoxesP>
        <H1Titles>Top Destinations</H1Titles>
        <TopDestinationsContainer>
          <div>
            <div>
              <img src={italy} alt="" />
            </div>

            <div style={{backgroundColor: "white", display: "flex", flexDirection: "column", border: "none", width: "315px", borderRadius: "0 0 24px 24px", height: "150px", padding: "30px 20px", position: "relative", right: "-80px", top: "-330px"}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Category4BoxesP>Rome, Italty</Category4BoxesP>
                <Category4BoxesP>$5,42k</Category4BoxesP>
              </div>
              <div style={{display: "flex", alignItems: "center", gap: "20px", marginTop: "20px"}}>
                <img src={cursor} alt="" />
                <Category4BoxesP>10 Days Trip</Category4BoxesP>
              </div>
            </div>
          </div>

          <div style={{margin: "0 -100px"}}>
            <div>
              <img src={london} alt="" />
            </div>
          </div>

          <div>
            <div>
              <img src={india} alt="" />
            </div>

            <div style={{backgroundColor: "white", display: "flex", flexDirection: "column", border: "none", width: "315px", borderRadius: "0 0 24px 24px", height: "150px", padding: "30px 20px", position: "relative", right: "-80px", top: "-330px"}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Category4BoxesP>Full Europe</Category4BoxesP>
                <Category4BoxesP>$15k</Category4BoxesP>
              </div>
              <div style={{display: "flex", alignItems: "center", gap: "20px", marginTop: "20px"}}>
                <img src={cursor} alt="" />
                <Category4BoxesP>28 Days Trip</Category4BoxesP>
              </div>
            </div>
          </div>
        </TopDestinationsContainer>
      </div>

      <div style={{display: "flex", alignItems: "center", marginTop: "-100px", gap: "150px"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
          <Paragraph>Easy and Fast</Paragraph>
          <H1Titles>Book your next trip</H1Titles>
          <H1Titles style={{marginBottom: "30px"}}>in 3 easy steps</H1Titles>
          <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
            <img src={trip1} alt="" />
            <div>
              <Paragraph>Choose Destination</Paragraph>
              <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Urna, tortor tempus. </p>
            </div>
            
          </div>
          <div style={{display: "flex", gap: "20px", alignItems: "center", margin: "50px 0"}}>
            <img src={trip2} alt="" />
            <div>
              <Paragraph>Make Payment</Paragraph>
              <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Urna, tortor tempus. </p>
            </div>
            
          </div>
          <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
            <img src={trip3} alt="" />
            <div>
              <Paragraph>Reach Airport on Selected Date</Paragraph>
              <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Urna, tortor tempus. </p>
            </div>
            
          </div>
        </div>

        <div>
          <img src={tripRight} style={{width: "500px", height: "500px"}}/>
        </div>
        
      </div>

      <div style={{marginTop: "100px", display: "flex", }}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
          <Paragraph>TESTIMONIALS</Paragraph>
          <H1Titles>What people say</H1Titles>
          <H1Titles style={{marginBottom: "80px"}}>about Us.</H1Titles>
          <img src={threeDots} alt="" />
        </div>
        <div>
          <img src={aboutRight} alt="" />
        </div>
      </div>

      <LogoContainer>
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "200px",height: "100px",borderRadius: "10px", boxShadow: "0px 100px 80px 0px rgba(0, 0, 0, 0.02), 0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02), 0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01), 0px 1.852px 3.148px 0px rgba(0, 0, 0, 0.00)"}}>
          <img src={logo3} alt="" />
        </div>
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
      </LogoContainer>

      <div style={{display: "flex", flexDirection: "column", alignItems: "center", position: "absolute", top: "3800px"}}>
        <h1 style={{color: "#5E6282"}}>Subscribe to get information, latest news and other</h1>
        <h1 style={{color: "#5E6282"}}>interesting offers about Jadoo</h1>
        <div style={{marginTop: "100px"}}>
          <input type="text"  placeholder='Your email' style={{width: "300px", height: "40px", padding: "0 20px", border: "none", borderRadius: "10px", backgroundColor: "white", marginRight: "20px"}}/>
          <button style={{background: "linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)", height: "40px", border: "none", borderRadius: "10px", color: "white", width: "100px", cursor: "pointer"}}>Subscribe</button>
        </div>
      </div>
      <FooterTop/>
      
    </HomeWrapper>
  )
}

export default Home 
