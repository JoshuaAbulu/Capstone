import { Link } from "react-router-dom";
import bruchetta from '../img/bruchetta.jpg'
import greeksalad from '../img/greek_salad.jpg'
import lemon from '../img/lemon dessert.jpg'

const Specials = () => {
    return ( 
        <section className="specials">
            <div className="container">
                <div className="spegr">
            <h1 className="tile">This Week's Specials</h1>
            <button className="gen-but" id="onmenbut"> <Link to='/menu' className="navi2">Online Menu</Link> </button>
                </div>
            <section className="special-dishes">
                <div className="dish">
                    <img src={bruchetta} alt="Bruchetta" className="special-img" />
                    <h2>Bruchetta</h2>
                    <h3>$16.99</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequuntur aspernatur ducimus eligendi. Porro, fugit!</p>
                    <button className="special-btn"><Link to='/order' className='navi2'> Order </Link></button>
                </div>
                <div className="dish">
                    <img src={greeksalad} alt="Greek salad" className="special-img"/>
                    <h2>Greek Salad</h2>
                    <h3>$12.99</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequuntur aspernatur ducimus eligendi. Porro, fugit!</p>
                    <button className="special-btn"><Link to='/order' className='navi2'> Order </Link></button>
                </div>
                <div className="dish">
                    <img src={lemon} alt="Lemon Dessert" className="special-img"/>
                    <h2>Lemmon Dessert</h2>
                    <h3>$15.99</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequuntur aspernatur ducimus eligendi. Porro, fugit!</p>
                    <button className="special-btn"><Link to='/order' className='navi2'> Order </Link></button>
                </div>
            </section>
            </div>
        </section>
     );
}
 
export default Specials;