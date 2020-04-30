import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { inCart, cartTotal } from '../PageItem/PageItem.js';
import CartItem from '../CartItem/CartItem.js';
import Products from '../../productData.js';
import Navbar from '../../Navbar/Navbar.js';
import Footer from '../../Footer/Footer.js';

console.log(inCart);

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartList: inCart,
            finalTotal: cartTotal.toFixed(2)
        }
    }

    removeItem(itemId, itemPrice) {
        var itemIndex = this.state.cartList.indexOf(itemId);
        var newList = inCart.splice(itemIndex, 1);
        var newTotal = (this.state.finalTotal - itemPrice).toFixed(2);
        this.setState({ cartList: newList, finalTotal: newTotal });
    }

    render() {
        return (
            <div className="Page">
                <Navbar />
                <div className="Cart">
                    <h1>Shopping Cart</h1>
                    <div className="Cart-Items">
                        {Products.map((product) => {
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
                                                <button onClick={() => this.removeItem(product.id, product.price)}>Remove</button>
                                            </div></Col>
                                    </Row>
                                )
                            }
                        })}
                    </div>
                    <div className="Cart-Total">
                        <h1>{this.state.finalTotal}</h1>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}


export default Cart;