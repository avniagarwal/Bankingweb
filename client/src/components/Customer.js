import React, {  useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import './Customer.css'
import SendIcon from '@material-ui/icons/Send';
const axios = require('axios')


const Customers = () => {
  const [customers, setCustomers] = useState([])
  
  useEffect(() => {
    axios
    .get('http://localhost:5000/customers/')
    .then(res=> setCustomers(res.data))
    .catch(err=> console.log(err))
  })
  let history = useHistory();
  const transferhandler = (Id)=>{
      history.push({pathname:`/transfer/${Id}`,state:{customers:customers}});
  }
  
  return (
    <div className='customers'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Account Number</th>
              <th>IFSC Number</th>
              <th>Account Balance</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => 
              <tr key={customers._id}>
                <td>{customers.name}</td>
                <td>{customers.email}</td>
                <td>{customers.phone}</td>
                <td>{customers.accountno}</td>
                <td>{customers.ifscno}</td>
                <td>{customers.accountbalance}</td>
                <SendIcon className="Sendicon"></SendIcon>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  )
}

export default Customers