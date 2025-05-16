import React, { useState } from "react";

const Circuit = () => {
  const [login, setLogin] = useState(true);

  return (
    <div>
      {login && <h1>Welcome to Circuit</h1>}
      {!login && <h1>Please Login</h1>}

      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Circuit;
