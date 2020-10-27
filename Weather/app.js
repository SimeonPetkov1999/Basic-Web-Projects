const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res)
{
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res)
{
    
    const query = req.body.cityName;;
    const apiKey = "c9e88dea890a58b066c91224fd19a08d";
    const unit = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, function (response)
    {
        console.log(response.statusCode);

        response.on("data", function (data)
        {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDes = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.write("<p>The weather is currently " + weatherDes + "<p>");
            res.write("<h1>Temp in "+query+" is " + temp + " degrees. </h1>");
            res.write("<img src=" + imageUrl + ">");
            res.send();
        })
    });
})

app.listen(3000, function ()
{
    console.log("server running on port 3000");
})