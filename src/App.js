import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [textEnable, setTextEnable] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
   setAlert({
    msg: message,
    type: type
   }) 
   setTimeout(() => {
    setAlert(null);
   }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setTextEnable('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")


    } else {
      setMode('dark');

      document.body.style.backgroundColor = '#152948';
      showAlert("Dark Mode has been enabled", "success");
    }
  };

  return (
   
    <>
       <Router>
      <Navbar title="Text Wizard" aboutText="About Us" mode={mode} toggleMode={toggleMode} textEnable={textEnable} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} />} />
        </Routes>
      </div>
       </Router>
    </>
     
  );
}

export default App;
