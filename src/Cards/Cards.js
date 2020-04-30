import React, { Component } from 'react';
import './Cards.css';
import SingleCard from './SingleCard/SingleCard.js';

class Cards extends Component {
    static defaultProps = {
        list: [
            {
                id: 1,
                title: "Climb new heights.",
                description: "Bras designed with Luxtreme Fabric so you can hit peak.",
                img: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=931&q=80',
                topRow: true,
                button: 'Shop Bras'
            },
            {
                id: 2,
                title: "Reach new destinations.",
                description: "Let our Nulu Fabric keep you moving.",
                img: 'https://images.unsplash.com/photo-1539182972012-585804f77548?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
                topRow: true,
                button: 'Shop Tops'
            },
            {
                id: 3,
                title: "Four-way stretch when you need it most.",
                description: "",
                img: 'https://images.businessoffashion.com/site/uploads/2017/10/Naked-lululemon.jpg?auto=format%2Ccompress&crop=faces%2Centropy&fit=crop&max-h=512&w=1024',
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