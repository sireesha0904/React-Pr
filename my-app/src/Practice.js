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

            <img src='https://th.bing.com/th/id/R.ac54341504588eedd651ff867f1ef949?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.
            com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0'
            alt='Nature' className='image' />
        </section>
    );
}

export default Practice
