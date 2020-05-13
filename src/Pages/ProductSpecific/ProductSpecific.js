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
import ArrowBack from '@material-ui/icons/ArrowBack';
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

    changeSize(sizeValue) {
        this.setState({ size: sizeValue, sizeSelected: true });
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
                <div className="ProductSpecific-ReturnButton">
                    <h5><Link to="/tops"><ArrowBack style={{ fontSize: '30px', margin: '8px 10px 10px 10px' }} />Back to <span style={{ textTransform: 'capitalize' }}>{currentProduct.category}</span></Link></h5>
                </div>
                <div className="ProductSpecific-Item">
                    <div className="ProductSpecific-Page-Container">
                        <div className="ProductSpecific-Images-Options">
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
                            <div className="ProductSpecific-ColorSelected">
                                {currentProduct.colors.map((color) => {
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
                            <div className="ProductSpecific-SizeSelected">
                                {currentProduct.sizes.map((size) => {
                                    if (size.sizeValue === this.state.size) {
                                        return (
                                            <div>
                                                <h5><strong>Size:</strong> {this.state.size}</h5>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
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
                        </div>
                        <div className="ProductSpecific-Info">
                            <h1 id="currentProduct-name">{currentProduct.name}</h1>
                            <h3 id="currentProduct-purpose">{currentProduct.purpose}</h3>
                            <h5 id="currentProduct-descHeading">{currentProduct.desc_heading}</h5>
                            <p id="currentProduct-price">${currentProduct.price}</p>
                            <p id="currentProduct-desc">{currentProduct.description}</p>
                            <h6 id="currentProduct-fit">{currentProduct.fit}</h6>
                            <p id="currentProduct-material">{currentProduct.material}</p>
                            <h6 id="currentProduct-care-items">Product Care</h6>
                            <div className="ProductSpecific-Care">
                                {currentProduct.care.map((i) => {
                                    return (
                                        <div className="ProductSpecific-Care-Item">
                                            <p>{i}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <Button id="ProductSpecific-Cart-Button" variant="primary" onClick={(e) => this.addItem(currentProduct.id, currentProduct.price, e)}>
                                Add to Cart
                        </Button>
                        </div>
                    </div>
                </div>
                <div className="similar-products">
                    <div className="similar-products-container">
                        <h2>You may also like</h2>
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