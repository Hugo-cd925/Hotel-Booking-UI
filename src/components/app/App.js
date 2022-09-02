// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from '../home/Home';
import Reservations from '../reservations/Reservations';
import CreateReservations from '../create-reservations/CreateReservations';
import EditReservations from '../edit-reservations/EditReservations';
import RoomType from '../room-type/RoomTypes';
import EditRoom from '../edit-roomtypes/EditRooms';
import CreateRoom from '../create-room/CreateRoom';
import NotFound from './NotFound';
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route exact path='Reservations' element={<Reservations />} />
      <Route path='Reservations/Create' element={<CreateReservations />} />
      <Route path='Reservations/Edit/:id' element={<EditReservations />} />
      <Route exact path='Roomtype' element={<RoomType />} />
      <Route path='RoomType/Create' element={<CreateRoom />} />
      <Route path='RoomType/Edit/:id' element={<EditRoom />} />
    </Routes>
  );
}

export default App;
