import React from 'react'
import FirstCompo from './Routers/FirstCompo'
import  SecondCompo from './Routers/SecondCompo'
import  ThirdCompo  from './Routers/ThirdCompo'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <h1>My Vite React App</h1>
      <p>This is a simple Vite React app with routing.</p>
      <p>Click the links to navigate between components.</p>

      <Routes>
        <Route path='/abc' element={<FirstCompo />} />
        <Route path='/xyz' element={<SecondCompo/>} />
        <Route path='/pqr' element={<ThirdCompo/>} />
        <Route path='/' element={<h1>Welcome to the Home Page</h1>} />
      </Routes>

    </div>
  );
}

export default App
