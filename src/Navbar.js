import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const StyledNav = styled.nav`
width: 70%;
border-bottom: 2px solid #B06500;
display: flex;
align-items: center;
justify-content: space-between;

& h1 {
    font-family: 'Merienda', cursive;
}
`

export const StyledUL = styled.ul`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: flex-end;
align-items: center;
list-style: none;
height: 50px;


@media (max-width: 305px) {
    height: 60px;
}
`;

export const BlueLink = styled(Link)`
font-family: 'Nunito', sans-serif;
font-size: 20px;
color: #B06500;
text-decoration: none;
padding-right: 20px;
transition: color 0.4s;

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
            <h1>VH</h1>
            <StyledUL>
                <li>
                    <BlueLink to="/">About</BlueLink>
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