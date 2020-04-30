import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components

import Navbar from './Navbar/Navbar.js';
import Carousel from './Carousel/Carousel.js';
import TopsPageAlice from './Alice/PageAlice/TopsPageAlice.js';
import BottomsPageAlice from './Alice/PageAlice/BottomsPageAlice.js';
import Cards from './Cards/Cards.js';
import SingleCard from './Cards/SingleCard/SingleCard.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Carousel />
      </header>
      <div className="body-content">
        <div className="App-PageAlice">
          <div className="container-alice">
            <TopsPageAlice />
          </div>
        </div>
        <div className="App-CardGallery">
          <Cards />
        </div>
        <div className="App-PageAlice">
          <div className="container-alice">
            <BottomsPageAlice />
          </div>
        </div>
        <div className="App-SingleCard">
          <div className="container">
            <SingleCard
            />
          </div>
        </div>
        <div className="App-Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
