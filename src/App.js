import './App.scss';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Card from './components/Card';
import data from './data';

function App() {
    const cards = data.map((card) => {
        return (
            <Card
                key={card.id}
                title={card.title}
                price={card.price}
                img={`./images/${card.coverImg}`}
                starsAmount={card.stats.rating}
                reviewsAmount={card.stats.reviewCount}
                location={card.location}
                measure={card.measure}
                openSpots={card.openSpots}
            />
        );
    });

    return (
        <div>
            <Header />
            <Main />
            <section className='cards-container'>{cards}</section>
        </div>
    );
}

export default App;
