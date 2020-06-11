import React from 'react';
import './Header.css';

const Title = (props) => {
    return(
        <h1>{props.siteTitle}</h1>
    )
} 

export const Description = (props) => {
    return(
        <div className="description">
            <p>{props.children}</p>
        </div>
    );
}

export const Header = (props) => {
    return (
        <div className="top-header">
            <Title siteTitle={props.siteTitle} />
            <a href="https://github.com/symonhasan/cryptgen">Github</a>
        </div>
    );
}