import React, { useState } from 'react'




export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        console.log("Uppercase")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("hi","success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)

    }

    const handleExtraSpaces =()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleCopy=()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return (
        <>

<div className="container my-4" >


            <div className="form-group" style={{ color: props.mode === 'dark' ? 'white' : 'black', transition: 'all 0.5s ease' }}>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black', transition: 'all 0.5s ease' }}>Enter text to analyze </h1>

                <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='light'?'black':'white'}} value={text} id="myBox" onChange={handleOnChange} rows="8"></textarea>

            </div>
            <div className="container-button">
                <button className="button-43 " role="button" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="button-43 mx-2" role="button" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="button-43" role="button" onClick={handleCopy}>Copy Text</button>
                <button className="button-43 mx-2" role="button" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

        </div>

        <div className="container my-4" >
            <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black', transition: 'all 0.5s ease' }}>Your text summary</h2>
            <div className="card-deck mb-3 text-center">
    <div className="card mb-4 shadow-sm hover-card">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Words</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">Your text has {text.split(" ").length} words</h1>
       
        {/* <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button> */}
        
      </div>
    </div>
    <div className="card mb-4 shadow-sm hover-card">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Characters</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title" >Your text has {text.length} characters </h1>
        
      </div>
    </div>
    <div className="card mb-4 shadow-sm hover-card">
      <div className="card-header">
        <h4 className="my-0 font-weight-normal">Time Taken</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">Text takes {0.008* text.split(" ").length} minutes to read</h1>
        
      </div>
    </div>
  </div>
        </div>

        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black', transition: 'all 0.5s ease' }}>
            <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black', transition: 'all 0.5s ease' }}> Preview Your Text</h2>
            <p>{text.length>0?text:"Enter something int the text box to preview it here"}</p>
        </div>

        </>
    )
}
