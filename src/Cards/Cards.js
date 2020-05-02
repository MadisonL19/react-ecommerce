import React, { Component } from 'react';
import './Cards.css';
import CardOne from '../Images/SVG/card1.svg';
import CardTwo from '../Images/SVG/cardtwo.svg';
import SingleCard from './SingleCard/SingleCard.js';

class Cards extends Component {
    static defaultProps = {
        list: [
            {
                id: 1,
                title: "Climb new heights.",
                description: "Bras designed with Luxtreme Fabric so you can hit peak.",
                img: CardOne,
                topRow: true,
                button: 'Shop Bras'
            },
            {
                id: 2,
                title: "Reach new destinations.",
                description: "Let our Nulu Fabric keep you moving.",
                img: CardTwo,
                topRow: true,
                button: 'Shop Tops'
            },
            {
                id: 3,
                title: "Four-way stretch when you need it most.",
                description: "",
                img: 'https://images.squarespace-cdn.com/content/v1/5b5df0ddf8370a6f376ce373/1540049412129-Z719OOPUQFBRKJOF10HS/ke17ZwdGBToddI8pDm48kM_CwjWwCtG9UHjy9x9uViZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw7xHZ0WvPQE2Vx6oS9Srq5be3SpuLRwhm3PhMjARSUF_OT6P6eL_aTentgQzyUuZM/gbl_feb18_Align_W_0_8_right.jpeg',
                button: "Shop Leggings",
                topRow: false,
                button: 'Shop Bottoms'
            }
        ]
    }
    render() {
        const topCards =
            this.props.list.map(item => {
                if (item.topRow === true) {
                    return <SingleCard key={item.id} title={item.title} img={item.img} description={item.description} button={item.button} />
                }
            })
        const bottomCards =
            this.props.list.map(item => {
                if (item.topRow === false) {
                    return <SingleCard key={item.id} title={item.title} img={item.img} description={item.description} button={item.button} />
                }
            })
        return (
            <div className="cards-gallery">
                <div className="container">
                    <div className="cards-top">
                        {topCards}
                    </div>
                    <div className="card-bottom">
                        {bottomCards}
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;