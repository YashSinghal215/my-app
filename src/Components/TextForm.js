import React,{useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {

    const toUphandle = () => {
        console.log("Hiii");
        setText('Upper case made');
        
        let newtext = text.toUpperCase();
        setText(newtext);

        props.showAlert('Upper Case Success','success');
    }
    const toLohandle = () => {
        console.log("Hiii");
        setText('Upper case made');

        let newtext = text.toLowerCase();
        setText(newtext);

        props.showAlert('Lower Case Success','success');

    }
    
    const onClickhandel = (event)=>{
        console.log("Helloo");
        setText(event.target.value);
    }

    const [text,setText] = useState("Enter text here");


  return (
    <>
        <div className='container my-3' style={{color : props.mode==='dark' ? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value ={text} onChange={onClickhandel} style={{backgroundColor : props.mode==='dark' ? 'gray':'white',color : props.mode==='dark' ? 'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={toUphandle}>To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={toLohandle}>To Lowercase</button>

        </div>

        <div className='conrainer my-3' style={{color : props.mode==='dark' ? 'white':'black'}}>
            <h1>Text Summary</h1>

            <p>words are {text.split(" ").length} and characters are {text.length}</p>
            <p>{0.08 * text.split(" ").length } Minutes</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string,
}