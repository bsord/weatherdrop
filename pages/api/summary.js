//
// API Docs: https://openweathermap.org/current
//
let apiKey;
if(process.env.OPEN_WEATHER_API_KEY){
  apiKey = process.env.OPEN_WEATHER_API_KEY;
}else{
  throw new Error("OpenWeather API Key not found!");
}

export default function handler(req, res) {
  let { lat, long } = req.query
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
  return fetch(apiUrl)
    .then(response => response.json())
    .then(forecast => {
      if('cod' in forecast && forecast.cod == '200'){
        res.status(200).json({
          city: forecast.name,
          city_id: forecast.id,
          temp_actual: forecast.main.temp.toFixed(1),
          temp_feels: forecast.main.feels_like.toFixed(1),
          temp_low: forecast.main.temp_min.toFixed(1),
          temp_high: forecast.main.temp_max.toFixed(1),
          weather_status: forecast.weather[0].main,
          weather_status_desc: forecast.weather[0].description,
          weather_status_id: forecast.weather[0].id,
        })
      } else { throw new Error("Failed to get OpenWeather data") }
    });
}
