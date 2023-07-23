import "./Navbar.css"
import logo from "../images/bingeflix-logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar-div"> 
            <Link to={"/"} className="logo-div">
                <img className="logo" alt="Binge Flix Logo" src={logo} />
            </Link>
            <ul className="navbar-ops"> 
                <li><Link to={"/"} className="navbar-op">Home</Link></li>
                <li><Link to={"/random"} className="navbar-op">Random</Link></li>
                <li><Link to={"/top250"} className="navbar-op">Top 250</Link></li>
                <li><Link to={"/mylist"} className="navbar-op">My List</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;