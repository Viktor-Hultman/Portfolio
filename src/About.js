import { Background, StyledImg, RowLong, GalleryCaption } from './Home';
import styled from 'styled-components';
import Navbar from './Navbar';

import ViktorPic from './Viktor-profil-bild.jpeg';

const RowAbout = styled(RowLong)`
display: flex;
flex-flow: row nowrap;
align-items: center;
justify-content: center;
text-align: center;
`

const PictureCaption = styled(GalleryCaption)`
position: absolute;
max-width: 150px;
padding: 7px;
margin-top: 15px;
word-break: break-word;
font-size: 20px;
background-color: rgba(0,0,0,.4);
color: #f2f2f2;
`


function About() {
    return (
        <Background>
            <Navbar />
            <RowAbout>

                <PictureCaption>Hey my name is Viktor!</PictureCaption>
                <StyledImg style={{width: "80%", height: "200px"}} src={ViktorPic} />

            </RowAbout>

        </Background>

    );
}

export default About;