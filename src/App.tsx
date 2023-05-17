import React from 'react';
import './App.css'
import Navbar from './components/static/navbar/Navbar'
import Footer from './components/static/footer/Footer'
import Home from './paginas/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />}/>         
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}



export default App;
