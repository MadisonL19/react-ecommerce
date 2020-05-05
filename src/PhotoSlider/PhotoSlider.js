import React from 'react';
import { Carousel } from 'react-bootstrap';
import './PhotoSlider.css';

const PhotoSlider = (props) => (
    <div className="PhotoSlider">
        <Carousel>
            <Carousel.Item>
                <img width={600} height={700}
                    className="d-block"
                    src={props.img1}
                    alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img width={600} height={700}
                    className="d-block"
                    src={props.img2}
                    alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img width={600} height={700}
                    className="d-block"
                    src={props.img3}
                    alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img width={600} height={700}
                    className="d-block"
                    src={props.img4}
                    alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img width={600} height={700}
                    className="d-block"
                    src={props.img5}
                    alt="First slide" />
            </Carousel.Item>
        </Carousel>
    </div>
);

export default PhotoSlider;