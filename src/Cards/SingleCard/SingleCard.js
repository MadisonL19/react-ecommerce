import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Shipping from '../../Images/SVG/shipping.svg';

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
                <Card className="bg-dark text-white">
                    <Card.Img src={this.props.img} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        {this.props.button != ''
                            ? <Button variant="primary">{this.props.button}</Button>
                            : null
                        }
                    </Card.ImgOverlay>
                </Card>
            </div>
        )
    }
}
export default SingleCard;