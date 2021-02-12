import { Background, ContentDiv, Row1Div, SmallContainer, 
    StyledImg, StyledLink, RowLong, LongContainer } from './StyledElements';

import ViktorPic from './imgs/ViktorProfilBild.jpg';
import Navbar from './Navbar';
import Weather from './Weather';








function Home() {
    return (
        <Background>
            <Navbar />
            <ContentDiv>
                <Row1Div>
                    <SmallContainer>
                        <StyledImg src={ViktorPic} alt="Picture of Viktor Hultman" />
                        <h1>Viktor Hultman</h1>
                    </SmallContainer>
                    <SmallContainer>
                        <h1>Front End Developer</h1>
                        <h3>I'm a problem solver who lives in Södertälje</h3>
                        <h3>Stuff I work with:</h3>
                        <ul>
                            <li>Html, CSS and vanilla JavaScript</li>
                            <li><StyledLink href="https://www.figma.com/" target="_blank" rel="noreferrer">Figma</StyledLink></li>
                            <li><StyledLink href="https://reactjs.org/" target="_blank" rel="noreferrer">React.js</StyledLink></li>
                        </ul>
                    </SmallContainer>
                </Row1Div>
                <RowLong>
                    <LongContainer>
                        <h2>I also work with external api's such as the one used below called <StyledLink href="https://openweathermap.org/" target="_blank" rel="noreferrer">Openweathermap.org.</StyledLink></h2>
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