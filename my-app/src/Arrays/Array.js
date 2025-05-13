import React from 'react'

const Array = () => {
    let arr = ["Sireesha", 21, "CSE", {city:"Parlakhemundi", state:"Odisha"}, "B.tech"]
  return (
    <div>
      <h1>Array</h1>
          <h2>Array is a data structure that can store multiple values in a single variable.</h2>
          <p> Hello {arr[0]}, i am { arr[1]} yrs Old.</p>
    </div>
  )
}

export default Array
