import { Background, GalleryCaption, GalleryDiv, GalleryImg, LongContainerRow } from './Home';
import styled from 'styled-components';
import Navbar from './Navbar';
import QuirePic from './QuirePic.png';
import RushPic from './RushPic.png';
import CalculatorPic from './CalculatorPic.png';
import PointAndClickPic from './PointAndClickPic.png';
import { StyledLink, CenterContentContainer, Title } from './Contact';

const ProjectContainerBox = styled(LongContainerRow)`

@media (max-width: 700px) {
    height: 70%;
    width: 100%;
}
`

const SubTitle = styled.h3`
padding: 0px 10px 0px 10px;
`
function Projects() {
    return (
        <Background>
            <Navbar />
            <CenterContentContainer>
                <Title>Here some of the projects I've been a part of.</Title>
                <SubTitle>For more information about the projects below, visit 
                    <StyledLink href="https://github.com/Viktor-Hultman" target="_blank"> my github profile.</StyledLink>
                </SubTitle>

                <ProjectContainerBox>
                    <GalleryDiv>
                        <a href="http://bbapointandclick.surge.sh/" target="_blank">
                            <GalleryImg src={PointAndClickPic} />
                        </a>
                        <GalleryCaption>Choose your own adventure game</GalleryCaption>
                    </GalleryDiv>
                    <GalleryDiv>
                        <a href="https://viktor-hultman.github.io/quire_notebook_assignment_paperclip/" target="_blank">
                            <GalleryImg src={QuirePic} />
                        </a>
                        <GalleryCaption>Quire - Note editor</GalleryCaption>
                    </GalleryDiv>
                    <GalleryDiv>
                        <a href="http://rush-project.surge.sh/" target="_blank">
                            <GalleryImg src={RushPic} />
                        </a>
                        <GalleryCaption>Rush - Mockup gym website with sign up flow</GalleryCaption>
                    </GalleryDiv>
                    <GalleryDiv>

                        <a href="https://viktor-hultman.github.io/homeMadeCalculator/" target="_blank">
                            <GalleryImg src={CalculatorPic} />
                        </a>
                        <GalleryCaption>Calculator - My first atempt at making a calculator</GalleryCaption>
                    </GalleryDiv>
                </ProjectContainerBox>
            </CenterContentContainer>


        </Background>

    );
}

export default Projects;