import React, { useState, useEffect } from 'react'
const axios = require('axios')

const Transactions = () => {
  const [transaction, setTransaction] =useState([])
  useEffect(() => {
      axios
    .get('http://localhost:5000/transactions/')
    .then(res=> setTransaction(res.data))
    .catch(err=> console.log(err))
    console.log(transaction)
  }, [])
  
  
  return (
    <div className='transactionContainer'>
      
        <table>
          <thead>
            <tr>
              <th className='TFrom'>FROM</th>
              <th className='TTO'>TO</th>
              <th className='TAmount'>AMOUNT</th>
              <th className='TDate'>DATE</th>
            </tr>
          </thead>
          <tbody>
            {transaction?.map((trans) =>
              <tr key={trans._id} className='transaction'>
                <td className='TFrom'>{trans.name}</td>
                <td className='TTO'>{trans.name}</td>
                <td className='TAmount'>{trans.amount}</td>
                <td className='TDate'>{trans.date}</td>
              </tr>
            )}
          </tbody>
        </table>
    </div>
  )}


export default Transactions