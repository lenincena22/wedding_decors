import React from 'react';
import About from "./layouts/main/about/About";
import Navbar from './components/navbar/Navbar';
import './App.css';
import './css/main.css';

function App() {
  return (
    <div className="App">
      <About />
      <Navbar/>
    </div>
  );
}

export default App;
