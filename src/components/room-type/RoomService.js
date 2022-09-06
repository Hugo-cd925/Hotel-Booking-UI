import axios from "axios";
import Constants from "../../utility/Constants";

export async function GetRooms(setRooms, setApiError){
    await axios.get(Constants.BASE_URL_API + Constants.ROOMTYPES)
    .then((response) => {
        setRooms(response.data);
    })
    .catch(() => {
        setApiError(true);
    })
};

export async function GetRoomByID(id, setRooms, setApiError) {
    await axios.get(`${Constants.BASE_URL_API} + ${Constants.ROOMTYPES}+ '/' + ${id}`)
        .then((response) => {
            setRooms(response.data);
        })
        .catch(() => {
            setApiError(true);
        })
};

export async function DeleteReservationByID(id){
    await axios.delete(`${Constants.BASE_URL_API} + ${Constants.ROOMTYPES}+ '/' + ${id}`)
    .then(()=>{
        alert('Deleted');
        //Toast would appear instead
    })
};

export async function PostReservations(RoomType, setRoomType, setApiError) {
    await axios.post(Constants.BASE_URL_API + Constants.ROOMTYPES,
        RoomType)
        .then((response) => {
            setRoomType(response.data);
            //Navigate back to Dash 
        })
        .catch(() => {
            setApiError(true);
        })
};