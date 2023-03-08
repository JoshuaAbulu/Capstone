import kushina from '../img/Kushina.png'
import { Link } from 'react-router-dom';
import Specials from './Specials';

const Main = () => {
    return ( 
        <main>
            <section className="title-page">
            <div className="container">
                <div className="article1">
            <article>
                <h1 className='tile1'>LITTLE LEMON</h1>
                <h3 className='tile2'>Chicago</h3>
                <p className='tile3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid mollitia maxime quod aut inventore? Ipsam dolorum minima beatae. Est laboriosam cumque deserunt officia, possimus beatae sint neque sed non maiores assumenda ducimus perspiciatis cupiditate, eaque iste optio nisi aliquid libero enim id. Debitis beatae fugiat labore quod! Omnis, quo illum.</p>
                <button className='gen-but'><Link to='table-reserve' className='navi2'>Reserve a Table</Link></button>
            </article>
                <img src={kushina} alt="main-pic" height='400' width='400' />
            </div>
            </div>
            </section>

            <section className="special">
            <Specials />
            </section>
        </main>
     );
}
 
export default Main;