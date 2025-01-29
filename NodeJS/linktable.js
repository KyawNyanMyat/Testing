const mongoose = require('mongoose');
const express = require('express');
const { name } = require('ejs');
const app = express();
const myPORT = 3000

const mongoduri = "mongodb://127.0.0.1:27017/test?replicaSet=rs0";
mongoose.connect(mongoduri)
.then((data)=>{ 
    console.log('connected to database');
    app.listen(myPORT);
    console.log(`Server is listening at ${myPORT}`)
})
.catch((err)=>{ console.error(`Error ${err}`)})


const publisherSchema = new mongoose.Schema({
    _id: Number, 
    name: String,
    location: String
});

const authorSchema = new mongoose.Schema({
    _id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        trim:true
    },
    age:{
        type:Number
    },
    publisher_id:{
        type:Number,
        ref:'publisher'
    }
});

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        trim:true
    },
    author_id:{
        type:Number,
        ref: 'author'
    }
});

const publisher = mongoose.model('publisher',publisherSchema);
const author = mongoose.model('author',authorSchema);
const book = mongoose.model('book',bookSchema);

async function Create() {
    try {
        await publisher.insertMany([
            { _id: 1, name: "Penguin Books", location: "New York" },
            { _id: 2, name: "HarperCollins", location: "London" }
        ]);
        console.log("Publishers inserted");

        await author.insertMany([
            {_id:1, name:'kyaw', age:22, publisher_id: 1},
            {_id:2, name:'nyan', age:23, publisher_id: 2}
        ])
        console.log('New Author created')

        await book.insertMany([
            {title:"Anime", author_id:1},
            {title:"Games", author_id:1},
            {title:"Videos", author_id:2},
            {title:"Games", author_id:2}
        ])
        console.log('New Book created')
    } catch (error) {
        console.error(error)
    }
}


async function getBooks() {
    try {
        const books = await book.find().sort({title:-1}).populate({
            path:'author_id',
            populate: {path:'publisher_id'}
        }).sort();
        console.log(JSON.stringify(books, null,2))
    } catch (error) {
        console.error(error)
    }
}

getBooks()

