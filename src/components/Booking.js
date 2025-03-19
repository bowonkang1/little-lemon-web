import React from "react";
import BookingForm from "./BookingForm";
import { useState } from "react";

//prop passing
const Booking = (props) => {

    return (

        <BookingForm availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        submitForm={props.submitForm}/>
    )
}

export default Booking;

//The BookingForm component will handle the UI for selecting available times and submitting a booking, but it needs data and functions passed from Booking. 
//This is why Booking acts as a bridge to pass down the availableTimes, dispatch, and submitForm props to the form component.