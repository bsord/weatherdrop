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
    const response = await fetch(apiUrl);
    const forecast = await response.json();
    return forecast;
  }
  
  fetchForecastJSON().then(forecast => {
    res.status(200).json(forecast)
  });
}
