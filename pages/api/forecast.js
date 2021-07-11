//
// API Docs: https://openweathermap.org/api/one-call-api
//
let apiKey;
if(process.env.OPEN_WEATHER_API_KEY){
  apiKey = process.env.OPEN_WEATHER_API_KEY;
}else{
  throw new Error("OpenWeather API Key not found!");
}

export default function handler(req, res) {
  let { lat, long } = req.query
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;
  return fetch(apiUrl)
    .then(response => response.json())
    .then(forecast => {
      if('lat' in forecast){
        res.status(200).json(forecast)
      } else { throw new Error("Failed to get OpenWeather data") }
    });
}
