const express = require('express');
const db = require('./db')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.json())

// Route to get all posts
app.get("/api/gettingData", (req,res)=>{
db.query("SELECT Email,Password FROM userdetails", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
}); });

app.post("/api/submittingData", (req,res)=>{
   
    const username = req.body.buName
    const email = req.body.bEmail
    const password = req.body.bPassword
    const phoneNumber = req.body.bPhoneNumber

    const sqlInsert = " INSERT INTO userdetails(UserName,Email,Password,PhoneNumber) VALUES(?,?,?,?);";
    db.query(sqlInsert,[username,email,password,phoneNumber], (err,result)=>{
        if(err) {
        console.log(err)
        } else {
           alert("Submitted successfully")
        }
    });
});

app.listen(4001,()=> {
    console.log("Server is running on port 4001");
});





