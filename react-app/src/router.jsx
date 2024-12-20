import React from "react";
import {
  BrowserRouter as Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Home from "./home";
import About from "./about";

function RouterPr() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
}
export default RouterPr;