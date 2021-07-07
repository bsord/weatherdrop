

// Define Api key
let apiKey;
if(process.env.OPEN_WEATHER_API_KEY !== undefined || process.env.OPEN_WEATHER_API_KEY !== "undefined"){
  apiKey = process.env.OPEN_WEATHER_API_KEY;
}else{
  throw new Error("OpenWeather API Key not found!");
}

export default function handler(req, res) {
  
  // Get Lat,Lon and define api URL with vars
  let { lat, long } = req.query
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;

  // Get forecast
  return fetch(apiUrl)
    .then(response => response.json())
    .then(forecast => {
      // Make sure forecast data is usable and respond to api request.
      if('cod' in forecast && forecast.cod == '200'){
        res.status(200).json({
          city: forecast.name,
          city_id: forecast.id,
          temp_actual: forecast.main.temp,
          temp_feels: forecast.main.feels_like,
          temp_low: forecast.main.temp_min,
          temp_high: forecast.main.temp_max,
          weather_status: forecast.weather[0].main,
          weather_status_desc: forecast.weather[0].description,
          weather_status_id: forecast.weather[0].id,
        })
      } else { 
        throw new Error()
      }
    });
}
