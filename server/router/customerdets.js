const express = require('express');
const router = express.Router(); 
const Customers = require('../models/customer');


//get the cutomer details saved in database
router.route('/customers').get((req,res)=>{
    Customers.find()
        .then(customers=> res.json(customers))
        .catch(err=>res.status(400).json('Error:'+err));
        console.log(customers)
});



module.exports = router;