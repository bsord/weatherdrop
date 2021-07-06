import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  city: string,
  temp_actual: number,
  temp_feels: number,
  temp_min: number,
  temp_max: number,
  weather_status: string,
  weather_desc: string,
  typescript: string
}

type Error = {
  message: string
}


export default function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  let apiKey;
  if(process.env.OPEN_WEATHER_API_KEY !== undefined || process.env.OPEN_WEATHER_API_KEY !== "undefined"){
    apiKey = process.env.OPEN_WEATHER_API_KEY;
  }else{
    new Error("OpenWeather API Key not found!");
  }
  let { lat, long } = req.query
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;

  async function fetchForecastJSON() {
    const response = await fetch(apiUrl);
    const forecast = await response.json();
    return forecast;
  }

  try {
    fetchForecastJSON().then(forecast => {
      res.status(200).json({
        city: forecast.name,
        temp_actual: forecast.main.temp,
        temp_feels: forecast.main.feels_like,
        temp_min: forecast.main.temp_min,
        temp_max: forecast.main.temp_max,
        weather_status: forecast.weather[0].main,
        weather_desc: forecast.weather[0].description,
        typescript: "sucks"
      })
    });
  } catch(err) {
    res.status(500).json({
      message: "There was an error with the request"
      //be careful about exposing backend errors
    })
    console.log(err)
  }
}
