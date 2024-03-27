import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;  
    padding: 0 200px;
`

export const NavbarParagraph = styled.p`
    color: var(--1st, #212832);
    font-family: "Google Sans";
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`

export const NavbarSignUpButton = styled.button`
    background-color: #FFF1DA;
    border: 1px solid #000;
    border-radius: 5px;
    height: 40px;
    width: 100px;
    cursor: pointer;
    font-size: 16px;
`

export const HomeContainer = styled.div`
    display: flex;
    padding: 0 200px;
    justify-content: space-between;
    align-items: center;
    p.navbar-title {
        color: #DF6951;
        font-size: 20px;
        font-weight: 700;
        text-transform: uppercase;
    }
    h1 {
        color: #181E4B;
        font-size: 84px;
        font-weight: 700;
        line-height: 89px;
        letter-spacing: -3.36px;
        margin-bottom: 40px;
    }
`

export const Paragraph = styled.p`
    color: #5E6282;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
`

export const HeaderButton = styled.button`
    background-color: #F1A501;
    width: 160px;
    height: 50px;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    cursor: pointer;
`

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const H1Titles = styled.h1`
    color: var(--3rd, #14183E);
    text-align: center;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`

export const Category4Boxes = styled.div`
    display: flex;
    align-items: center;
    gap: 100px;
    margin-top: 50px;
    margin-bottom: 100px;
    height: 300px;
`

export const CategoryBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`

export const Category4BoxesTitle = styled.p`
    color: var(--text-heading-color, #1E1D4C);
    text-align: center;
    font-family: "Open Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`

export const Category4BoxesP = styled.p`
    color: var(--TEXT-CLR, #5E6282);
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
`

export const TopDestinationsContainer = styled.div`
    display: flex;
    justify-content: center;    
    /* gap: 50px; */
    margin-top: 50px;
`