const express = require('express');
const bodyParser = require('body-parser');
const calculatePrice = require('./controllers/pricingController')

const app = express();
app.use(bodyParser.json()); 

app.post('/calculate-price',calculatePrice);  //Route for food delivery 

app.listen(3000,()=>{
    console.log("Server is listening at \nhttp://localhost:3000");
})
