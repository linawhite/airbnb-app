import React from 'react';

export default function Card(props) {
    let badgeText = '';
    const location = props.card.location.toLowerCase();
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (location === 'online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className='card'>
            <div className='card--background'>
                <img
                    src={`./images/${props.card.coverImg}`}
                    className='card--background-img'
                    alt='background of card'
                />

                {badgeText && (
                    <div className='card--background-status'>{badgeText}</div>
                )}
            </div>

            <div className='card--review'>
                <div className='card--review-stars'>
                    <img
                        src='./images/star.svg'
                        className='card--review-star'
                        alt='star'
                    />
                    <p className='card--review-stars-amount'>
                        {props.card.stats.rating}
                    </p>
                </div>
                <p className='card--review-amount'>
                    ({props.card.stats.reviewCount})
                </p>
                <p className='card--review-spliter'>.</p>
                <p className='card--review-country'>{props.card.location}</p>
            </div>
            <h3 className='card--title'>{props.card.title}</h3>
            <p className='card--price'>
                <span>From {props.card.price} </span>/ {props.card.measure}
            </p>
        </div>
    );
}
