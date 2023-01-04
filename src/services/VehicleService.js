import {API} from "./http/api";
import {DefaultHeaders} from "../constants/Constants";


export async function getVehicleSubtypes(vehicle_id) {
    return API.get(`/api/transport/GetAllVehivleSubTypes/${vehicle_id}/`, {
        headers: DefaultHeaders
    });
}
