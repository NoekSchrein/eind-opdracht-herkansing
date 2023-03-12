import React from 'react';
import Button from "../Button/Button";
import "./Article.css";
import "../Button/Button.css";
import {useNavigate} from "react-router-dom";

const Article = ({className, articleTitle, articleText, buttonText, imageSrc, imageAlt }) => {
    const navigate = useNavigate();

    return (
        <article className= {className}>
            <div className="article-text">
                <h4>
                    {articleTitle}
                </h4>
                <p>
                    {articleText}
                </p>
                <Button
                    title={buttonText}
                    clickHandler={(() => navigate("/mocktails"))}
                />
            </div>
            <img src={imageSrc} alt={imageAlt} className="article-img"/>
        </article>
    );
};

export default Article;