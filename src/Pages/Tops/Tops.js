import React, { Component } from 'react';
import PageItem from '../PageItem/PageItem.js';
import Products from '../../productData.js';
import './Tops.css';
import Navbar from '../../Navbar/Navbar.js';
import Footer from '../../Footer/Footer.js';

class Tops extends Component {
    render() {
        return (
            <div className="Page">
                <Navbar />
                <h1>Tops</h1>
                <div className="Page-PageContent">
                    {Products.map((product) => {
                        if (product.category === "tops") {
                            return (
                                <div className="Page-PageItem">
                                    <PageItem
                                        id={product.id}
                                        name={product.name}
                                        img={product.img}
                                        purpose={product.purpose}
                                        desc_heading={product.desc_heading}
                                        description={product.description}
                                        fit={product.fit}
                                        material={product.material}
                                        care={product.care}
                                        price={product.price}
                                        hover1={product.hover1}
                                        hover2={product.hover2}
                                        hover3={product.hover3}
                                        hover4={product.hover4}
                                        colors={product.colors}
                                        sizes={product.sizes}
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

export default Tops;