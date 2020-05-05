//Dependencies
import React, { Component } from 'react';
import { Card, Button, Modal, Row, Container, Col } from 'react-bootstrap';
import PhotoSlider from '../../PhotoSlider/PhotoSlider.js';
import './PageItem.css';
import Products from '../../productData.js';
import ColorButton from '../../ColorButton/ColorButton.js';

class PageItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.addItem = this.addItem.bind(this);
        this.changeColor = this.changeColor.bind(this);

        this.state = {
            show: false,
            color: 1,
            photoColor: 1
        };
    }

    changeColor(colorId) {
        this.setState({ color: colorId, photoColor: colorId });
    }

    handleClose() {
        this.setState({ show: false, color: 1, photoColor: 1 });
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
                <Modal dialogClassName="custom-dialog" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                {this.props.colors.map((color) => {
                                    if (color.colorId === this.state.photoColor) {
                                        return (
                                            <div>
                                                <PhotoSlider className="Modal-PhotoSlider"
                                                    img1={color.img1}
                                                    img2={color.img2}
                                                    img3={color.img3}
                                                    img4={color.img4}
                                                    img5={color.img5} />
                                            </div>
                                        )
                                    }
                                })}
                                <p>Colors:
                                {this.props.colors.map((color) => {
                                    return (
                                        <div>
                                            <ColorButton
                                                colorId={color.colorId}
                                                colorName={color.colorName}
                                                onClick={this.changeColor}
                                            />
                                        </div>)
                                })}
                                </p>
                            </Col>
                            <Col>
                                <p>{this.props.description}</p>
                            </Col>
                        </Row>
                    </Modal.Body>
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

/*<img src={this.props.img} style={{ width: '400px' }}></img>*/