const express = require("express");
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 3000;

app.use(cors())

let tierSelected = 0; 
let userOrderTotal = 0;
let orderStorage;

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
    if(req.params.total != "NaN"){
        userOrderTotal = parseFloat(req.params.total);
        orderStorage = req.params.total;
        res.send(req.params.total);
    }
    
    console.log("Server is users order total of: " + userOrderTotal);
    
})

app.get("/user/usertotal", (req, res) => {
    res.send(orderStorage);
})


