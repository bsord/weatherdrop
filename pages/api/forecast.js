

export default function handler(req, res) {
  let apiKey;
  if(process.env.OPEN_WEATHER_API_KEY !== undefined || process.env.OPEN_WEATHER_API_KEY !== "undefined"){
    apiKey = process.env.OPEN_WEATHER_API_KEY;
  }else{
    throw new Error("OpenWeather API Key not found!");
  }
  let { lat, long } = req.query
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;

  async function fetchForecastJSON() {
    try {
      const response = await fetch(apiUrl);
      const forecast = await response.json();
      return forecast;
    } catch(err) {
      console.log(err)
      res.status(500).json({
        message: "There was a problem fetching weather data"
      })

    }
  }

  fetchForecastJSON().then(forecast => {
    if('cod' in forecast && forecast.cod == '200'){
      res.status(200).json({
        city: forecast.name,
        city_id: forecast.id,
        temp_actual: forecast.main.temp,
        temp_feels: forecast.main.feels_like,
        temp_min: forecast.main.temp_min,
        temp_max: forecast.main.temp_max,
        weather_status: forecast.weather[0].main,
        weather_status_desc: forecast.weather[0].description,
        weather_status_id: forecast.weather[0].id,
      })
    } else { throw new Error() }
  }).catch(err => {
    console.log(err)
    res.status(500).json({
      message: "There was a problem parsing weather data"
    })
  });
}
