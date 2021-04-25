
import { Background, GalleryCaption, GalleryDiv, GalleryImg, StyledLink,
CenterContentContainer, Title, ProjectContainerBox, SubTitle } from './StyledElements';

import Navbar from './Navbar';
import QuirePic from './imgs/QuirePic.png';
import RushPic from './imgs/RushPic.png';
import Bev from './imgs/Bev.png';
import GamePic from './imgs/ChooseAdventureGame.png';



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
                            <GalleryImg src={GamePic} alt="Image of Game project" />
                        </a>
                        <GalleryCaption>Choose your own adventure game</GalleryCaption>
                    </GalleryDiv>
                    <GalleryDiv>
                        <a href="https://viktor-hultman.github.io/quire_notebook_assignment_paperclip/" target="_blank" rel="noreferrer">
                            <GalleryImg src={QuirePic} alt="Image of Text/ note editor project" />
                        </a>
                        <GalleryCaption>Quire - Note editor</GalleryCaption>
                    </GalleryDiv>
                    <GalleryDiv>
                        <a href="http://rush-project.surge.sh/" target="_blank" rel="noreferrer">
                            <GalleryImg src={RushPic} alt="Image of Sign-up flow website" />
                        </a>
                        <GalleryCaption>Rush - Mockup gym website with sign up flow</GalleryCaption>
                    </GalleryDiv>
                    <GalleryDiv>

                        <a href="http://bevnews.surge.sh/" target="_blank" rel="noreferrer">
                            <GalleryImg src={Bev} alt="Image of Bev News website" />
                        </a>
                        <GalleryCaption>Bev - Dashboard Api website with Firebase back end</GalleryCaption>
                    </GalleryDiv>
                </ProjectContainerBox>
            </CenterContentContainer>


        </Background>

    );
}

export default Projects;