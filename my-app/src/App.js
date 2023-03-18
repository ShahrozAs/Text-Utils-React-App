import "./App.css";
// import Accordion from "./Components/Accordion";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from 'react'
function App() {
   const [modeText, setmodeText] = useState('Enable dark Mode');
  const [Mode, setMode] = useState('light');
  const toggleMode=()=>{
    if (Mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#032453';
      document.body.style.color='white';
      setmodeText('Disable Dark Mode');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#fff';
      document.body.style.color='black';
      setmodeText('Enable Dark Mode');
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" modetext={modeText} mode={Mode} toggle={toggleMode}/>
      
      <div className="container my-3">
      <TextForm header="Enter the Text to analyze below"/>
      </div>

     {/* <Accordion/> */}

    </>
  );
}

export default App;
