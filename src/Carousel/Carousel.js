import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Luxtreme from '../Images/SVG/luxtreme.svg';
import Ebb from '../Images/SVG/ebb2.svg';
import Save from '../Images/SVG/save.svg';
import './Carousel.css';

const carousel = () => (
    <div className="Carousel">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Luxtreme}
                    alt="First slide" />
                <Carousel.Caption>
                    <Link to='products/7'><button class="carousel-button">Shop Now</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Save}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <Link to='tops'><button class="carousel-button">Shop Now</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Ebb}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <Link to='products/15'><button class="carousel-button">Shop Now</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
);

export default carousel;