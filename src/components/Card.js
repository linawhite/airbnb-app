import React from 'react';

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    return (
        <div className='card'>
            <div className='card--background'>
                <img
                    src={props.img}
                    className='card--background-img'
                    alt='background of card'
                />
                <div className='card--background-status'>{props.status}</div>
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
                <p className='card--review-country'>{props.country}</p>
            </div>
            <h3 className='card--title'>{props.title}</h3>
            <p className='card--price'>
                <span>From {props.price} </span>/ {props.measure}
            </p>
        </div>
    );
}
