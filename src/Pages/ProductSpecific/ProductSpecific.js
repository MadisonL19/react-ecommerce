import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import find from 'lodash/find';
import { Link } from 'react-router-dom';
import { inCart, cartColors } from '../PageItem/PageItem.js';
import Products from '../../productData.js';
import Navbar from '../../Navbar/Navbar.js';
import Footer from '../../Footer/Footer.js';
import PhotoSlider from '../../PhotoSlider/PhotoSlider.js';
import ColorButton from '../../ColorButton/ColorButton.js';
import SizeButton from '../../SizeButton/SizeButton.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AliceItem from '../../Alice/AliceItem/AliceItem.js';
import './ProductSpecific.css';


class ProductSpecific extends Component {
    constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.state = {
            show: false,
            color: 1,
            selectedColor: '',
            size: 0,
            colorSelected: false,
            sizeSelected: false
        };
    }
    changeColor(colorId) {
        this.setState({ color: colorId, colorSelected: true });
    }

    changeSize(sizeId) {
        this.setState({ size: sizeId, sizeSelected: true });
    }

    addItem(id, price) {
        if (this.state.colorSelected && this.state.sizeSelected) {
            inCart.push(id);
            cartColors.push({ item: id, color: this.state.color, size: this.state.size });
            pageCartTotal += price;
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
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            adaptiveHeight: true
        };
        var i = 0;
        const product = find(Products, ['id', parseInt(this.props.match.params.id)]);
        const currentProduct = product;
        return (
            <div className="ProductSpecific-Page">
                <Navbar />
                <Link to="/tops">Back to <span style={{ textTransform: 'capitalize' }}>{currentProduct.category}</span></Link>
                <div className="ProductSpecific-Item">
                    <div className="ProductSpecific-container">
                        <Row>
                            <Col className="ProductSpecific-Images-Options">
                                {currentProduct.colors.map((color) => {
                                    if (color.colorId === this.state.color) {
                                        return (
                                            <div>
                                                <PhotoSlider className="ProductSpecific-PhotoSlider"
                                                    img1={color.img1}
                                                    img2={color.img2}
                                                    img3={color.img3}
                                                    img4={color.img4}
                                                    img5={color.img5} />
                                            </div>
                                        )
                                    }
                                })}
                                <div className="ProductSpecific-ColorButton-Options">
                                    {currentProduct.colors.map((color) => {
                                        return (
                                            <div className="ProductSpecific-ColorButton">
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
                                {currentProduct.colors.map((color) => {
                                    if (color.colorId === this.state.color) {
                                        this.setState.selectedColor = color.colorName;
                                        return (
                                            <div>
                                                <p>{color.colorName}</p>
                                            </div>
                                        )
                                    }
                                })}
                                <div className="ProductSpecific-SizeButton-Options">
                                    {currentProduct.sizes.map((size) => {
                                        return (
                                            <div className="ProductSpecific-SizeButton">
                                                <SizeButton
                                                    sizeId={size.sizeId}
                                                    sizeValue={size.sizeValue}
                                                    onClick={this.changeSize}
                                                />
                                            </div>)
                                    })}
                                </div>
                            </Col>
                            <Col className="ProductSpecific-Info">
                                <h1>{currentProduct.name}</h1>
                                <h3>{currentProduct.purpose}</h3>
                                <h5>{currentProduct.desc_heading}</h5>
                                <p>${currentProduct.price}</p>
                                <p>{currentProduct.description}</p>
                                <p>{currentProduct.fit}</p>
                                <p>{currentProduct.material}</p>
                                <div className="ProductSpecific-Care">
                                    {currentProduct.care.map((i) => {
                                        return (
                                            <div className="ProductSpecific-Care-Item">
                                                <p>{i}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <Button variant="primary" onClick={(e) => this.addItem(currentProduct.id, currentProduct.price, e)}>
                                    Add to Cart
                        </Button>
                            </Col>
                        </Row>
                    </div>
                    <div className="similar-products">
                        <h5>You might also like</h5>
                        <div className="similar-products-options">
                            <Slider {...settings}>
                                {Products.map((product) => {
                                    if (product.category === currentProduct.category && product.type === currentProduct.type && product.name !== currentProduct.name && i < 3) {
                                        i++;
                                        return (
                                            <div className="gallery-item">
                                                <AliceItem
                                                    id={product.id}
                                                    name={product.name}
                                                    img={product.img}
                                                    price={product.price}
                                                    category={product.category}
                                                />
                                            </div>)
                                    }
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export let pageCartTotal = 0;

export const updateProductTotal = function (total) {
    pageCartTotal = total;
}

export default ProductSpecific;