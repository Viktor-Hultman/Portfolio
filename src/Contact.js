import {
    Background, CenterContentContainer, ContactContainerBox, Title,
    ContactInfoDiv, SmallLogo, StyledLink, ThemeButtonsDiv
} from './StyledElements';

import styled from 'styled-components';


import Navbar from './Navbar';
import LinkedinLogo from './imgs/linkedin-logo.png';
import GithubLogo from './imgs/github-logo.png';
import EmailLogo from './imgs/EmailLogo.png';

import { GrayOrange, TeslaMotors, Palette } from './App';


const DefaultButton = styled.button`
margin-top: 10px;
width: 80px;
height: 80px;
font-size: 18px;
margin: 10px;
border: 3px solid #B06500;
border-radius: 15px;
background: #41494d;
font-family: 'Merienda', cursive;
color: #e3e3e3;
text-decoration: underline;
text-decoration-color: #B06500;

&:hover {
    border-width: 4px;
    cursor: pointer;
}
`

const TeslaButton = styled(DefaultButton)`
background: #212121;
color: #fafafa;
border-color: #cc0000;
text-decoration-color: #cc0000;
`

const PaletteButton = styled(DefaultButton)`
background: #565c5e;
color: #dfdbd8;
border-color: #9d7463;
text-decoration-color: #9d7463;
`



const ThemeButtons = ({ theme, setTheme }) => {



    const setColorTheme = (e) => {
        localStorage.setItem('theme', e.target.value)
        if (e.target.value === "GrayOrange") {
            setTheme(GrayOrange)
        } else if (e.target.value === "TeslaMotors") {
            setTheme(TeslaMotors)
        } else if (e.target.value === "Palette") {
            setTheme(Palette)
        }
    }


    return (
        <ThemeButtonsDiv>
            <h2>Here you can select a new color-theme for the portfolio</h2>
            <DefaultButton value="GrayOrange" onClick={setColorTheme}>VH</DefaultButton>
            <TeslaButton value="TeslaMotors" onClick={setColorTheme}>VH</TeslaButton>
            <PaletteButton value="Palette" onClick={setColorTheme}>VH</PaletteButton>
        </ThemeButtonsDiv>
    )
}



const Contact = ({ theme, setTheme }) => {
    return (
        <Background>
            <Navbar />
            <CenterContentContainer>
                <ContactContainerBox>

                    <Title>Here are all the ways of contacting me!</Title>
                    <ContactInfoDiv>
                        <SmallLogo src={EmailLogo} />
                        <h2>
                            <StyledLink href="mailto:viktor-hultman@hotmail.com" target="_blank" rel="noopener">My email</StyledLink>
                        </h2>
                    </ContactInfoDiv>
                    <ContactInfoDiv>
                        <SmallLogo src={GithubLogo} />
                        <h2><StyledLink href="https://github.com/Viktor-Hultman" target="_blank" rel="noopener">My github</StyledLink></h2>
                    </ContactInfoDiv>
                    <ContactInfoDiv>
                        <SmallLogo src={LinkedinLogo} />
                        <h2><StyledLink href="https://www.linkedin.com/in/viktor-hultman-a65a1b18a/" target="_blank" rel="noopener">My linkedin</StyledLink></h2>
                    </ContactInfoDiv>


                </ContactContainerBox>

                <ThemeButtons theme={theme} setTheme={setTheme} />

            </CenterContentContainer>

        </Background>

    );
}

export default Contact;