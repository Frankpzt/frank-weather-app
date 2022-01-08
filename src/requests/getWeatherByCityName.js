import request from "../services/wheatherInstance"

const getWeatherByCityName = async (cityName) => {
    const response = await request.get(`http://api.weatherapi.com/v1/current.json?q=${cityName}`)
    return response.data

}

export default getWeatherByCityName