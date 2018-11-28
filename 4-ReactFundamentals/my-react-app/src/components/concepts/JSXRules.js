import React from 'react';
import JSXCompiler from '../concepts/JSXCompiler'

const JSXRules = () => {
    return (

    <div className="main">
        <div className="mainDiv">
            <h1 className='section-title'>JSX</h1>
            <dl>
                <dt>Resembles HTML</dt>
                <dd>It's not HTML</dd>
                <dd>Closer to JS</dd>
                <dt>React.createElement()</dt>
                <dd>Usesd to construct and update the DOM</dd>
                <dt>Not required</dt>
                <dd>Developers don't have to use JSX</dd>
            </dl>
            <hr />
            <h1>Egghead.io's JSX Compiler</h1>
            <JSXCompiler />
        </div>        
    </div>
)
};

export default JSXRules;