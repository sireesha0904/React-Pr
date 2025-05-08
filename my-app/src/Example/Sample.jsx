import React from 'react'

const Simple = () => {
  return (
    <div>
      <pre>This is a Simple Component which we called nested component. And component must start with capital letter</pre>
      <pre>We can use any HTML tag inside the component. </pre>
    </div>
  )
}

const Simple2 = () => {
  return (
    <pre>This is another Simple2 Component.</pre>
  )
}
// import React from 'react'

function Sample() {
  return (
    <div>
      This the main component. in This we added those two components.
      <Simple />
      <Simple2 />
    </div>
  )
}

export default Sample
