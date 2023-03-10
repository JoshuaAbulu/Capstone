import './App.css';
import whale from './img/whale.jpg'
import { Routes, Route, Link } from "react-router-dom";
import Main from './Components/Main';
import About from './Components/About';
import Menu from './Components/Menu';
import Reservations from './Components/Reservations';
import Order from './Components/Order';
import Login from './Components/Login';
import Header from './Components/Header';
import BookingPage from './Components/BookingPage';
import BookingForm from './Components/BookingForm';


function App() {
  return (
    <>
      <Header />

        <Routes>
            <Route exact path="/" element={<Main />}/>
            {/* <Route path="/about" element={<About />}/> */}
            <Route path="/menu" element={<Menu />}/>
            <Route path="/reservations" element={<Reservations />}/>
            <Route path="/order" element={<Order />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/table-reserve" element={<BookingPage />}/>
        </Routes>
    </>
  );
}

export default App;
