import {API} from "./http/api";
import {DefaultHeaders} from "../constants/Constants";
import qs from "qs";


export async function getAllPayloads(driver_id, vehicleTypeId, weight) {
    return API.get(`/api/transport/GetAllPayloadsWithFilter2/${vehicleTypeId}/${weight}/${driver_id}`, {
        headers: DefaultHeaders
    });
}

export async function reserveCargoApi(driverId ,payloadId , isReserved , lat , lng) {
    const qs = require('qs');

    const data = {
        'DriverId': driverId,
        'PayloadId': payloadId,
        'Reserve': isReserved,
        'Latitude': lat,
        'Longitude': lng,
    }

    return API.post(
        `/api/transport/ReservePayload`,
        qs.stringify(data)
    )
}
export async function deliverCargoApi(driverId ,cargoId) {

    return API.get(
        `api/transport/DeliveryToDestinationByDriver/${cargoId}/${driverId}`,
        {
            headers: DefaultHeaders
        });
}

export async function getDriverCargoHistory(driver_id) {
    return API.get(`/api/transport/GetPaylaodsOfDriverios/${driver_id}`, {
        headers: DefaultHeaders
    });
}




// async function logoutApi() {
//     const token = localStorage.getItem('tb-token');
//     return API.post(`/user/logout`, null,
//         {
//             headers: {
//                 'Authorization': token,
//                 'x-api-key': 'test'
//             }
//         });
// }



