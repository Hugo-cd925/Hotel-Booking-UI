import axios from "axios";
import Constants from "../../utility/Constants";

/**
 * @name GetReservations
 * @description Http Call to GET all Reservations
 * @param {*} setReservation 
 * @param {*} setApiError 
 */
export async function GetReservations(setReservation, setApiError) {
    await axios.get(Constants.BASE_URL_API + Constants.RESERVATIONS)
        .then((response) => {
            setReservation(response.data);
        })
        .catch(() => {
            setApiError(true);
        })
};

/**
 * @name GetReservationByID
 * @description Http Call to GET Reservation given ID
 * @param {} id 
 * @param {*} setReservation 
 * @param {*} setApiError 
 */

export async function GetReservationByID(id, setReservation, setApiError) {
    await axios.get(`${Constants.BASE_URL_API} + ${Constants.RESERVATIONS}+ '/' + ${id}`)
        .then((response) => {
            setReservation(response.data);
        })
        .catch(() => {
            setApiError(true);
        })
};


/**
 * @name DeleteReservationByID
 * @description Deletes Reservation from given ID
 * @param {*} id 
 */
export async function DeleteReservationByID(id){
    await axios.delete(`${Constants.BASE_URL_API} + ${Constants.RESERVATIONS}+ '/' + ${id}`)
    .then(()=>{
        alert('Deleted');
        //Toast would appear instead
    })
};

/**
 * @name PostReservation
 * @description Http POST reservation object 
 * @param {*} Reservation 
 * @param {*} setReservation 
 * @param {*} setApiError 
 */
export async function PostReservation(Reservation, setReservation, setApiError) {
    await axios.post(Constants.BASE_URL_API + Constants.RESERVATIONS,
        Reservation)
        .then((response) => {
            setReservation(response.data);
        })
        .catch(() => {
            setApiError(true);
        })
};

/**
 * @name UpdateRoomStatus
 * @description Changes is clean to either true or false
 * @param {*} roomStatus 
 * @param {*} id 
 * @param {*} setApiError 
 */
export async function UpdateRoomStatus(roomStatus, id, setApiError){
    await axios.patch(`${Constants.BASE_URL_API} + ${Constants.RESERVATIONS}+ '/' + ${id}`,
    roomStatus)
    .catch(() => {
        setApiError(true);
    })
};
//DECIDE ON PATCH OR PUT