import React, { useState } from "react";
import Main from "./Main";


const BookingForm = (props) => {

// const [availableTimes, setAvailableTimes] = useState(['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'])


const [fname, setFname] = useState('')

const [lname, setLname] = useState('')

const [date, setDate] = useState('')

const [time, setTime] = useState('')

const [guests, setGuests] = useState('')

const [occasion, setOccasion] = useState('')

const handleClick = (e) => {
    e.preventDefault();
    clearForm()
}

const clearForm = () => {
    setFname('')
    setLname('')
    setDate('')
    setTime('')
    setGuests('')
    setOccasion('')
}

const validForm = () => {
    return(
    fname &&
    lname &&
    date &&
    guests
    )
}

    return ( 
        <div className="form">
            <div className="test">
            <form className="tablefor" onSubmit={handleClick}>
            <h1 className="tile1" id="table">Reserve a Table</h1>
                <div className="tableform">
    <label htmlFor="res-fname">First Name</label>
   <input type="text" id="res-fname"  value={fname} onChange={(e) => {setFname(e.target.value)}}/>
   <label htmlFor="res-lname">Last Name</label>
   <input type="text" id="res-lname" value={lname} onChange={(e) => {setLname(e.target.value)}}/>

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
</div>
     );
}
 
export default BookingForm;