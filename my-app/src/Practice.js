import React from 'react'
import './practice.css';
let name = "Sireesha";
function Practice() {
  return (
    <section className="section-container">
      <h1 className="main-heading">Hello {name}, Welcome to React</h1>
      <p className="para">
        This is the first paragraph of the section. In Practice component.
      </p>
      <p className="para">
        React allows you to create reusable components and manage state easily.
      </p>
      <p className="highlight">
        You are doing great! Keep exploring React and building amazing apps.
      </p>
    </section>
  );
}

export default Practice
