import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const apiKey = "9973533"

function MocktailRecipe() {
    const [mocktailRecipe, setMocktailRecipe] = useState([])
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const {id} = useParams()

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);

            try {
                toggleError(false);

                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/lookup.php?i=${id}`);
                console.log(result.data.drinks);
                // const mocktailList = result.data.drinks.filter((oneMocktail) => {
                //     return oneMocktail.strAlcoholic.includes("Non alcoholic");
                // });
                // console.log(mocktailList);
                setMocktailRecipe(result.data.drinks);

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        if (id) {
            fetchData();
        }

    }, [])
    return (
        <div className="inner-container">
            {loading && <span>
                Loading...
            </span>}
            {error && <span>
                Er is iets misgegaan met het ophalen van de data
            </span>}
            {mocktailRecipe.map((oneMocktail) => {
                return (
                    <h1 className="h1-vervolg">{oneMocktail.strDrink}</h1>

                )
            })}
        </div>
    );
}

export default MocktailRecipe;