import React, { useState } from 'react'

export default function TextFrom(props) {
    // use this function after click text will be convert 
    const handleupclick = () => {
       // console.log("uper case was clicked " + Text);
        //  setText('you have click on handle change ');
        let NewText = Text.toUpperCase();

        setText(NewText);
        props.showAlert("Convert the text into upeercae ","success");
    }
    const handlelowclick = () => {
       // console.log("uper case was clicked " + Text);
        //  setText('you have click on handle change ');
        let NewText = Text.toLowerCase();
        setText(NewText);
        props.showAlert("Convert the text into lowercose ","success");
    }
    const clear = () => {
       // console.log("text are cleared  " + Text);
        //  setText('you have click on handle change ');
        let NewText = '';
        setText(NewText);
        props.showAlert(" Clear All the text ","success");
    }
    // insert the text in textarea  its a event to give access to insert text 
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);

    }
    const handleCopy =()=>{
        console.log("I am copy ")
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const [Text, setText] = useState('');
    return (


    <>

        <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* insert here on text area value onChange provide the abilty and you can insert using onchange  */}
                <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'white'}}></textarea>
                <button className="btn btn-primary my-3" onClick={handleupclick}>Convert to upper case </button>
                <button className="btn btn-primary my-3 mx-3" onClick={handlelowclick}>Convert to lower case </button>
                <button className="btn btn-primary my-3 mx-3" onClick={clear}>clear all the words</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>Copy the text</button>
                {/* create a button after click this buton take will be convert lower to upeer case  */}
            </div>

        </div>
        <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
            <h1>here your text sumaarry</h1>
            <p> <b>{Text.split(" ").length} </b>  words and  {Text.length} character </p>
        <p>{0.008 * Text.split(" ").length}minute to read</p>
        <h1>Preview</h1>
        <p>{Text}</p>
        </div>
    </>

    )
}
