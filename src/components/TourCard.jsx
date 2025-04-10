import React, { useState } from 'react';

// TourCard component to display individual tour details.

const TourCard = ({ id, image, info, price, name, removeTour }) => {
    const [readMore, setReadMore] = useState(false);

// Render the tour card with details and a button to toggle read more.

    return (
        <article className="tour-card">
            <img src={image} alt={name} className ="tour-image" />
            <div className="tour-info">
                <div className="tour-header"></div>
                <h2>{name}</h2>
                <h3>${price}</h3>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Show Less' : 'Read More'}
                    </button>
                </p>
                <button className="btn" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
            </div>
        </article>
    );
};

export default TourCard;