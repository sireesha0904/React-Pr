import React from 'react'
import useState from 'react'
const Circuit = () => {

    const [login, setlogin] = useState(true);


  return (
    <div>
          {login
           && <h1>Welcome to Circuit</h1>}
    </div>
  )
}

export default Circuit
