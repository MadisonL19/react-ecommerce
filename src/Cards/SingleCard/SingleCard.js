import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Shipping from '../../Images/SVG/shipping.svg';
import './SingleCard.css';

class SingleCard extends Component {
    static defaultProps = {
        id: 4,
        title: "",
        description: "",
        img: Shipping,
        button: ''
    }
    render() {
        return (
            <div className="card">
                <Card className="bs-card">
                    <Card.Img src={this.props.img} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className="bs-card-title">{this.props.title}</Card.Title>
                        <Card.Text className="bs-card-text">
                            {this.props.description}
                        </Card.Text>
                        {this.props.button != ''
                            ? <Button className="bs-card-button" variant="primary">{this.props.button}</Button>
                            : null
                        }
                    </Card.ImgOverlay>
                </Card>
            </div >
        )
    }
}
export default SingleCard;