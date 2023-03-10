import BookingForm from "./BookingForm";
import { useRef, useState } from "react";

const BookingPage = () => {

    const [availableTimes, setAvailableTimes] = useState(['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'])

    const bookingFormRef = useRef(null);

    const scrollToBookingForm = () => {
      bookingFormRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return ( 
      <div>
        <div className="container">
             <div ref={bookingFormRef}>
            <BookingForm 
            availableTimes = {availableTimes}
            // dispatch = {dispatch}
            />
            </div>
        </div>
        </div>
     );
}
 
export default BookingPage;