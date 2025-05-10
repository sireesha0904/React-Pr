import React, { useState } from 'react'

const StateMgm = () => {
  const [city, setCity] = useState("Parlakhemundi");
  setCity("Bhubaneswar");
  return (
    <div>
      <p>Hello i am From {city}</p>
      <button onClick={() => setCity("Bhubaneswar")}>Change City</button>
    </div>
  )
}

export default StateMgm
