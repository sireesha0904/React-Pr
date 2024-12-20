import React from "react";
import { BrowserRouter as Routes, Route, Link, BrowserRouter, } from "react-router-dom";
import Home from "./home";
import About from "./about";

function Router() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">home</Link> | <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
        </Routes>
      </BrowserRouter>
    );
}
export default Router;