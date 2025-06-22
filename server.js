// const jsonString='{"name":"Harshita", "age": 22, "city":"Agra"}'
// const jsonObject=JSON.parse(jsonString);
// console.log("Object coverted Data");
// console.log(jsonObject.name);
// console.log(jsonObject);


// const objectToConvert={name: "Sita", age: 32, city: "Delhi"}
// const jsonStringified=JSON.stringify(objectToConvert);
// console.log("Json converted Data");
// console.log(jsonStringified);
// console.log(typeof jsonStringified);



//Making server

// const express=require("express")


// const app=express();

// app.get("/",function (req,res){
//     res.send("Welcome to my hotel...how can i help u?We have a long list of menu items")
// })

// app.get("/chicken",function (req,res){
//     res.send("Sure sir i would love to serve you chicken")
// })

// app.get("/idli",function (req,res){

//     var customizedIdli={
//         name: "rava idli",
//         size: "10 cm diameter",
//         is_sambhar: true,
//         is_chutney: false
//     }
//     // res.send("Welcome to south india and would love to serve u idli")
//     res.send(customizedIdli)
    
// })

// app.post("/items",(req,res)=>{
//     console.log("data is saved")
//     res.send("Data stored maharaj")
// })




// app.listen(3000,()=>{
//     console.log('listening on port 3000')
// })



//Video 5

const express=require("express")
const app=express();
const db=require('./db')
// const Person=require('./models/Person')
const MenuItem=require("./models/MenuItem")
const Task=require("./models/Tasking")

const bodyParser=require("body-parser")


app.use(bodyParser.json())  //req.body


app.get("/",function (req,res){
    res.send("Welcome to my hotel...how can i help u?We have a long list of menu items")
})


//Post route to add a person
// app.post('/person',(req,res)=>{
    // const data=req.body;  //Assuming the req body consist of the user data

    // //Create a new person document using the mongoose model
    // const newPerson=new Person(data)

    // //Save the new person to the database
    // newPerson.save((error,savedPerson)=>{
    //     if(error){
    //         console.log("Error saving person:",error)
    //         res.status(500).json({error:"Internet server error"})

    //     }else{
    //         console.log("data saved successfully")
    //         res.status(200).json(savedPerson)
    //     }
    // })




// })


// //Post route to add a person
// app.post('/person',async(req,res)=>{
//     try{
//         const data=req.body;  //Assuming the req body consist of the user data

//         //Create a new person document using the mongoose model
//         const newPerson=new Person(data)

//         //Save the new person to the database
//         const response=await newPerson.save()
//         console.log("data saved successfully")
//         res.status(200).json(response)
        
//     }catch(err){
//         console.log(err)
//         res.status(500).json({error:"Internet server error"})

//     }
// })

// app.get('/person',async(req,res)=>{
//     try{
//         const data=await Person.find()
//         console.log("data fetched")
//         res.status(200).json(data)
//     }catch(err){
//          console.log(err)
//         res.status(500).json({error:"Internet server error"})
//     }
// })

// app.post('/menu',async(req,res)=>{
//     try{
//         const data=req.body;
//         const newMenu=new MenuItem(data);
//         const response=await newMenu.save()
//         console.log("data saved successfully")
//         res.status(200).json(response)

//     }catch(err){
//         console.log(err)
//         res.status(500).json({error:"Internet server error"})
//     }
// })

// app.get('/menu',async(req,res)=>{
//     try{
//         const data=await MenuItem.find()
//         console.log("data fetched");
//         res.send(data)


//     }catch(err){
//          console.log(err)
//         res.status(500).json({error:"Internet server error"})
//     }
// })

// //Task
// app.get("/api/tasks",async(req,res)=>{
//     try{
        
//         const data=await Task.find()
//         console.log("data fetched");
//         res.send(data)

//     }catch(err){
//         console.log(err)
//         res.status(500).json({error:"Internet server error"})
//     }

// })

// app.post("/api/tasks",async(req,res)=>{
//     try{
//         const data=req.body;
//         const newTask=new Task(data);
//         const response=await newTask.save()
//         console.log("data saved successfully")
//         res.status(200).json(response)

//     }catch(err){
//         console.log(err)
//         res.status(500).json({error:"Internet server error"})
//     }

// })


// app.get("/person/:workType",async(req,res)=>{
//     try{
//         const workType=req.params.workType;

//         if(workType == "chef" || workType == "manager" || workType == "waiter"){
//             const response=await Person.find({work: workType})
//             console.log("response fetched")
//             res.status(200).json(response)

//         }else{
//             res.status(404).json({error: 'Invalid work Type'})
//         }

//     }catch(err){
//         console.log(err)
//         res.status(500).json({error:"Internet server error"})

//     }
// })


//Import the router files
const personRoutes=require("./routes/personRoutes")
//Import the router files for menu
const menuRoutes=require("./routes/menuItemRoutes")


//use the router files
app.use('/person',personRoutes)
//use the router files
app.use('/menu',menuRoutes)



app.listen(3000,()=>{
    console.log('listening on port 3000')
})




