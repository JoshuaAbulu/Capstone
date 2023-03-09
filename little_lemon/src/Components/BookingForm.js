import React, { useState } from "react";
import Main from "./Main";


const BookingForm = (props) => {

// const [availableTimes, setAvailableTimes] = useState(['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'])


const [date, setDate] = useState('')

const [time, setTime] = useState('')

const [guests, setGuests] = useState('')

const [occasion, setOccasion] = useState('')

const handleClick = (e) => {
    e.preventDefault();
    clearForm()
}

const clearForm = () => {
    setDate('')
    setTime('')
    setGuests('')
    setOccasion('')
}

const validForm = () => {
    return(
    date &&
    guests
    )
}

    return ( 
        <div>
            <form className="tablefor" onSubmit={handleClick}>
                <div className="tableform">
   <label htmlFor="res-date">Choose date</label>
   <input type="date" id="res-date" className="inputtableform" value={date} onChange={(e) => {setDate(e.target.value)}}/>
   <label htmlFor="res-time">Choose time</label>
   <select id="res-time " value={time} onChange={(e) => {setTime(e.target.value)}}>
    {props.availableTimes.map((times) => (
        <option key={times} value={times}>{times}</option>
    ))}
      {/* <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option> */}
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input type="number"  min="1" max="10" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}}/>
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value)}}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   </div>
   <input type="submit" value="Make Your reservation" className="btn" disabled = {!validForm()}/>
   
</form>
        </div>
     );
}
 
export default BookingForm;