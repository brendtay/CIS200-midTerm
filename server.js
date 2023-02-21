const express = require("express");
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 3000;

app.use(cors())

app.listen(PORT, () =>{
    console.log("Listening on port " + PORT)
})


app.get("/api/products/create/:name", (req, res) => {
   
    //products.push(req.params.name);
    //res.send(products);
    
})

// app.get("/api/products/create/", (req, res) => {
//     res.send(products);
// })

