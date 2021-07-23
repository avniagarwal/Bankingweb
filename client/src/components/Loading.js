import React from 'react'
import '../App.css'
import * as location from './1055-world-location.json'

function Loading() {
    const locationOptions = {
        loop: true,
        autoplay: true, 
        animationData: location.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
      // const successOptions = {
      //   loop: true,
      //   autoplay: true, 
      //   animationData: success.default,
      //   rendererSettings: {
      //     preserveAspectRatio: 'xMidYMid slice'
      //   }
      //   };
    return (
        <>
        <div className="Loading">
        <p className="text-center text-white">Loading...</p> 
        </div>
        
        </>
    )
}

export default Loading