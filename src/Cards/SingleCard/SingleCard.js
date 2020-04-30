import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class SingleCard extends Component {
    static defaultProps = {
        id: 4,
        title: "Staying connected around the world.",
        description: "",
        img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1588&q=80',
        button: 'Get Social'
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
                        <Button variant="primary">{this.props.button}</Button>
                    </Card.ImgOverlay>
                </Card>
            </div>
        )
    }
}
export default SingleCard;