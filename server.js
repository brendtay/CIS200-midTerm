const express = require("express");
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 3000;

app.use(cors())

var tierSelected = 0; 
var userOrderTotal = 0;
var orderStorage = 0;

app.listen(PORT, () =>{
    console.log("Listening on port " + PORT)
})


app.get("/drone/:tier", (req, res) => {
   
    tierSelected =  req.params.tier;
    res.send(tierSelected);
    console.log("Server is storing button: " + tierSelected);
    
})

app.get("/drone/", (req, res) => {
   
    res.send(tierSelected);
})


app.get("/user/usertotal/:total", (req, res) => {
        userOrderTotal = parseFloat(req.params.total);
        orderStorage = req.params.total;
        res.send(JSON.stringify(userOrderTotal)); //I dont know why this works but it just does string --> float --> string
    
    console.log("Server is users order total of: " + userOrderTotal);
    
})

app.get("/user/usertotal/", (req, res) => {
    res.send(orderStorage);
})


