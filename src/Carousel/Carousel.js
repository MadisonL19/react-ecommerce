import React from 'react';
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
                    <button>Shop Now</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Save}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <button>Shop Now</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Ebb}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <button>Shop Now</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
);

export default carousel;