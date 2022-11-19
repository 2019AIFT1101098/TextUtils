import { useState } from 'react';
import './App.css';
 //import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';




function App() {
  const [mode, setMode] = useState('dark');  // wherther dark mode inable or not 
  const [alert, setalert] = useState(null);

  const showAlert =(message,type)=>{
    setalert({
      msg : message,
      type:type 
    })
    setTimeout (() =>{
      setalert(null);

    },2500)
  }
  const toggelMode = () =>{
    if(mode  === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743' 
     showAlert("enable to dark mode","success");   
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white' 
      showAlert("enable to light mode","success");
    }
  }

  return (
    <>
    
      {/* <Navbar title="Textuils1" abouttext="Text utils" /> */}
      <Navbar title="Textuils1" mode={mode} toggelMode={toggelMode} abouttext="about" />
         <Alert alert={alert}/>
      <div className="container my-3">    
          <TextFrom  showAlert={showAlert} heading=" Enter the text to anyalze "    mode={mode}/>
           {/* <About /> */}
      </div>

  
    </>

  );
}

export default App;
