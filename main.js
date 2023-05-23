const axios = require('axios')
require('dotenv').config()

const API_KEY = process.env.api 

async function getWeather(city) {
    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
        const response  = await axios.get(url)
        const weatherData = response.data
        const weatherDescription = weatherData.weather[0].description
        const temperature = weatherData.main.temp
        const humidity = weatherData.main.humidity

        console.log(`weather in ${city}: `)
        console.log(`description: ${weatherDescription}: `)
        console.log(`temperature: ${temperature}: C`)
        console.log(`humidity: ${humidity}%`)
    } catch (error) {
        console.error("error fetching weather data: ", error.message)
    }
}

const city = process.argv[2]

if (!city) {
    console.error('please provide a city name as an argument: ')
} else {
    getWeather(city)
}