const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.get("/welcome", (req, res) => {
 var welcome = req.body
 if(welcome){
     res.send("Hey welcome to my API first application")
 }
  
})
app.get("/welcome/:id", (req, res) => {
 var id = req.body;
 if(id){
    res.send("Hey " + req.params.id + " thanks for calling a parameterized route in my API first application ")
 }
  
})

app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`)
})