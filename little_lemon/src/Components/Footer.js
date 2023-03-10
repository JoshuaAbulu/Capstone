import logo from '../img/Logo.jpg'

const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className="container">
                <div className="footer1">
                    <div className="footer-img-div">
            <img src={logo} alt="logo" className='footer-img'/>
            </div>
            <div className="footer-text">
            <p>&copy; Copyright 2023</p>
            </div>
            </div>
            </div>
        </footer>
     );
}
 
export default Footer;