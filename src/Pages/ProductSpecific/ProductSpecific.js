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
            size: 0
        };
    }
    changeColor(colorId) {
        this.setState({ color: colorId });
    }

    changeSize(sizeId) {
        this.setState({ size: sizeId });
    }

    addItem(id, price) {
        inCart.push(id);
        cartColors.push({ item: id, color: this.state.color, size: this.state.size });
        pageCartTotal += price;
        this.setState({ show: false });
    }

    render() {
        const product = find(Products, ['id', parseInt(this.props.match.params.id)]);
        const currentProduct = product;
        return (
            <div className="ProductSpecific-Page">
                <Navbar />
                <Link to="/tops">Back to Tops</Link>
                <div className="ProductSpecific-Item">
                    <Row>
                        <Col>
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
                        <Col>
                            <h1>{currentProduct.name}</h1>
                            <h3>{currentProduct.purpose}</h3>
                            <h5>{currentProduct.desc_heading}</h5>
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
                        {Products.map((product) => {
                            if (
                                product.gender === currentProduct.gender
                                && product.type === currentProduct.type
                                && product.name !== currentProduct.name) {
                                return (
                                    <Link to={`/products/${product.id}`}>
                                        <div key={product.id} className="similar-product-item">
                                            <Link to={`/products/${product.id}`}>
                                                <div className="similar-product-img">
                                                    <img alt={product.name} src={product.img} />
                                                </div>
                                                <div className="product-details">
                                                    <h1 id="product-name">{product.name}</h1>
                                                </div>
                                            </Link>
                                            <div className="price-add">
                                                <h5 id="product-price">${product.price}</h5>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        })}
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
