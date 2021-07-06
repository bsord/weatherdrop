

export default function handler(req, res) {
  let apiKey;
  if(process.env.OPEN_WEATHER_API_KEY !== undefined || process.env.OPEN_WEATHER_API_KEY !== "undefined"){
    apiKey = process.env.OPEN_WEATHER_API_KEY;
  }else{
    new Error("OpenWeather API Key not found!");
  }
  let { lat, long } = req.query
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;

  async function fetchForecastJSON() {
    try {
      const response = await fetch(apiUrl);
      const forecast = await response.json();
      console.log(forecast)
      return forecast;
    } catch(err) {
      res.status(500).json({
        message: "There was a problem fetching weather data"
      })
      console.log(err)
    }
  }

  try {
    fetchForecastJSON().then(forecast => {
      if('cod' in forecast && forecast.cod == '200'){
        res.status(200).json({
          city: forecast.name,
          temp_actual: forecast.main.temp,
          temp_feels: forecast.main.feels_like,
          temp_min: forecast.main.temp_min,
          temp_max: forecast.main.temp_max,
          weather_status: forecast.weather[0].main,
          weather_desc: forecast.weather[0].description
        })
      } else {
        res.status(500).json({
          message: "There was a problem with the weather data"
        })
      }
    });
  } catch(err) {
    res.status(500).json({
      message: "There was a problem parsing weather data"
    })
    console.log(err)
  }
}
