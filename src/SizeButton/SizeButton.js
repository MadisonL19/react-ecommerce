import React, { Component } from 'react';
import './SizeButton.css';

const SizeButton = (props) => (
    <div>
        <button className="SizeButton"
            key={props.sizeId}
            onClick={() => props.onClick(props.sizeId)}
        >{props.sizeValue}</button>
    </div>
);

export default SizeButton;