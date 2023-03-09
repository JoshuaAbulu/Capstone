import kushina from '../img/Kushina.png'
import { Link } from 'react-router-dom';
import Specials from './Specials';
import BookingForm from './BookingForm';
import { useState, useReducer, useEffect } from 'react';

const Main = () => {

    // const [availableTimes, setAvailableTimes] = useState(['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'])

    const initializeTimes = () => {
        return ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

        useEffect(() => {
            fetch('"https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"')
            .then(res => {
                return res.json();
            })
            .then(data => {
                
            })
        })
      };

      const updateTimes = (date) => {
        
      };

    const timeReducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_TIMES':
            return state;
            default:
            return state;
        }
    }

    const [availableTimes, dispatch] = useReducer(timeReducer, initializeTimes)


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

            <BookingForm 
            availableTimes = {availableTimes}
            dispatch = {dispatch}
            />
        </main>
     );
}
 
export default Main;