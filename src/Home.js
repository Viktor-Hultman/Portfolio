import styled from 'styled-components';
import ViktorPic from './Viktor-profil-bild.jpeg';
import Navbar from './Navbar';
import Weather from './Weather';
import { StyledLink } from './Contact';

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
const ContentDiv = styled.div`
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

const SmallContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
min-height: 400px;
width: 50%;
min-width: 220px;
color: #e3e3e3;

@media (max-width: 700px) {
    min-width: 100%;
    min-height: 200px;
    margin-top: 20px;
}

`

const LongContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
padding: 20px;
text-align: center;
`

export const LongContainerRow = styled(LongContainer)`
flex-direction: row;
justify-content: space-evenly;
flex-wrap: wrap;
`

export const StyledImg = styled.img`
width: 200px;
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
word-break: break-word;
font-size: 20px;
background-color: rgba(0,0,0,.6);
color: #f2f2f2;
`




function Home() {
    return (
        <Background>
            <Navbar />
            <ContentDiv>
                <Row1Div>
                    <SmallContainer>
                        <h1>Viktor Hultman</h1>

                        <StyledImg src={ViktorPic} />
                    </SmallContainer>
                    <SmallContainer>
                        <h1>Front End Developer</h1>
                        <h3>Stuff I work with:</h3>
                        <ul>
                            <li>Html, CSS and vanilla JavaScript</li>
                            <li><StyledLink href="https://www.figma.com/" target="_blank">Figma</StyledLink></li>
                            <li><StyledLink href="https://reactjs.org/" target="_blank">React.js</StyledLink></li>
                        </ul>
                        
                    </SmallContainer>
                </Row1Div>
                <RowLong>
                    <LongContainer>
                        <h2>I also work with external api's such as the one used below called <StyledLink href="https://openweathermap.org/" target="_blank">Openweathermap.org.</StyledLink></h2>
                        <Weather />
                    </LongContainer>
                </RowLong>
                




            </ContentDiv>
        </Background>
    );
}

export default Home;

/* <StyledAboutDiv>
                <h3>Stuff i am working with</h3>
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>
            </StyledAboutDiv> */