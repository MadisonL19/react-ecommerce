//Dependencies
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './CartItem.css';


class CartItem extends Component {
    render() {
        return (
            <div className="CartItem-Item">
                <div className="CartItem-Img">
                    <img id="CartItem-Img" src={this.props.img} />
                </div>
            </div>
        );
    }
}


export default CartItem;