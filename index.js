// imports
const express = require('express');
const bodyParser = require('body-parser');

// creating an express app
const app = express();

// setting server port
const port = process.env.PORT || 5000;

// parse request data(content type: application/x-www-form-rulencoded)
app.use(bodyParser.urlencoded({extended: false}))

// parse request data(content type: application/json)
app.use(bodyParser.json());

// define root route
app.get('/', (req, res) => {
	res.send('Welcome to CRUD Express');
}); 

// import routes
const empRoutes = require('./src/routers/emp.route');

// create api calls
app.use('/rrullan/api/getAllEmployees/', empRoutes);

// port listener
app.listen(port, () => {
	console.log(`CRUD Express is running at ${port}`);
});