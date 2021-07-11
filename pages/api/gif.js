export default function handler(req, res) {
  let { weatherId, temp } = req.query
  let gifUrl = getRandomGif(weatherId, temp)
  return res.status(200).json({ gif: gifUrl })
}

function getRandomGif(weatherId, temp) {
  let gifUrl;
  if(temp <= 25){
      gifUrl = cold[Math.floor(Math.random() * cold.length)];
  }else if(temp >= 95){
    gifUrl = hot[Math.floor(Math.random() * hot.length)];
  }else {
    switch(true) {
      case weatherId >= 200 && weatherId <= 235:
        gifUrl = thunder[Math.floor(Math.random() * thunder.length)];
        break;
      case weatherId >= 300 && weatherId <= 325:
        gifUrl = drizzle[Math.floor(Math.random() * drizzle.length)];
        break;
      case weatherId >= 500 && weatherId <= 535:
        gifUrl = rain[Math.floor(Math.random() * rain.length)];
        break;
      case weatherId >= 600 && weatherId <= 625:
        gifUrl = snow[Math.floor(Math.random() * snow.length)];
        break;
      case weatherId >= 700 && weatherId <= 799:
        gifUrl = atmosphere[Math.floor(Math.random() * atmosphere.length)];
        break;
      case weatherId == 800:
        gifUrl = clear[Math.floor(Math.random() * clear.length)];
        break;
      case weatherId >= 801 && weatherId <= 804:
        gifUrl = clouds[Math.floor(Math.random() * clouds.length)];
        break;
      default:
        gifUrl = clear[Math.floor(Math.random() * clear.length)];
    }
  }
  return gifUrl;
}

let thunder = [
  "https://media.giphy.com/media/AFJAmPcCeH9RxiK9Y5/giphy.gif",
  "https://media.giphy.com/media/iLdNyukd3uxsk/giphy.gif",
  "https://media.giphy.com/media/3orif1fC5h9jcNX4go/giphy.gif",
  "https://media.giphy.com/media/l2Je1XYouqmuPhdi8/giphy.gif",
  "https://media.giphy.com/media/BgQDxZmWCEFiw/giphy.gif"
]

let drizzle = [
  "https://media.giphy.com/media/xT5LMAT8WK4InFirXG/giphy.gif",
  "https://media.giphy.com/media/za5xikuRr0OzK/giphy.gif",
  "https://media.giphy.com/media/xT9GEz2CeU9uaI2KZi/giphy.gif",
  "https://media.giphy.com/media/BgQDxZmWCEFiw/giphy.gif"
]

let rain = [
  "https://media.giphy.com/media/vSoXkKBccEQRq/giphy.gif",
  "https://media.giphy.com/media/l0HlPwMAzh13pcZ20/giphy.gif",
  "https://media.giphy.com/media/l2Je1XYouqmuPhdi8/giphy.gif",
  "https://media.giphy.com/media/BgQDxZmWCEFiw/giphy.gif",
  "https://media.giphy.com/media/l41m6dp4MjK9xTZ7y/giphy.gif",
  "https://media.giphy.com/media/xUNd9N08hpuyVHTUME/giphy.gif",
  "https://media.giphy.com/media/u0l83hl7HZYKBNeuGB/giphy.gif"
]

let snow = [
  "https://media.giphy.com/media/l2JIaYp6P3WT5Ybu0/giphy.gif",
  "https://media.giphy.com/media/SAC0wTRQYO2Y0/giphy.gif",
  "https://media.giphy.com/media/hkFgpYE8CRqog/giphy.gif",
  "https://media.giphy.com/media/5YDYrKUWKYeVW/giphy.gif",
  "https://media.giphy.com/media/10N782ExqDjCLK/giphy.gif",
  "https://media.giphy.com/media/JWegbsAWQS1YA/giphy.gif",
  "https://media.giphy.com/media/ugeAEY9a4dpYY/giphy.gif",
  "https://media.giphy.com/media/g2YvIlpgTMlck/giphy.gif",
  "https://media.giphy.com/media/Av0z9tdsBvFPLnnHz3/giphy.gif",
  "https://media.giphy.com/media/VRolEcq3Z4axa/giphy.gif",
  "https://media.giphy.com/media/10PrLKmZzVcK9a/giphy.gif",
  "https://media.giphy.com/media/EzhYp5ZQXomLm/giphy.gif"
]

let atmosphere = [
  "https://media.giphy.com/media/J9xKOmBdZlasbXzBjA/giphy.gif",
  "https://media.giphy.com/media/l0HlMURBbyUqF0XQI/giphy.gif"
]

