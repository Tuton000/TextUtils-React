import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggle = () => {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has beeb enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Navbar title= "TextUtils" mode={mode} toggle={toggle}/>
      <Alert alert= {alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter text below to analyse" mode={mode}/>
      </div>
    </>
  );
}

export default App;
