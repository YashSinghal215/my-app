import './App.css';
// import About from './Components/About';
import Navbar from "./Components/Navbar.js";
import TextForm from './Components/TextForm.js';
import React, { useState } from 'react';
import Alert from './Components/Alert';

// import {
//   Route,
//   Routes
// } from "react-router-dom";



function App() {

  const [mode,setMode]  = useState('light');
  const [alert,setAlert] = useState(null)

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type : type,
    }) 

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#00417a';
      showAlert('Dark mode Enabled' , 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('light mode Enabled' , 'success');

    }
  }

  return (
    <>
    {/* <Router> */}


    
      <Navbar heading="My-App" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className='container my-3'>
      {/* <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/"   element={<TextForm showAlert={showAlert}  heading ="Enter Text here to analize" mode={mode}/>} >        
            </Route>
      </Routes> */}

      <TextForm showAlert={showAlert}  heading ="Enter Text here to analize" mode={mode}/>
      </div>





    {/* </Router> */}
    </>
  );
}

export default App;

