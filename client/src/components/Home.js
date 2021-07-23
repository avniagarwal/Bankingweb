import React from 'react';
import '../App';
import { Button } from './Button'
import './Home.css'

function Home() {
  return (
    <div className='hero-container'>
        <h1>BANKING SYSTEM</h1>
        <p>Transfer Money</p>
        <div className='hero-btns'>
            <Button className='btns' 
            buttonStyle='btn--outline' 
            buttonSize='btn--large'>
            GET STARTED
            </Button>
        </div>
    </div>
)
}

export default Home;