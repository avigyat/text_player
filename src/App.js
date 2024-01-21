
import React, { useState } from 'react';
import './App.module.css';
// import Aboutus from './components/Aboutus';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import Aviinfo from './components/Aviinfo';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }

  return (

    <div >
      <Navbar tittle="Text-Player" />
      <Alert alert={alert}></Alert>
      <div className='container' >
        <Textform heading="Enter your text here" showAlert={showAlert} />
      </div>
      
    </div>
  );
}

export default App;
