import "./MocktailCard.css"
import React from 'react';
import {Link} from "react-router-dom";

const MocktailCard = ({imageSrc, imageAlt, mocktailName, mocktailLink}) => {

    // {console.log(mocktailLink)}
    return (
        <div className="mocktail-card">
            <Link to={mocktailLink} className="mocktail-card-link">
                <img src={imageSrc} alt={imageAlt} className="mocktail-card-image"/>
                <h4 className="mocktail-card-title">{mocktailName}</h4>
            </Link>
        </div>

    );
};

export default MocktailCard;