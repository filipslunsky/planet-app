import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <>
            <div className="navbarMainContainer">
                <Logo />
                <div className="navbarPlanetContainer">
                    <Link to='/mercury'>Mercury</Link>
                    <Link to='/venus'>Venus</Link>
                    <Link to='/earth'>Earth</Link>
                    <Link to='/mars'>Mars</Link>
                    <Link to='/jupiter'>Jupiter</Link>
                    <Link to='/saturn'>Saturn</Link>
                    <Link to='/Uranus'>Uranus</Link>
                    <Link to='/neptune'>Neptune</Link>
                </div>
            </div>
        </>
    );
}
 
export default Navbar;