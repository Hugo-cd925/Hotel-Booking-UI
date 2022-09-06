import React, { useEffect, useState } from 'react'
import { GetReservations } from './ReservationService';
import Constants from '../../utility/Constants';
const Reservations = () => {

  const [reservations, setReservations] = useState([]);
  const [apiError, setApiError] = useState(false);

  //sends Http Get call to Set Reservations. 
  useEffect(() => {
    GetReservations(setReservations, setApiError);
  }, []);

  if (apiError) {
    return (
      <h1>{Constants.API_ERROR}</h1>
    )
  };
  return (
    <div>
      {reservations && reservations.map(res => {
        return <h1 key={res.id} >{res.guestEmail}</h1>
      })}
    </div>
  )
};

export default Reservations;