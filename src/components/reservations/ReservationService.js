import axios from "axios";
import Constants from "../../utility/Constants";

export async function GetReservations(setReservation, setApiError) {
    await axios.get(Constants.BASE_URL_API + Constants.RESERVATIONS)
        .then((response) => {
            setReservation(response.data);
        })
        .catch(() => {
            setApiError(true);
        })
};

export async function GetReservationByID(id, setReservation, setApiError) {
    await axios.get(`${Constants.BASE_URL_API} + ${Constants.RESERVATIONS}+ '/' + ${id}`)
        .then((response) => {
            setReservation(response.data);
        })
        .catch(() => {
            setApiError(true);
        })
};

export async function DeleteReservationByID(id){
    await axios.delete(`${Constants.BASE_URL_API} + ${Constants.RESERVATIONS}+ '/' + ${id}`)
    .then(()=>{
        alert('Deleted');
        //Toast would appear instead
    })
};


export async function PostReservations(Reservation, setReservation, setApiError) {
    await axios.post(Constants.BASE_URL_API + Constants.RESERVATIONS,
        Reservation)
        .then((response) => {
            setReservation(response.data);
        })
        .catch(() => {
            setApiError(true);
        })
};

export async function updateRoomStatus(roomStatus, id, setApiError){
    await axios.patch(`${Constants.BASE_URL_API} + ${Constants.RESERVATIONS}+ '/' + ${id}`,
    roomStatus)
    .catch(() => {
        setApiError(true);
    })
};
//DECIDE ON PATCH OR PUT