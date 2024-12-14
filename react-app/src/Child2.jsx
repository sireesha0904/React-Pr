import React, { useState } from 'react';
function Child2() {
    const [value, setValue] = useState("");

    return (
        <div>
            <h1>Child2 Component</h1>
            <input
                type='text'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Enter Text here...' />
            <p>Value in Child 2: {value}</p>
        </div>
    )
}
export default Child2;