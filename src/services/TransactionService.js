import {API} from "./http/api";
import {DefaultHeaders} from "../constants/Constants";
import qs from "qs";


export async function getTransactionHistory(driver_id, fromDate, toDate) {
    return API.get(`/api/transport/GetAllTransaction/${driver_id}/${fromDate}/${toDate}/`, {
        headers: DefaultHeaders
    });
}

export async function requestWithdrawApi(DriverId, Amount) {
    const qs = require('qs')
    const data = {
        DriverId: DriverId,
        Amount: Amount
    }
    return API.post(`api/transport/WithDrawAccount`, qs.stringify(data));
}


