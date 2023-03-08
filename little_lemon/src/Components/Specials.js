import { Link } from "react-router-dom";

const Specials = () => {
    return ( 
        <section className="specials">
            <div className="container">
            <div className="spegr">
            <h1 className="tile">This Week's Specials</h1>
            <button className="gen-but" id="onmenbut"> <Link to='/menu' className="navi2">Online Menu</Link> </button>
            </div>
            </div>
        </section>
     );
}
 
export default Specials;