import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Header, Feature, About, Testimonal, Gallery, Contact, Form, Footer } from "./layouts"

import './App.css';
import './css/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <About />
      <Testimonal />
      <Gallery />
      <Contact />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
