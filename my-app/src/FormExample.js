import React, { useState } from 'react'
import './App.css';
const FormExample = () => {
    const [username, setUsername] = useState("");
    
    const getUserName = (e) => {
        setUsername(e.target.value);
        console.log(e.target.value);
    }

  return (
    <section className='form-example'>
          <h1>Form Example</h1>
          <p>Hello {username}</p>
          <div>
              <input type='text' placeholder='Enter your name' onChange={getUserName}/>
              <button type='submit'>Submit</button>
      </div>
    </section>
  )
}

export default FormExample
