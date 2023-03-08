import { Routes, Route, Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <>
        <nav>
            <ul>
                <li> <Link to='/' className="navi">Home</Link> </li>
                <li> <Link to='/about' className="navi">About</Link> </li>
                <li> <Link to='/menu' className="navi">Menu</Link> </li>
                <li> <Link to='/reservations' className="navi">Reservations</Link> </li>
                <li> <Link to='/order' className="navi">Order Online</Link> </li>
                <li> <Link to='/login' className="navi">Login</Link> </li>
            </ul>
        </nav>
        </>
     );
}
 
export default Nav;