import axios from 'axios';
const api_key = '381b8e266352da1e9fcf3d293c629a93'
const url = 'http://api.openweathermap.org/data/2.5/weather?'

export const fetchTemperature = async (city) =>{
    try {
        const newUrl = `${url}q=${city}&appid=${api_key}`
        console.log(newUrl)
        const { data } = await axios.get(newUrl)
        return data
    } catch (error) {
        console.log(error)
    }
    
}

// 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=381b8e266352da1e9fcf3d293c629a93'