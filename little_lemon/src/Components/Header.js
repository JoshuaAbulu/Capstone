import whale from '../img/whale.jpg'
import Nav from './Nav';
const Header = () => {
    return ( 
        <header >
            <div className="container">
            <img src={whale} alt="Whale" width='150' height='30'/>
            <Nav />
            </div>
        </header>
     );
}
 
export default Header;