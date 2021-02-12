
import { Background, GalleryCaption, GalleryDiv, GalleryImg, StyledLink,
CenterContentContainer, Title, ProjectContainerBox, SubTitle } from './StyledElements';

import Navbar from './Navbar';
import QuirePic from './imgs/QuirePic.png';
import RushPic from './imgs/RushPic.png';
import CalculatorPic from './imgs/CalculatorPic.png';
import PointAndClickPic from './imgs/PointAndClickPic.png';



function Projects() {
    return (
        <Background>
            <Navbar />
            <CenterContentContainer>
                <Title>Here some of the projects I've been a part of.</Title>
                <SubTitle>For more information about the projects below, visit 
                    <StyledLink href="https://github.com/Viktor-Hultman" target="_blank" rel="noreferrer"> my github profile.</StyledLink>
                </SubTitle>

                <ProjectContainerBox>
                    <GalleryDiv>
                        <a href="http://bbapointandclick.surge.sh/" target="_blank" rel="noreferrer">
                            <GalleryImg src={PointAndClickPic} />
                        </a>
                        <GalleryCaption>Choose your own adventure game</GalleryCaption>
                    </GalleryDiv>
                    <GalleryDiv>
                        <a href="https://viktor-hultman.github.io/quire_notebook_assignment_paperclip/" target="_blank" rel="noreferrer">
                            <GalleryImg src={QuirePic} />
                        </a>
                        <GalleryCaption>Quire - Note editor</GalleryCaption>
                    </GalleryDiv>
                    <GalleryDiv>
                        <a href="http://rush-project.surge.sh/" target="_blank" rel="noreferrer">
                            <GalleryImg src={RushPic} />
                        </a>
                        <GalleryCaption>Rush - Mockup gym website with sign up flow</GalleryCaption>
                    </GalleryDiv>
                    <GalleryDiv>

                        <a href="https://viktor-hultman.github.io/homeMadeCalculator/" target="_blank" rel="noreferrer">
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