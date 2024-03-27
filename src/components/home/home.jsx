import React from 'react'
import { Category4Boxes, Category4BoxesP, Category4BoxesTitle, CategoryBox, H1Titles, HomeWrapper, Paragraph, TopDestinationsContainer } from '../../style'

import box1 from '../../assets/box-1.svg'
import box2 from '../../assets/box-2.svg'
import box3 from '../../assets/box-3.png'
import box4 from '../../assets/box-4.svg'

import decore from '../../assets/box-decore.png'

import italy from '../../assets/italy.png'
import london from '../../assets/london.png'
import india from '../../assets/india.png'

import cursor from '../../assets/cursor.svg'


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

          <CategoryBox  style={{zIndex: "5",borderRadius: "36px", width: "250px",height: "300px", boxShadow: "0px 100px 80px 0px rgba(0, 0, 0, 0.02), 0px 64.815px 46.852px 0px rgba(0, 0, 0, 0.02), 0px 38.519px 25.481px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 8.148px 6.519px 0px rgba(0, 0, 0, 0.01), 0px 1.852px 3.148px 0px rgba(0, 0, 0, 0.00)", marginRight: "-200px"}}>
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

      <div>
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
                <Category4BoxesP>Rome, Italty</Category4BoxesP>
                <Category4BoxesP>$5,42k</Category4BoxesP>
              </div>
              <div style={{display: "flex", alignItems: "center", gap: "20px", marginTop: "20px"}}>
                <img src={cursor} alt="" />
                <Category4BoxesP>10 Days Trip</Category4BoxesP>
              </div>
            </div>
          </div>
        </TopDestinationsContainer>
      </div>
      
    </HomeWrapper>
  )
}

export default Home
