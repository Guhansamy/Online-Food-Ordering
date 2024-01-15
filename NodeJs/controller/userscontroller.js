const usersModel = require("../model/usersmodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = (req,res) => {
    const {
        fullName,
        email,
        password
    } = req.body;

    const newUsers = new usersModel({
        fullName,
        email,
        password : bcrypt.hashSync(password , 10) 
       // here we using bcyrpt to hash the values and we can store it safely with help of bcyrpt library
    });

    usersModel.findOne({email})
    .then ((data) => {
        if (data){
        res.status(400).send({message : "User had already registered"})
        }
        else {
            newUsers.save()
            .then ((data) => {
                res.status(200).send({message : "User registered successfully"})
            })
        }
    })
    .catch(err => {
        return res.status(500).send({message : err.message || "Some error has occurred while registering"})
    })
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    console.log("email :" +email +"\n"+"password" + password);
    
    usersModel
      .findOne({ email })
      .then((data) => {
        if (!data) { 
          return res.status(404).json({ message: "User is not registered" });
        }
  
        let isValidPassword = bcrypt.compareSync(password, data.password);
  
        if (!isValidPassword) {
          res.status(401).send({ message: "Invalid Password" });
        }
  
        let token = jwt.sign({ id: data._id }, "secretKey");
        res.json({
          user: {
            id: data._id,
            email: data.email,
            password: data.password,
            fullName: data.fullName,
          },
          accessToken: token,
          message : "Meassage had send successfully"
        });
        // res.status(200).send({message : "message has sebd sucessfully"})
      })
      .catch((err) => {
        res.status(500).send({ message: "Server not running" });
      });
  };