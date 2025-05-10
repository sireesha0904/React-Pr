import React from "react";
import { useState, useEffect } from "react";

function UseEff() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is ${count}`);
  }, [count]);
  return (
    <div>
      <h1> Hello Sireesha </h1>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEff;
