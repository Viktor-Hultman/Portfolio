import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledNav = styled.nav`
width: 70%;
border-bottom: 2px solid #B06500;
`

export const StyledUL = styled.ul`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: flex-end;
align-items: center;
list-style: none;
height: 50px;
width: 100%;


@media (max-width: 305px) {
    height: 60px;
}
`;

export const BlueLink = styled(Link)`
font-size: 20px;
color: #B06500;
text-decoration: none;
padding-right: 20px;

&:hover {
    color: #bababa;
}

@media (max-width: 170px) {
    padding-right: 10px;
}
`

function Navbar() {
    return (
        <StyledNav>
            <StyledUL>
                <li>
                    <BlueLink to="/">Home</BlueLink>
                </li>
                <li>
                    <BlueLink to="/about">About</BlueLink>
                </li>
                <li>
                    <BlueLink to="/projects">Projects</BlueLink>
                </li>
                <li>
                    <BlueLink to="/contact">Contact</BlueLink>
                </li>
            </StyledUL>
        </StyledNav>
    );
}

export default Navbar;