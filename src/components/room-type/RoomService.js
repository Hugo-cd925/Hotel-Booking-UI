import axios from "axios";
import Constants from "../../utility/Constants";

/**
 * @name GetRooms
 * @Description Makes Get Http call to retreive all reservations 
 * @param {*} setRooms 
 * @param {*} setApiError 
 */
export async function GetRooms(setRooms, setApiError){
    await axios.get(Constants.BASE_URL_API + Constants.ROOMTYPES)
    .then((response) => {
        setRooms(response.data);
    })
    .catch(() => {
        setApiError(true);
    })
};

/**
 * @name GetRoomByID
 * @Description Makes Get Http call to retreive reservation with given ID
 * @param {*} id 
 * @param {*} setRooms 
 * @param {*} setApiError 
 */
export async function GetRoomByID(id, setRooms, setApiError) {
    await axios.get(`${Constants.BASE_URL_API} + ${Constants.ROOMTYPES}+ '/' + ${id}`)
        .then((response) => {
            setRooms(response.data);
        })
        .catch(() => {
            setApiError(true);
        })
};

/**
 * @name DeleteRoomByID
 * @description Delete Http Call to remove reservation with given ID
 * @param {} id 
 */
export async function DeleteRoomByID(id){
    await axios.delete(`${Constants.BASE_URL_API} + ${Constants.ROOMTYPES}+ '/' + ${id}`)
    .then(()=>{
        alert('Deleted');
        //Toast would appear instead
    })
};

/**
 * @name PostRoom
 * @Description Http Call to Post room object
 * @param {*} RoomType 
 * @param {*} setRoomType 
 * @param {*} setApiError 
 */
export async function PostRoom(RoomType, setRoomType, setApiError) {
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

