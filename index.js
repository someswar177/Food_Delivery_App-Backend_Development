const express = require('express');
const bodyParser = require('body-parser');
const calculatePrice = require('./controllers/pricingController')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs')

const swaggerDocument = YAML.load('./swagger.yaml')

const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post('/calculate-price',calculatePrice);  //Route for food delivery 

app.listen(3000,()=>{
    console.log("Server is listening at \nhttp://localhost:3000");
})
