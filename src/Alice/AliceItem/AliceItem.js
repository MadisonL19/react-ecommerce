import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';
import './AliceItem.css';

class AliceItem extends Component {
    render() {
        return (
            <div className="AliceItem">
                <Card style={{ width: '18rem', height: '30rem' }} className="AliceItem-Card">
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Link to={`/${this.props.category}`}><Card.Title>{this.props.name}</Card.Title>
                            <Card.Text>
                                {this.props.price}
                            </Card.Text></Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default AliceItem;