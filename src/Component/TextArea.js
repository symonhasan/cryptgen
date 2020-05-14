import React from 'react';
import './TextArea.css';

const TextBox = (props) => {
    return(
        <div className="">
            <textarea rows="12" onChange={props.func} defaultValue={props.value}>
                
            </textarea>
            <div className="bar">
                <p>{props.len}</p>
            </div>
        </div>
    );
}

const TextArea = (props) => {
    return(
        <div className="text-area">
            <TextBox value={props.inputtext} len={props.inputtextlen} func={props.func} clicked={props.leftclicked}/>
            <TextBox value={props.outputtext} len={props.outputtextlen} clicked={props.rightclicked}/>
        </div>
    )
}
export default TextArea;

