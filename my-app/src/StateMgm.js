import React from "react";
import { useState } from "react";



const StateMgm = () => {
  const [city, setCity] = useState("Parlakhemundi");
  
  return (
    <div>
      <p>Hello, I am from {city}</p>
      <button onClick={() => setCity("Bhubaneswar")}>Change City</button>
    </div>
  )
}

export default StateMgm
