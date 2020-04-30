//Dependencies
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class CartItem extends Component {
    render() {
        return (
            <div className="CartItem-Item">
                <Card className="CartItem-Card" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Card.Text>
                            {this.props.price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}


export default CartItem;