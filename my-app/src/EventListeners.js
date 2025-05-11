import React from 'react'

const EventListeners = () => {
    function sayHello() {
        alert("Hello! You clicked the button !!")
    }
  return (
    <div>
      <button onClick={sayHello}>Click Me</button>
    </div>
  )
}

export default EventListeners
