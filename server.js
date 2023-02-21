const express = require("express");
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 3000;

app.use(cors())

let tierSelected = 0; 

app.listen(PORT, () =>{
    console.log("Listening on port " + PORT)
})


app.get("/drone/:tier", (req, res) => {
   
    tierSelected = req.params.tier;
    res.send(tierSelected);
    console.log("Server is storing button: " + tierSelected);
    
})

app.get("/drone/", (req, res) => {
   
    res.send(tierSelected);
    
    
})

// app.get("/api/products/create/", (req, res) => {
//     res.send(products);
// })

