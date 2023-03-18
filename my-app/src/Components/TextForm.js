import React, { useState } from "react";

export default function TextForm(props) {
  const [text,setText]=useState('');
  
  const handleUpClick=()=>{
    console.log("BTN Clicked "+ text);
    let newText=text.toUpperCase();
    setText(newText);

  }

  

  const onAlternatingCase = () => {
    let newtext = ""
    for (let index = 0; index < text.length; index++) {
        if ((index % 2) === 0) {
            newtext += text[index].toLowerCase()
        }
        else {
            newtext += text[index].toUpperCase()
        }

    }
    setText(newtext)
}
const reverseText=()=>{
  let newText="";
  for (let index = text.length-1; index >=0; index--) {
    newText += text[index];
  }
  setText(newText); 
}

  const handleLowClick=()=>{
    console.log("BTN Clicked "+ text);
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleClClick=()=>{
    let newText='';
    setText(newText);
  }
  
  const handleOnChange=(event)=>{
    console.log("On Change Clicked");
    setText(event.target.value);
  }
  return (
    <>
    <div className="container">
      <h1>{props.header}</h1>
      <div class="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={onAlternatingCase}>Convert to AlternatingCase</button>
      <button className="btn btn-primary mx-2" onClick={reverseText}>Convert to reverseText</button>
      <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
    
    </div>

    <div className="container">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008*text.split(" ").length} Minutes Required to read</p>
  
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Text To Preview Here"}</p>
    </div>

    </>
  );
}
