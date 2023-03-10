import { Routes, Route, Link } from "react-router-dom";
import Main from "./Main";

const Nav = () => {

    const scrollToAbout = (about) => {
        const id = about
        const element = document.getElementById(about)
        if (element) {
        about.scrollIntoView({behavior: 'smooth'})
    }}
    return ( 
        <>
        <nav>
            <ul>
                <li> <Link to='/' className="navi">Home</Link> </li>
                {/* <li> <Link onClick={scrollToAbout('about')} to='/about' className="navi">About</Link> </li> */}
               <li> <a href="#about" onClick={scrollToAbout('about')} className='navi3'> About </a> </li>
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