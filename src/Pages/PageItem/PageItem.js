//Dependencies
import React, { Component } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';


class PageItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.addItem = this.addItem.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    addItem() {
        inCart.push(this.props.id);
        cartTotal += (this.props.price);
        this.setState({ show: false });
    }

    render() {
        return (
            <div className="item">
                <Card style={{ width: '18rem' }} onClick={this.handleShow}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text>
                            {this.props.price}
                        </Card.Text>
                        <button>Quick View</button>
                    </Card.Body>
                </Card>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={this.props.img} style={{ width: '400px' }}></img>
                        <p>{this.props.description}</p></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
          </Button>
                        <Button variant="primary" onClick={this.addItem}>
                            Add to Cart
          </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export let inCart = [];

export let cartTotal = 0;


export default PageItem;