import { Background } from './Home';
import Navbar from './Navbar';
import LinkedinLogo from './linkedin-logo.png'
import GithubLogo from './github-logo.png';
import EmailLogo from './EmailLogo.png'


import styled from 'styled-components';

export const CenterContentContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
padding-top: 100px;
`

const ContactContainerBox = styled.div`
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
`

const ContactInfoDiv = styled.div`
padding-top: 30px;
width: 70%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
`

const SmallLogo = styled.img`
padding-right: 20px;
`
export const StyledLink = styled.a`
text-decoration: none;
color: #B06500;

&:hover {
    color: #bababa;
}
`


function Contact() {
    return (
        <Background>
            <Navbar />
            <CenterContentContainer>
                <ContactContainerBox>

                    <Title>Here are all the ways of contacting me!</Title>
                    <ContactInfoDiv>
                        <SmallLogo src={EmailLogo} />
                        <h2>
                            <StyledLink href="mailto:viktor-hultman@hotmail.com" target="_blank">My email</StyledLink>
                        </h2>
                    </ContactInfoDiv>
                    <ContactInfoDiv>
                        <SmallLogo src={GithubLogo} />
                        <h2><StyledLink href="https://github.com/Viktor-Hultman" target="_blank">My github</StyledLink></h2>
                    </ContactInfoDiv>
                    <ContactInfoDiv>
                        <SmallLogo src={LinkedinLogo} />
                        <h2><StyledLink href="https://www.linkedin.com/in/viktor-hultman-a65a1b18a/" target="_blank">My linkedin</StyledLink></h2>
                    </ContactInfoDiv>

                </ContactContainerBox>

            </CenterContentContainer>



        </Background>

    );
}

export default Contact;