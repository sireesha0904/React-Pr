
import React, { useState } from "react";
function Greetings() {
    const [isLoggin, SetLogin] = useState(false);
    return (
        <div>
            <h1>Hello, Welcome to this Page</h1>
            {isLoggin ? <h1>Welcome User ! </h1> : <h1>Please Login</h1>}
            <button onClick={() => SetLogin(!isLoggin)}>
                Login Status
            </button>
        </div>
    );
}

export default Greetings;