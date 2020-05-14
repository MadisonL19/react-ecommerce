import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { inCart, cartColors, cartTotal, updateTotal } from '../PageItem/PageItem.js';
import { pageCartTotal, updateProductTotal } from '../ProductSpecific/ProductSpecific.js';
import CartItem from '../CartItem/CartItem.js';
import Products from '../../productData.js';
import Navbar from '../../Navbar/Navbar.js';
import Footer from '../../Footer/Footer.js';
import CartImg from '../../Images/SVG/cart2.svg';
import './Cart.css';


class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartList: inCart,
            finalTotal: (cartTotal + pageCartTotal),
            totalWithShip: (cartTotal + pageCartTotal) + 5
        }
    }

    removeItem(itemId, itemPrice) {
        var itemIndex = this.state.cartList.indexOf(itemId);
        var newList = inCart.splice(itemIndex, 1);
        var newTotal = (this.state.finalTotal - itemPrice);
        updateTotal(newTotal);
        updateProductTotal(newTotal);
        this.setState({ cartList: newList, finalTotal: newTotal, totalWithShip: newTotal + 5 });
    }

    render() {
        return (
            <div className="Page">
                <Navbar />
                <div className="Cart">
                    <img src={CartImg}></img>
                    <h3 id="Shopping-Bag-Title">Shopping Bag</h3>
                    <div className="Cart-Items">
                        {Products.map((product) => {
                            var productId = cartColors.find(item => item.item === product.id);
                            if (inCart.includes(product.id)) {
                                return (
                                    <Row className="Cart-CartItem">
                                        <div className="Cart-Container">
                                            <Col className="Cart-Col">
                                                <CartItem
                                                    id={product.id}
                                                    name={product.name}
                                                    img={product.img}
                                                    description={product.description}
                                                    price={product.price}
                                                />
                                                <div className="Cart-CartOptions">
                                                    <h6 id="Cart-CartItem-Title">{product.name}</h6>
                                                    {product.colors.map((color) => {
                                                        if (productId.color === color.colorId) {
                                                            return (
                                                                <div className="Cart-CartOptions-Detail">
                                                                    <p>Color: {color.colorName}</p>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                    {product.sizes.map((size) => {
                                                        if (productId.size === size.sizeId) {
                                                            return (
                                                                <div className="Cart-CartOptions-Detail">
                                                                    <p>Size: {size.sizeValue}</p>
                                                                </div>
                                                            )
                                                        }
                                                    })}
                                                </div>
                                            </Col>
                                            <Col className="Cart-Col-Price-Buttons">
                                                <p className="Cart-ProductPrice">${product.price}</p>
                                                <button className="Cart-Remove" onClick={() => this.removeItem(product.id, product.price)}>Remove</button>
                                            </Col>
                                        </div>
                                    </Row>
                                )
                            }
                        })}
                    </div>
                    <div className="Cart-Total">
                        <h4 id="Cart-Total-Title">Total</h4>
                        <div className="Item-Subtotal">
                            <h6 id="Item-Subtotal-Title">Item Subtotal:</h6>
                            <h6 id="Item-Subtotal">${
                                this.state.finalTotal < 0 ? "0.00" :
                                    this.state.finalTotal.toFixed(2)}</h6>
                        </div>
                        <div className="Shipping">
                            <h6 id="Estimated-Shipping-Title">Estimated Shipping:</h6>
                            <h6 id="Estimated-Shipping-Price">$5.00</h6>
                        </div>
                        <div className="Estimated-Total">
                            <h6 id="Estimated-Total-Title">Estimated Total:</h6>
                            <h6 id="Estimated-Total-Price">${
                                this.state.totalWithShip < 6 ? "0.00" :
                                    this.state.totalWithShip.toFixed(2)}</h6>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}


export default Cart;