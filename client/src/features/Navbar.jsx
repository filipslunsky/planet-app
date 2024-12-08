import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import hamburgerIcon from '../assets/img/icon-hamburger.svg';
import './navbar.css';

const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleIsMobileOpen = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    const setIsMobileClosed = () => {
        setIsMobileOpen(false);
    };

    return (
        <>
            <div className="navbarMainContainer">
                <Logo />
                <img className="hamburgerIcon" onClick={toggleIsMobileOpen} src={hamburgerIcon} alt="hamburger icon" />
                <div className={`navbarItemContainer ${isMobileOpen ? 'mobileNavbarItemContainer' : ''}`}>
                    <Link onClick={setIsMobileClosed} className="navItem" to='/mercury'>MERCURY</Link>
                    <Link onClick={setIsMobileClosed} className="navItem" to='/venus'>VENUS</Link>
                    <Link onClick={setIsMobileClosed} className="navItem" to='/earth'>EARTH</Link>
                    <Link onClick={setIsMobileClosed} className="navItem" to='/mars'>MARS</Link>
                    <Link onClick={setIsMobileClosed} className="navItem" to='/jupiter'>JUPITER</Link>
                    <Link onClick={setIsMobileClosed} className="navItem" to='/saturn'>SATURN</Link>
                    <Link onClick={setIsMobileClosed} className="navItem" to='/uranus'>URANUS</Link>
                    <Link onClick={setIsMobileClosed} className="navItem" to='/neptune'>NEPTUNE</Link>
                </div>
            </div>
        </>
    );
}
 
export default Navbar;