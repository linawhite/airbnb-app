import React from 'react';

export default function Card(props) {
    let badgeText = '';
    const location = props.location.toLowerCase();
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (location === 'online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className='card'>
            <div className='card--background'>
                <img
                    src={props.img}
                    className='card--background-img'
                    alt='background of card'
                />

                {badgeText.length >= 1 && (
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
                        {props.starsAmount}
                    </p>
                </div>
                <p className='card--review-amount'>({props.reviewsAmout})</p>
                <p className='card--review-spliter'>.</p>
                <p className='card--review-country'>{props.location}</p>
            </div>
            <h3 className='card--title'>{props.title}</h3>
            <p className='card--price'>
                <span>From {props.price} </span>/ {props.measure}
            </p>
        </div>
    );
}
