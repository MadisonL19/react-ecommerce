import React, { Component } from 'react';
import './ColorButton.css';

const ColorButton = (props) => (
    <div>
        {props.colorHex !== '' ?
            <button className="ColorButton-Hex"
                style={{ backgroundColor: props.colorHex }}
                key={props.colorId}
                onClick={() => props.onClick(props.colorId)}>
            </button>
            :
            <button className="ColorButton-Img"
                style={{ backgroundImage: `url(${props.colorImg})` }}
                key={props.colorId} onClick={() => props.onClick(props.colorId)}></button>

        }
    </div>
);

export default ColorButton;