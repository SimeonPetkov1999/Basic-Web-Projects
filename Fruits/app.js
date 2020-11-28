const mongoose = require("mongoose");
const { cwd } = require("process");

mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true},);

const fruitSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, "no name specified"]
    },
    rating: {
        type:Number,
        min:1,
        max:10
    },
    review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
    name: "apple",
    rating: 8,
    review: "Solid"
});
//fruit.save();

const personSchema = new mongoose.Schema({
    name: String,
    age:Number
});
const Person = mongoose.model("Person",personSchema);

// const person = new Person({
//     name: "John",
//     age: 30
// });
// //person.save();
// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "best"
// });
// const orange = new Fruit({
//     name: "orange",
//     rating: 2,
//     review: "bad"
// });

// Fruit.insertMany([kiwi,orange],function(err)
// {
//     if (err)
//     {
//         console.log(err);        
//     }
//     else
//     {
//         console.log("all saved");
//     }
// })

Fruit.find(function(err,fruits){
    if(err)
    {
        console.log(err);
    }
    else
    {
        mongoose.connection.close();
        fruits.forEach(element => {
            console.log(element.name);
        });      
    }
});

// Fruit.updateOne({_id:"ID_HERE!"}, {name:"Something"},function(err){
//     if (err) 
//     {
//         console.log(err);    
//     }
//     else
//     {
//         console.log("succesfull")
//     }
// })

Fruit.deleteMany({name:"apple"},function(err)
{
    if (err) 
    {
        console.log(err)
    }
    else
    {
        console.log("succesfully")
    }

})

Person.deleteMany({name: "John"},function(err)
{
    if (err) 
    {
        console.log(err)
    }
    else
    {
        console.log("succesfully")
    }

})


