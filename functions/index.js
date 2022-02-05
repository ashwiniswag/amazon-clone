const functions = require("firebase-functions");
const express = require('express');
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KPOacSJ18GqVmJhPZpjb4nRMNApxWvXU0PvV4QFoMTsrfECbJ87aoFpTp1cV6SZmSvuKjbXEoouunPHm95m3O9Q00ZipNhi6y');

// API

//App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// Api routes
app.get('/', (request,response) => response.status(200).send('hello guys!'));
app.post('/payments/create', async (request,response) =>{
	const total = request.query.total;
	console.log('Payment Request Received BOOM!!! for this amount >>> ', total);
	console.log("Just checking ",request.query);
	const paymentIntent = await stripe.paymentIntent.create({
		amount: total,
		currency: "inr",
	});
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	})
})

// Listen Command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-ac7be/us-central1/api