import restaurant from '../img/restaurant.jpg'

const About = () => {
    return ( 
        <div className="about" id='about'>
            <div className='container'>
                <div className="about2">
                    <div className="about-text">
            <h1 className='tile5'>Little Lemon</h1>
            <h2 className='tile4'>Chicago</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro numquam pariatur, officia aliquam veritatis minima laboriosam ratione maiores sapiente eligendi illum doloribus, atque, odio et doloremque explicabo quam! Possimus excepturi id architecto voluptates natus aperiam culpa recusandae accusamus sit expedita!</p>
                    </div> 
                    <div className="about-img-div">
            <img src={restaurant} alt="Restaurant" className='about-img'/>
            </div>
            </div>
            </div>
        </div>
     );
}
 
export default About;