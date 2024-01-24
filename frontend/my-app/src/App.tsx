import React from 'react';
import './App.css';
import Footer from './components/footer'
import Navbar from './components/navbar';
import Home from './pages/home';

function App() {
  return (
    <div id="body-content">
        <Navbar />
        <Home />
        <Footer />
    </div>
  );
}

export default App;
