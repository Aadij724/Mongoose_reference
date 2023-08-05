// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true,});

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/peopleDB');
console.log("abc");


const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

const Fruit = mongoose.model("Fruit", fruitSchema );

const apple = new Fruit({
    name: "Apple",
    rating: 8
});

apple.save();


const personSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    age: Number,
    city: String,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema );

// const person1 = new Person({
//     name:"Amy",
//     age:12,
//     city:"usa",
//     favouriteFruit: pineapple
// });

// person1.save();




const updateDb = async ()=> {
    await Person.updateOne({name:"john doe"}, {favouriteFruit: apple});
}
updateDb();
// mongoose.connection.close();


const person2 = new Person({
    name: "Aadi",
    age: 19,
    city: "Ambala"
});

const person3 = new Person({
    name:"dsvsd",
    age: 56,
    city: "sdsdc"
});

// Person.insertMany([person1, person2, person3]);


// person.save();


// const a = async ()=> {
//     const b = await Person.find({}).exec();
//     console.log(b);
// }
// a();


// const readDb = async ()=> {
//     const people = await Person.find({}).exec();

//     mongoose.connection.close();

//     people.forEach( person => console.log(person.name)); 
// }
// readDb();


// const updateDb = async ()=> {
//     await Person.updateOne({name:"Aadi"}, {age:20});
// }
// updateDb();


// const deleteDb = async ()=> {
//     await Person.deleteOne({name:"Amy"});
// }
// deleteDb();



