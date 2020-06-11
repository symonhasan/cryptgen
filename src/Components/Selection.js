import React from 'react';
import './Selection.css';

const Selection = (props) => {
    return (
        <div className={props.class} onClick={props.click} >
            <p>{props.title}</p>
            <h2>{props.mode}</h2>
        </div>
    );
}

export const SelectionArea = (props) => {
    return (
        <div className="selection-area">
            <Selection class={"selection-left"} title="Interpret As" mode={props.leftmode} click={props.leftclick}/>
            <Selection class="selection-right" title="Convert To" mode={props.rightmode} click={props.rightclick}/>
        </div>
    );
}