let clear = [
  "https://media.giphy.com/media/Tj3gqingvdFZTokphI/giphy.gif",
  "https://media.giphy.com/media/xTEvYwzGarSU4J4FiM/giphy.gif",
  "https://media.giphy.com/media/LQthkp9wNfaMtmwG98/giphy.gif",
  "https://media.giphy.com/media/KA7zbi33B3a9i/giphy.gif",
  "https://media.giphy.com/media/JpGNLpC9jUdwxTrSEm/giphy.gif",
  "https://media.giphy.com/media/l08SqWKuJlyeLkYfLE/giphy.gif",
  "https://media.giphy.com/media/l08SqWKuJlyeLkYfLE/giphy.gif",
  "https://media.giphy.com/media/LnccQ4gwbYdd4O5PLR/giphy.gif",
  "https://media.giphy.com/media/5UqNjxKXGxDOhtR0hP/giphy.gif",
  "https://media.giphy.com/media/3orieMqnFY9nZjn9fy/giphy.gif",
  "https://media.giphy.com/media/g3WYJxZgCqLRu/giphy.gif",
  "https://media.giphy.com/media/xUPJUETissh9XI618s/giphy.gif",
  "https://media.giphy.com/media/mDSGaOdQxzdseSPdAi/giphy.gif",
  "https://media.giphy.com/media/JRgjhKV4UvgCpcue0q/giphy.gif",
  "https://media.giphy.com/media/lMDbNXxfQExri/giphy.gif"
]

let clouds = [
  "https://media.giphy.com/media/rrFcUcN3MFmta/giphy.gif",
  "https://media.giphy.com/media/26BGDQxDCZDFHW5Ne/giphy.gif",
  "https://media.giphy.com/media/HknSLLEbzZCoM/giphy.gif",
  "https://media.giphy.com/media/l0HlQdk8kI9KIOjBe/giphy.gif",
  "https://media.giphy.com/media/3orieMAp8v8mtnVvJm/giphy.gif",
  "https://media.giphy.com/media/McZdU5M5jpkmk/giphy.gif"
]

let cold = [
  "https://media.giphy.com/media/nVGyjauCDpAFq/giphy.gif",
  "https://media.giphy.com/media/KFUx0Rtz7p0HTzbJ7x/giphy.gif",
  "https://media.giphy.com/media/KaW6fNYZf6eSk/giphy.gif",
  "https://media.giphy.com/media/l0NwI6LbXx4sWQCmk/giphy.gif",
  "https://media.giphy.com/media/xUOwGoV4fmBd0fiyGI/giphy.gif",
  "https://media.giphy.com/media/l0NwtuI3FrBQ7xk4g/giphy.gif",
  "https://media.giphy.com/media/4L69OKSHdCx7a/giphy.gif",
  "https://media.giphy.com/media/3o6fDMaNGxz2rblFQs/giphy.gif",
  "https://media.giphy.com/media/xTeV7qibUsOYA3mmYw/giphy.gif",
  "https://media.giphy.com/media/3o7ZeCHGCq8vJgj4GY/giphy.gif",
  "https://media.giphy.com/media/3o7bugMEMJx8235gac/giphy.gif",
  "https://media.giphy.com/media/s4Bi420mMDRBK/giphy.gif",
  "https://media.giphy.com/media/l49FiEAsjmPdoYhVK/giphy.gif"
]

let hot = [
  "https://media.giphy.com/media/l2Je4PGbVcHDsQhnG/giphy.gif",
  "https://media.giphy.com/media/LjpIl7WfncQgw/giphy.gif",
  "https://media.giphy.com/media/LgULLE6V45LfG/giphy.gif",
  "https://media.giphy.com/media/xT5LMAUnrvWDGvwLQY/giphy.gif",
  "https://media.giphy.com/media/Y4h6SX80viZIKu76d2/giphy.gif",
  "https://media.giphy.com/media/nrXif9YExO9EI/giphy.gif",
  "https://media.giphy.com/media/hkik4ac9sSqaY/giphy.gif",
  "https://media.giphy.com/media/l2Je2UdtBFPSxxIIw/giphy.gif",
  "https://media.giphy.com/media/11oRLY4FRk2s36/giphy.gif",
  "https://media.giphy.com/media/l0HlMURBbyUqF0XQI/giphy.gif",
  "https://media.giphy.com/media/NTur7XlVDUdqM/giphy.gif"
]