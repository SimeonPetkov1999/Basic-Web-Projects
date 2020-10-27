const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res)
{
    res.sendFile(__dirname + "/signup.html")
});

app.post("/", function (req, res)
{
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    var data = 
    {
        members: 
        [
            {
                email_address:email,
                status: "subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    var jsonData = JSON.stringify(data);
    const url = "https://us2.api.mailchimp.com/3.0/lists/460dd67f61"
    const options =
    {
        method:"POST",
        auth:"Simeon:eca7b2b6924b7f81911c22afd87a5e5f-us2"
    }

    const request = https.request(url, options, function(response)
    {
        response.on("data", function(response)
        {
            console.log(JSON.parse(response));
        })
    })

    request.write(jsonData);
    request.end();




});

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, function ()
{
    console.log("server running on port 3000");
})

//eca7b2b6924b7f81911c22afd87a5e5f-us2

//460dd67f61