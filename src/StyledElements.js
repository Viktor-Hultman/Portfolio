import styled from 'styled-components';


export const Background = styled.div`
display: flex;
min-width: 100vw;
background: #41494d;
min-height: 100vh;
flex-direction: column;
text-align: center;
align-items: center;
color: #e3e3e3;
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
width: 80%;
display: flex;
flex-direction: column;
`

export const Row1Div = styled.div`
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
color: #e3e3e3;

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
max-width: 150px;
padding: 7px;
margin-top: 15px;
border-radius: 15px;
word-break: break-word;
font-size: 18px;
background-color: rgba(0,0,0,.6);
color: #f2f2f2;
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
color: #0D0D0D;
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
color: #e3e3e3;
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
color: #B06500;
font-family: 'Nunito', sans-serif;
transition: color 0.4s;

&:hover {
    color: #bababa;
}
`

export const MessageButtonDiv = styled.div`
margin: 30px;
padding: 10px;


& h2 {
    font-family: 'Nunito', sans-serif;
    letter-spacing: 1px;
}

& button {
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    margin-top: 10px;
    width: 50px;
    font-size: 18px;
    padding: 5px;
    border: 1px solid #B06500;
    border-radius: 30px 30px 30px 30px;
    background: #B06500;
    color: #bababa;
    transition: color 0.4s;
    transition: background 0.4s;

    } button:hover {
        background: #B0650080;
        color: white;
        cursor: pointer;
    }
`
