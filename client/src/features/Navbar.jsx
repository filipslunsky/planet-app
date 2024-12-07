import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import hamburgerIcon from '../assets/img/icon-hamburger.svg';
import './navbar.css';

const Navbar = () => {
    const [isMobileOn, setIsMobileOn] = useState(false);

    const toggleIsMobileOn = () => {
        setIsMobileOn(!isMobileOn);
    };

    return (
        <>
            <div className="navbarMainContainer">
                <Logo />
                <div className="navbarItemContainer">
                    <img className="hamburgerIcon" onClick={toggleIsMobileOn} src={hamburgerIcon} alt="hamburger icon" />
                    <Link className="navItem" to='/mercury'>MERCURY</Link>
                    <Link className="navItem" to='/venus'>VENUS</Link>
                    <Link className="navItem" to='/earth'>EARTH</Link>
                    <Link className="navItem" to='/mars'>MARS</Link>
                    <Link className="navItem" to='/jupiter'>JUPITER</Link>
                    <Link className="navItem" to='/saturn'>SATURN</Link>
                    <Link className="navItem" to='/Uranus'>URANUS</Link>
                    <Link className="navItem" to='/neptune'>NEPTUNE</Link>
                </div>
            </div>
        </>
    );
}
 
export default Navbar;