import {
    Background, CenterContentContainer, ContactContainerBox, Title,
    ContactInfoDiv, SmallLogo, StyledLink, MessageButtonDiv
} from './StyledElements';

import React from 'react';
import Navbar from './Navbar';
import LinkedinLogo from './imgs/linkedin-logo.png'
import GithubLogo from './imgs/github-logo.png';
import EmailLogo from './imgs/EmailLogo.png'






class MessageButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Did you like my portfolio?',
            display: '',
            color: 'blue'
        };
        this.toggleMessage = this.toggleMessage.bind(this);
        this.vanish = this.vanish.bind(this);
    }

    toggleMessage() {
        this.setState({ message: "Horray!" })
    }

    vanish() {
        this.setState({ display: "none" })
    }
    render() {

        return (
            <MessageButtonDiv>
                <h2>
                    {this.state.message}
                </h2>
                <button style={{ display: this.state.display }} onClick={() => { this.toggleMessage(); this.vanish() }}>
                    Yes!
                </button>
            </MessageButtonDiv>
        )
    }
}



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

                <MessageButton />

            </CenterContentContainer>

        </Background>

    );
}

export default Contact;