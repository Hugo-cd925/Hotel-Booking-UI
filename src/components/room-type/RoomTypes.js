import React, { useEffect, useState } from 'react'
import { GetRooms } from './RoomService';
import Constants from '../../utility/Constants';
const RoomType = () => {

  const [rooms, setRooms] = useState([]);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    GetRooms(setRooms, setApiError);
  }, []);

  if (apiError) {
    return (
      <h1>{Constants.API_ERROR}</h1>
    )
  };

  return (
    <div>
      {rooms.map(room => {
        return <h1 key={room.id}>{room.name}</h1>
      })}
    </div>
  )
};

export default RoomType;