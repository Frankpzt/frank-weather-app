import request from "../services/wheatherInstance"

const searchCity = async (cityName) => {
    const response = await request.get(`http://api.weatherapi.com/v1/search.json?q=${cityName}`)
    return response.data

}

export default searchCity