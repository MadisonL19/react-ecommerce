//Dependencies
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Card, Button, Modal, Row, Container, Col } from 'react-bootstrap';
import PhotoSlider from '../../PhotoSlider/PhotoSlider.js';
import './PageItem.css';
import ColorButton from '../../ColorButton/ColorButton.js';
import SizeButton from '../../SizeButton/SizeButton.js';

class PageItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.addItem = this.addItem.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.staticImg = this.staticImg.bind(this);
        this.hoverImg = this.hoverImg.bind(this);
        this.renderFullView = this.renderFullView.bind(this);

        this.state = {
            show: false,
            showQuickView: 'hidden',
            color: 1,
            selectedColor: '',
            selectedSize: 0,
            size: 0,
            colorSelected: false,
            sizeSelected: false,
            itemImg: this.props.img,
            imgOpacity: 1,
            renderFullView: false
        };
    }

    renderFullView(e) {
        if (e.target === e.currentTarget) {
            this.setState({ renderFullView: true })
        }
    }

    staticImg() {
        this.setState({ itemImg: this.props.img, showQuickView: 'hidden', imgOpacity: 1 });
    }

    hoverImg() {
        this.setState({ itemImg: this.props.hover1, showQuickView: 'visible', imgOpacity: 0.7 });
    }

    changeColor(colorId) {
        this.setState({ color: colorId, colorSelected: true });
    }

    changeSize(sizeValue) {
        this.setState({ size: sizeValue, sizeSelected: true });
    }

    handleClose() {
        this.setState({ show: false, color: 1 });
    }

    handleShow() {
        this.setState({ show: true });
    }

    addItem() {
        if (this.state.colorSelected && this.state.sizeSelected) {
            inCart.push(this.props.id);
            cartColors.push({ item: this.props.id, color: this.state.color, size: this.state.size });
            cartTotal += (this.props.price);
            this.setState({ show: false });
        } else if (!this.state.colorSelected && this.state.sizeSelected) {
            alert("Please select a color.");
        }
        else if (this.state.colorSelected && !this.state.sizeSelected) {
            alert("Please select a size.");
        }
        else {
            alert("Please select a size and color.");
        }
    }

    render() {
        {
            if (this.state.renderFullView) {
                return (<Redirect to={`/products/${this.props.id}`} />);
            }
        }
        return (
            <div className="item">
                <Card onMouseEnter={this.hoverImg} onMouseLeave={this.staticImg} style={{ minWidth: '18rem' }} className="PageItem-Card">
                    <Card.Img className="PageItem-Card-Img" variant="top" style={{ opacity: this.state.imgOpacity }} src={this.state.itemImg} />
                    <Card.ImgOverlay onClick={(e) => this.renderFullView(e)} className="PageItem-Card-Img-Overlay" style={{ visibility: this.state.showQuickView }}><Button id="PageItem-QuickView-Button" className="PageItem-QuickView-Button" onClick={this.handleShow}>Quick View</Button></Card.ImgOverlay>
                    <Card.Body className="PageItem-Card-Body">
                        <Card.Title className="PageItem-Title">{this.props.name}</Card.Title>
                        <Card.Text className="PageItem-Price">
                            ${this.props.price}
                        </Card.Text>
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
                                    if (color.colorId === this.state.color) {
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
                                <div className="PageItem-ColorSelected">
                                    {this.props.colors.map((color) => {
                                        if (color.colorId === this.state.color) {
                                            this.setState.selectedColor = color.colorName;
                                            return (
                                                <div>
                                                    <h5><strong>Color:</strong> {color.colorName}</h5>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="PageItem-ColorButton-Options">
                                    {this.props.colors.map((color) => {
                                        return (
                                            <div className="PageItem-ColorButton">
                                                <ColorButton
                                                    colorId={color.colorId}
                                                    colorName={color.colorName}
                                                    colorHex={color.colorHex}
                                                    colorImg={color.colorImg}
                                                    onClick={this.changeColor}
                                                />
                                            </div>)
                                    })}
                                </div>
                                <div className="PageItem-SizeSelected">
                                    {this.props.sizes.map((size) => {
                                        if (size.sizeValue === this.state.size) {
                                            return (
                                                <div>
                                                    <h5><strong>Size:</strong> {this.state.size}</h5>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div className="PageItem-SizeButton-Options">
                                    {this.props.sizes.map((size) => {
                                        return (
                                            <div className="PageItem-SizeButton">
                                                <SizeButton
                                                    sizeId={size.sizeId}
                                                    sizeValue={size.sizeValue}
                                                    onClick={this.changeSize}
                                                />
                                            </div>)
                                    })}
                                </div>
                            </Col>
                            <Col className="PageItem-Info">
                                <h5>Description</h5>
                                <p>{this.props.description}</p>
                                <br></br>
                                <h5>Price: ${this.props.price}</h5>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to={`/products/${this.props.id}`}><Button variant="secondary">See More</Button></Link>
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

export let cartColors = [];

export let cartTotal = 0;

export const updateTotal = function (total) {
    cartTotal = total;
}


export default PageItem;