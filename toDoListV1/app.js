const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname+"/date.js");

var items = ["Code"];
let workItewms = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res)
{
    let day = date.getDate();
    res.render("list", { listTitle: day, newListItems: items});
})

app.post("/", function(req,res)
{
    var item = req.body.newItem;
    if (req.body.list==="Work") 
    {
        workItewms.push(item);
        res.redirect("/work")
    }
    else
    {
        items.push(item);
        res.redirect("/")
    }
});

app.get("/work", function(req,res)
{
    res.render("list", {listTitle: "Work List", newListItems: workItewms})
})

app.post("/work", function(req,res)
{
    let item = req.body.newItem;
    workItewms.push(item);
    res.redirect("/work")
})

app.listen(3000, function ()
{
    console.log("server started!");
});