export default function handler(req: any, res: any) {
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
  
  fetchForecastJSON().then(forecast => {
    res.status(200).json({
      city: forecast.name,
      temp_actual: forecast.main.temp,
      temp_feels: forecast.main.feels_like,
      weather_status: forecast.weather[0].main,
      weather_desc: forecast.weather[0].description,
      typescript: "sucks"
    })
  });
}
