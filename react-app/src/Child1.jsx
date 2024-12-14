import React, { useState } from 'react';

function Child1() {
    const [value, setValue] = useState("");
    return (
      <div>
        <h1>Child ! Component</h1>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter a Value"
        >
          <p>Value in Child 1: {value}</p>
        </input>
      </div>
    );
}

export default Child1;