import React from 'react'
import { useState } from 'react'

const StateMgm = () => {
    const [city, setCity] = useState("Paralakhemundi");
  return (
    <div>
          <p>Current City is : {city}</p>
          <button onClick={ () => setCity("Uppalada")}>Change City</button>
    </div>
  )
}

export default StateMgm
