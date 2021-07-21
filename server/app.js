const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 5000;
const dotenv = require('dotenv').config()
const url = process.env.MONGOURI

app.use(express.json());
app.use(cors())

var customer = require("./router/customerdets");
var transaction = require("./router/transactiondets");



mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=>{
    console.log("Connected to MongoDB")
});


mongoose.connection.on('error', ()=>{
    console.log("Not connected to MongoDB")
});



//Password for database access 3lwE32UOEsHcBCMR

app.use('/customers', customer);
app.use('/transactions', transaction);

app.listen(PORT, ()=>{
    console.log("Server is running at ", PORT)
});