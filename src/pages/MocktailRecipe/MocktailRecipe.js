import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import "./MocktailRecipe.css";

function MocktailRecipe() {
    const [mocktailRecipe, setMocktailRecipe] = useState([])
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);

            try {
                toggleError(false);

                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/lookup.php?i=${id}`);
                console.log(result.data.drinks);
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
                    <div key={oneMocktail.idDrink}>
                        <h1 className="h1-vervolg">{oneMocktail.strDrink}</h1>
                        <div className="content">
                            <aside className="text">
                                <table>
                                    <tbody>
                                        <tr><th>Ingrediënten</th></tr>
                                        <tr><td>{oneMocktail.strIngredient1}</td><td>{oneMocktail.git}</td></tr>
                                        <tr><td>{oneMocktail.strIngredient2}</td><td>{oneMocktail.strMeasure2}</td></tr>
                                        <tr><td>{oneMocktail.strIngredient3}</td><td>{oneMocktail.strMeasure3}</td></tr>
                                        <tr><td>{oneMocktail.strIngredient4}</td><td>{oneMocktail.strMeasure4}</td></tr>
                                        <tr><td>{oneMocktail.strIngredient5}</td><td>{oneMocktail.strMeasure5}</td></tr>
                                        <tr><td>{oneMocktail.strIngredient6}</td><td>{oneMocktail.strMeasure6}</td></tr>
                                        <tr><td>{oneMocktail.strIngredient7}</td><td>{oneMocktail.strMeasure7}</td></tr>
                                        <tr><td>{oneMocktail.strIngredient8}</td><td>{oneMocktail.strMeasure8}</td></tr>
                                        <tr><td>{oneMocktail.strIngredient9}</td><td>{oneMocktail.strMeasure9}</td></tr>
                                        <tr><td>{oneMocktail.strIngredient10}</td><td>{oneMocktail.strMeasure10}</td></tr>
                                        <tr><td>{oneMocktail.strIngredient11}</td><td>{oneMocktail.strMeasure11}</td></tr>
                                        <tr><td>{oneMocktail.strIngredient12}</td><td>{oneMocktail.strMeasure12}</td></tr>
                                        <tr><td>{oneMocktail.strIngredient13}</td><td>{oneMocktail.strMeasure13}</td></tr>
                                        <tr><td>{oneMocktail.strIngredient14}</td><td>{oneMocktail.strMeasure14}</td></tr>
                                        <tr><td>{oneMocktail.strIngredient15}</td><td>{oneMocktail.strMeasure15}</td></tr>
                                    </tbody>
                                </table>
                                <p>{oneMocktail.strInstructions}</p>
                                <button type="button" className="button-1" onClick={()=> navigate(-1)}>Ga terug</button>
                            </aside>
                            <aside className="one-mocktail-img">
                                <img src={oneMocktail.strDrinkThumb} alt="mocktail"/>
                            </aside>
                        </div>

                    </div>


                )
            })}
        </div>
    );
}

export default MocktailRecipe;