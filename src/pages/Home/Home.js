import React, {useEffect, useState} from 'react';
import "./Home.css";
import populairMocktails from "../../assets/summer-cocktails.jpg"
import winterMocktails from "../../assets/winter-mocktail-img.webp"
import Article from "../../components/Article/Article";
import MocktailCard from "../../components/MocktailCard/MocktailCard";
import Button from "../../components/Button/Button";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const apiKey = "9973533"


function Home() {
    const [mocktailRecipes, setMocktailRecipes] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);

            try {
                toggleError(false);

                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?f=a`);
                // console.log(result.data.drinks);
                const mocktailList = result.data.drinks.filter((oneMocktail) => {
                    return oneMocktail.strAlcoholic.includes("Non alcoholic");
                    });
                console.log(mocktailList);
                setMocktailRecipes(mocktailList);

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        fetchData();
    }, [])
    return (
        <div className="inner-container">
            {loading && <span>
                Loading...
            </span>}
            {error && <span>
                Er is iets misgegaan met het ophalen van de data
            </span>}


            <main className="inner-container">
                    <Article
                        className="uneven-article"
                        articleTitle="De populairste mocktails"
                        articleText="Bekijk hier wat op dit moment de populairste mocktails zijn"
                        buttonText="recepten"
                        imageSrc={populairMocktails}
                        imageAlt="populaire mocktails"
                    />
                    <Article
                        className="even-article"
                        articleTitle="De winter mocktails zijn er weer!"
                        articleText="Bekijk de lekkerste mocktails voor in de winter"
                        buttonText="winter recepten"
                        imageSrc={winterMocktails}
                        imageAlt="winter mocktails"

                    />


                    <h3 className="bottom-section-header">Nieuwste mocktail recepten</h3>
                    <section className="bottom-section">
                        <div className="bottom-section-cards">
                            {mocktailRecipes.slice(0, 3).map((oneRecipe) => {
                                return (
                                    <MocktailCard
                                        imageSrc={oneRecipe.strDrinkThumb}
                                        imageAlt={oneRecipe.strDrink}
                                        mocktailName={oneRecipe.strDrink}
                                        mocktailLink={`/mocktails/${mocktailRecipes.idDrink}`}
                                        key={oneRecipe.idDrink}
                                    />
                                )
                            })}
                        </div>
                        <Button
                            title="alle recepten"
                            clickHandler={(() => navigate("/mocktails"))}
                        />
                    </section>
            </main>
        </div>
    );
}

export default Home;
