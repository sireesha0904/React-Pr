import React, { useState } from 'react'

const Events = () => {
    const [message, setMessage] = useState("Welcocme to Events");
    
    const handleEvents = () => {
        setMessage("Welcome to Events Handling");
    }
  return (
      <div>{message} <br></br>
          <button onClick={handleEvents}>Click Me</button>
          
          
    </div>
    
  )
}

export default Events