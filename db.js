const mongoose=require("mongoose")

//Define the mongoDb connection url

const mongoURL='mongodb://127.0.0.1:27017/hotels' //replace mydatabase with your database name

//Set up mongo connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology : true
})


//Get the default connection
//Mongoose maintains a default connection object representing the MongoDb connection
const db=mongoose.connection;

//define event listeners for database connection

db.on('connected',()=>{
    console.log('Connected to MongoDb server')
})

db.on('error',()=>{
    console.log('MongoDb connection error')
})

db.on('disconnected',()=>{
    console.log('MongoDb disconnected')
})

//Export the database connection
module.exports=db;