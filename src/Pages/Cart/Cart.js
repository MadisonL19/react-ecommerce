import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { inCart, cartColors, cartTotal, updateTotal } from '../PageItem/PageItem.js';
import { pageCartTotal, updateProductTotal } from '../ProductSpecific/ProductSpecific.js';
import CartItem from '../CartItem/CartItem.js';
import Products from '../../productData.js';
import Navbar from '../../Navbar/Navbar.js';
import Footer from '../../Footer/Footer.js';
import CartImg from '../../Images/SVG/cart2.svg';


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartList: inCart,
            finalTotal: (cartTotal + pageCartTotal)
        }
    }

    removeItem(itemId, itemPrice) {
        var itemIndex = this.state.cartList.indexOf(itemId);
        var newList = inCart.splice(itemIndex, 1);
        var newTotal = (this.state.finalTotal - itemPrice);
        updateTotal(newTotal);
        updateProductTotal(newTotal);
        this.setState({ cartList: newList, finalTotal: newTotal });
    }

    render() {
        return (
            <div className="Page">
                <Navbar />
                <div className="Cart">
                    <img src={CartImg}></img>
                    <h1>Shopping Cart</h1>
                    <div className="Cart-Items">
                        {Products.map((product) => {
                            var productId = cartColors.find(item => item.item === product.id);
                            if (inCart.includes(product.id)) {
                                return (
                                    <Row middle="xs" className="Cart-CartItem">
                                        <Col xs={6}>
                                            <CartItem
                                                id={product.id}
                                                name={product.name}
                                                img={product.img}
                                                description={product.description}
                                                price={product.price}
                                            /></Col>
                                        <Col xs={6}>
                                            <div className="Cart-CartOptions">
                                                {product.colors.map((color) => {
                                                    if (productId.color === color.colorId) {
                                                        return (
                                                            <div>
                                                                <p>{color.colorName}</p>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                                {product.sizes.map((size) => {
                                                    if (productId.size === size.sizeId) {
                                                        return (
                                                            <div>
                                                                <p>{size.sizeValue}</p>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                                <button onClick={() => this.removeItem(product.id, product.price)}>Remove</button>
                                            </div></Col>
                                    </Row>
                                )
                            }
                        })}
                    </div>
                    <div className="Cart-Total">
                        <h1>{
                            this.state.finalTotal < 0 ? "0.00" :
                                this.state.finalTotal.toFixed(2)}</h1>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


export default Cart;