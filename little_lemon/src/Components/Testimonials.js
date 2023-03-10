import star from '../img/5-stars.png'

const Testimonials = () => {
    return ( 
        <div className="reviews">
        <div className="container">
            <h1 className='tile'>REVIEWS</h1>
        <div className="testimonials">
            <div className="testimonial">
                <img src={star} alt="star" className='star'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem aliquid accusantium ut ipsa ullam voluptatum?</p>
            </div>
            <div className="testimonial">
            <img src={star} alt="star" className='star'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem aliquid accusantium ut ipsa ullam voluptatum?</p>
            </div>
            <div className="testimonial">
            <img src={star} alt="star" className='star'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem aliquid accusantium ut ipsa ullam voluptatum?</p>
            </div>
            <div className="testimonial">
            <img src={star} alt="star" className='star'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem aliquid accusantium ut ipsa ullam voluptatum?</p>
            </div>
        </div>
        </div>
        </div>
     );
}
 
export default Testimonials;