// import logo from './logo.svg';
import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
// import About from './component/About';
import React,{ useState } from 'react';
// import React from 'react';

function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);
  const showAlert = (msg,type)=>{
    setalert({
      message: msg,
      type: type
    })
    setTimeout(()=>{
      setalert(null)
    },1000)
  }
 const toggole = ()=>{
       if(mode === 'light'){
        setmode('dark');
        document.body.style.backgroundColor = '#382b46f5';
        showAlert("Dark  mode has been enabled ","success")
       }
       else{
        setmode('light');
        document.body.style.backgroundColor = 'white'; 
        showAlert("Light  mode has been enabled ","success")


       }
  }
  return (
   <>
  
<Navbar title="TCH" about="About us" mode={mode} toggole={toggole}/>
<Alert alert={alert}/>
 <div className="container my-3 "  > 
  <Textform showAlert={showAlert} heading="Enter the text to analyze: " mode={mode}/>
  {/* <About  /> */}
  </div> 

    </>

  );
}

export default App;
