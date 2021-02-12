
import { StyledNav, StyledUL, NavbarLink} from './StyledElements'



function Navbar() {
    return (
        <StyledNav>
            <h1>VH</h1>
            <StyledUL>
                <li>
                    <NavbarLink to="/">About</NavbarLink>
                </li>
                <li>
                    <NavbarLink to="/projects">Projects</NavbarLink>
                </li>
                <li>
                    <NavbarLink to="/contact">Contact</NavbarLink>
                </li>
            </StyledUL>
        </StyledNav>
    );
}

export default Navbar;