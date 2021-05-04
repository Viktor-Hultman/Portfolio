import styled from 'styled-components';

import { Link } from 'react-router-dom';


export const Background = styled.div`
display: flex;
min-width: 100vw;
background: ${props => props.theme.backgroundColor};
min-height: 100vh;
flex-direction: column;
text-align: center;
align-items: center;
color: ${props => props.theme.txtColor};
& li {
    list-style: none;
}

&::-webkit-scrollbar {
    display: none;
}

@media (max-width: 700px) {
    flex-direction: column;
}
`
export const ContentDiv = styled.div`
width: 70%;
display: flex;
flex-direction: column;
`

export const InfoDiv = styled.div`
display: flex;
flex-direction: row;
width: 100%;

@media (max-width: 700px) {
    flex-direction: column;
}
`
export const RowLong = styled.div`
display: flex;
flex-direction: row;
min-height: 300px;
height: 100%;
width: 100%;
`

export const SmallContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
min-height: 400px;
width: 50%;
min-width: 220px;
color: ${props => props.theme.txtColor};

& h1, h3 {
    font-family: 'Open Sans', sans-serif;
}

& {
    li {
        font-family: 'Nunito', sans-serif;
    }
}

@media (max-width: 700px) {
    min-width: 100%;
    min-height: 200px;
    margin-top: 20px;
}

`

export const LongContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
text-align: center;
margin-top: 30px;

& h2 {
    font-family: 'Nunito', sans-serif;
    padding-bottom: 20px;
}

`

export const LongContainerRow = styled(LongContainer)`
width: 70%;
flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap;
`

export const StyledImg = styled.img`
width: 200px;
height: 200px;
border-radius: 100px;
`

export const GalleryDiv = styled.div`
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: center;
text-align: center;
`
export const GalleryImg = styled(StyledImg)`
width: 200px;
height: 200px;
border-radius: 30px;
padding: 20px;

transition: -webkit-transform .5s ease-in-out;
transition: transform .5s ease-in-out;

&:hover {
    -webkit-transform: scale(1.07);
    transform: scale(1.07);
  }
`
export const GalleryCaption = styled.h5`
position: absolute;
max-width: 180px;
padding: 7px;
margin-top: 15px;
border-radius: 15px;
word-break: break-word;
font-size: 18px;
background-color: ${props => props.theme.galleryCaptionBackground};
color: ${props => props.theme.txtColor};
font-family: 'Open Sans', sans-serif;
`

export const ProjectContainerBox = styled(LongContainerRow)`
@media (max-width: 700px) {
    height: 70%;
    width: 100%;
}
`

export const SubTitle = styled.h3`
padding: 10px 10px 30px 10px;
font-family: 'Nunito', sans-serif;
letter-spacing: 0.5px;
`

export const CenterContentContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
padding-top: 70px;
`

export const ContactContainerBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 50%;
width: 60%;

@media (max-width: 700px) {
    height: 70%;
    width: 100%;
}
`

export const Title = styled.h1`
padding: 20px;
color: ${props => props.theme.txtColor};
font-family: 'Open Sans', sans-serif;
`

export const ContactInfoDiv = styled.div`
padding-top: 30px;
width: 70%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
`

export const SmallLogo = styled.img`
padding-right: 20px;
`
export const StyledLink = styled.a`
text-decoration: none;
color: ${props => props.theme.linkColor};
font-family: 'Nunito', sans-serif;
transition: color 0.4s;

&:hover {
    color: ${props => props.theme.linkHoverColor};
}
`

export const ThemeButtonsDiv = styled.div`
margin: 30px;
padding: 10px;

& h2 {
    font-family: 'Nunito', sans-serif;
    letter-spacing: 1px;
}
`

export const StyledNav = styled.nav`
width: 70%;
border-bottom: 2px solid ${props => props.theme.navbarLine};
display: flex;
align-items: center;
justify-content: space-between;

& h1 {
    font-family: 'Merienda', cursive;
    align-self: flex-end;
}
`

export const StyledUL = styled.ul`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: flex-end;
align-items: center;
list-style: none;
height: 50px;


@media (max-width: 400px) {
    flex-direction: column;
    height: 90px;
}
`;

export const NavbarLink = styled(Link)`
font-family: 'Nunito', sans-serif;
font-size: 20px;
color: ${props => props.theme.linkColor};
text-decoration: none;
padding: 0px 5px 0px 5px;
transition: color 0.4s;

&:hover {
    color: ${props => props.theme.linkHoverColor};
    
}

@media (max-width: 170px) {
    padding-right: 10px;
}
`
