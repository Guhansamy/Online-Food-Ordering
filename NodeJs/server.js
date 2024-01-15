const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");   // mongoose is libray for connecting mongodb with nodejs
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();  // a app is created by this

const url = "mongodb://127.0.0.1:27017/person";

const loggedIn = (req, res, next) => {
    console.log("User has initiated it successfully");
    next();
}  // always ensure to write code before initialisation

app.use(cors());

app.use(bodyParser.json());
//bodyParser is used to get the value from the input from users

app.use(loggedIn);  // application miidleware


app.listen("5000", () => {
    console.log("server is running");
});

// mongoose.connect(
//     "mongodb+srv://guhan:2004@cluster0.xb4aug6.mongodb.net/"
//     );

mongoose.connect(url,{})
.then (result => console.log("Server is connected"))
.catch(err => console.error(err))

const db  = mongoose.connection;

db.on("error", () => {
    console.log("The connection has an error");
})

db.on("open", () => {
    console.log("The connection is successfull");
})

require("./Routes/restaurantsroute")(app);
require("./Routes/usersroute")(app);




 app.get("/", (req,res) => {
     res.send("Learning NodeJS")
 })

// //CRUD Operations

const users = [
    {
        id : 1,
        name : "Raj",
        age : "55",
    },
    {
        id : 2,
        name : "Ravi",
        age : "62",
    },
    {
        id : 3,
        name : "Ram",
        age : "52",
    },
    {
        id : 4,
        name : "josh",
        age : "23",
    },
    {
        id : 5,
        name : "Mohan",
        age : "35",
    },

 ]
// // Create a user  -- POST
// // Get all user -- GET
// // Update any user -- PUT
// // Delete any user -- DELETE

app.get("/users",authUser, (req,res) => {
    res.json(users); 
    //we can also use send or json to send messages
});

function authUser (req,res,next) {
    const authUser = true;

    if (authUser) {
        res.send(200);
        next();
    }
    else {
        throw new Error("User is not authenticated");
    }
    next();
}

function errorHandler(err,req,res,next) {
    console.log("respose : ",res);

    const resStatusCode = res.statusCode ? res.statusCode : 500;

    switch(resStatusCode) {
        case 401:{
            res,send({
                title : "Not Found",
                message : err.message,
            })
            break;
        }
        case 500: {
            res.send({
                title : "Server Error",
                message : err.message
            })
            break;
        }
        default : 
        break;
    }
    next();
}

app.use(errorHandler);


// // Get a particular user with one particular id
 
// app.get("/user/:id" ,(req, res) => {
//     const id = req.params.id;

//     console.log("id:",id);

//     const user = users.find((user) => user.id == id)
    
//     if (!user) {
//         res.status(404).json({message : "ERROR Had Occured"})
//     }
//     res.json(user);
// });


// app.post("/new_user/", (req,res) => {

//     console.log("res",res);

//     const names = req.body.name;
//     const ages = req.body.age;

//     const user = {
//         id : Math.random() * 20,
//         name : names,
//         age : ages,
//     };
//     users.push(user);
//     res.send(users);
// });

// //Updating the user id;

// app.put("/user/:id",(req,res) => {

//     const id = req.params.id

//     const user = users.find((user) => user.id == id);

//     if(!user){
//         res.status(404).json({message : "user does not exist"})
//     }
    
//     // req.body ===> json object

//     const keys = Object.keys(req.body)   //used to take all keys from objects

//     keys.forEach(key => {
//         if (!user[key]){
//             res.status(404).json({message:"Invalid key"})
//         }
//         user[key] = req.body[key];
//     });
//     res.json(users);
// });

// app.delete("/user/:id",(req,res) => {
//     const id = req.params.id;
//     const user = users.find(user => user.id == id);

//     if(!user) {
//         res.status(404).json({message:"user does not exist"})

//     }
//     const filteredUsers = users.filter((user) => user.id != id);
//     //with the help of filter we are taking the users whose userid != id and we giving it as response 
//     //because there is no delete option in js

//     res.json(filteredUsers);
// })


// // npx nodemon server.js