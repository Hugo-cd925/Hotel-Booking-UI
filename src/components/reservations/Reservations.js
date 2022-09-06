import React, { useEffect, useState } from 'react'
import { GetReservations } from './ReservationService';
import Constants from '../../utility/Constants';
const Reservations = () => {

 const [reservations, setReservations] = useState({});
 const [apiError, setApiError] = useState(false);

 //sends Http Get call to Set Reservations. 
  useEffect(() => {
    GetReservations(setReservations, setApiError);
  },[]);

 if(apiError){
  return (
    <h1>Connection Error. Contact IT Admin.</h1>
  )
 }
  return (
    <div>Reservations</div>
  )
 
}

export default Reservations;