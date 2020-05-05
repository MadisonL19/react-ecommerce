import React, { Component } from 'react';

const ColorButton = (props) => (
    <div>
        <button key={props.colorId} onClick={() => props.onClick(props.colorId)}>
            {props.colorName}
        </button>
    </div>
);

export default ColorButton;