import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from '../../productData.js';
import './BottomsPageAlice.css';
import AliceItem from '../AliceItem/AliceItem.js';

class BottomsPageAlice extends React.Component {

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            variableWidth: true,
            adaptiveHeight: true
        };
        return (
            <div className='PageAlice'>
                <Slider {...settings}>
                    {Products.map((product) => {
                        if (product.category === "bottoms" && product.highlight === true) {
                            return (
                                <div className="gallery-item">
                                    <AliceItem
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
        );
    }
}


export default BottomsPageAlice;