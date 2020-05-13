import React from 'react';
import { Carousel } from 'react-bootstrap';
import './PhotoSlider.css';


const PhotoSlider = (props) => (
    <div className="PhotoSlider">
        <Carousel>
            {props.img1 ?
                <Carousel.Item>
                    <img width={600} height={700}
                        className="d-block"
                        src={props.img1}
                        alt="First slide" />
                </Carousel.Item> : null
            }
            {props.img2 ?
                <Carousel.Item>
                    <img width={600} height={700}
                        className="d-block"
                        src={props.img2}
                        alt="Second slide" />
                </Carousel.Item> : null
            }
            {props.img3 ?
                <Carousel.Item>
                    <img width={600} height={700}
                        className="d-block"
                        src={props.img3}
                        alt="Third slide" />
                </Carousel.Item> : null
            }
            {props.img4 ?
                <Carousel.Item>
                    <img width={600} height={700}
                        className="d-block"
                        src={props.img4}
                        alt="Fourth slide" />
                </Carousel.Item> : null
            }
            {props.img5 ?
                <Carousel.Item>
                    <img width={600} height={700}
                        className="d-block"
                        src={props.img5}
                        alt="Fifth slide" />
                </Carousel.Item> : null
            }
        </Carousel>
    </div>
);

export default PhotoSlider;