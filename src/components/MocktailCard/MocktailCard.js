import "./MocktailCard.css"
import React from 'react';
import {Link} from "react-router-dom";

const MocktailCard = ({imageSrc, imageAlt, mocktailName}) => {
    return (
        <div className="mocktail-card">
            <Link to="/mocktails/:id" className="mocktail-card-link">
                <img src={imageSrc} alt={imageAlt} className="mocktail-card-image"/>
                <h4 className="mocktail-card-title">{mocktailName}</h4>
            </Link>
        </div>

    );
};

export default MocktailCard;