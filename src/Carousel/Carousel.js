import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

const carousel = () => (
    <div className="Carousel">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.squarespace-cdn.com/content/v1/51748c6de4b05f51bd7644dd/1492191320711-J2VBGDTRNL960870W590/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/Lululemon%3A+Behind+the+Scenes+%7C+Joel+Bear+Blog"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Get Better Together</h3>
                    <p>Now streaming at-home workouts to keep you moving during quarantine.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Release Your Workout Fears</h3>
                    <p>Let us air them out with our new Luxtreme Fabric</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://medias.fashionnetwork.com/image/upload/v1/medias/f201640fb8e55b14e72ae3c368e6ffef1896220.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Always Keep it Moving</h3>
                    <p>Our best-selling Align Pant will keep you comfortable, all run long.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
);

export default carousel;