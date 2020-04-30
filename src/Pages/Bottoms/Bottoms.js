import React, { Component } from 'react';
import PageItem from '../PageItem/PageItem.js';
import Products from '../../productData.js';
import './Bottoms.css';
import Navbar from '../../Navbar/Navbar.js';
import Footer from '../../Footer/Footer.js';

class Bottoms extends Component {
    render() {
        return (
            <div className="Page">
                <Navbar />
                <h1>Bottoms</h1>
                <div className="Page-PageContent">
                    {Products.map((product) => {
                        if (product.category === "bottoms") {
                            return (
                                <div className="Page-PageItem">
                                    <PageItem
                                        id={product.id}
                                        name={product.name}
                                        img={product.img}
                                        description={product.description}
                                        price={product.price}
                                    />
                                </div>
                            )
                        }
                    })}
                </div>
                <Footer />
            </div >
        )
    }
}

export default Bottoms;