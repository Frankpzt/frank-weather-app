import axios from "axios";

const baseURL = "http://api.weatherapi.com/v1"
const timeout = "2000"
const instance = axios.create({
        baseURL,
        timeout,
        headers: {
            "content-type": "application/json",
            'Accept': "*",
            key: "9cad4f8b2e014737a2152710213012"
        }
    })
export default instance