import React, {useContext, useEffect, useState} from 'react';
import "./MocktailOverview.css"
import axios from "axios";
import Checkbox from "../../components/Checkbox/Checkbox";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

const apiKey = "9973533"

function MocktailOverview() {
    const [mocktailList, setMocktailList] = useState([])
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [filter, setFilter] = useState("")
    const navigate = useNavigate();
    const { isAuth } = useContext(AuthContext)


    function onChangeValue(event) {
        setFilter(event.target.value);
        console.log(event.target.value);
        if (event.target.value === "none") {
            setFilter("");
        }
        if (event.target.value === "zomer") {
            setFilter("Orange")
        }
        if (event.target.value === "winter") {
            setFilter("Chocolate")
        }
        if (event.target.value === "lente") {
            setFilter("Ginger")
        }
        if (event.target.value === "herfst") {
            setFilter("Amaretto")
        }
    }


    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);

            try {
                toggleError(false);

                if (filter) {
                    console.log(`de filter is ${filter}`);
                    if (filter === "classics") {
                        const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/popular.php`);
                        setMocktailList(result.data.drinks);
                    } else if (filter === "New") {
                        const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?f=a`);
                        const mocktails = result.data.drinks.sort((a, b) => {
                            return a.dateModified - b.dateModified
                        });
                        setMocktailList(mocktails);
                        console.log(mocktailList)
                    } else if (filter === "Simple") {
                        const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?f=a`);
                        const mocktails = result.data.drinks.sort((a, b) => {
                            return a.strInstructions.length - b.strInstructions.length
                        });
                        setMocktailList(mocktails);
                        console.log(mocktailList)
                    } else {
                        const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?i=${filter}`);
                        setMocktailList(result.data.drinks);
                    }


                    // const test = result.data.drinks.filter((item => {
                    //     let ingredient = false
                    //     for (const property in item) {
                    //         if (item[property] === filter) {
                    //             ingredient = true
                    //         }
                    //     }
                    //     return ingredient;
                    // }))

                    // console.log(test);
                    // console.log(mocktailList);
                    // console.log(mocktailList.strInstructions)

                } else {
                    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?f=a`);
                    console.log(result.data.drinks);
                    setMocktailList(result.data.drinks)
                }

            } catch (e) {
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        fetchData();
    }, [filter])

    return (
        <div className="inner-container">
            {loading && <span>
                Loading...
            </span>}
            {error && <span>
                Er is iets misgegaan met het ophalen van de data
            </span>}

            <h1 className="h1-vervolg">Mocktail Recepten</h1>
            <div className="mocktails-overview">
                <section>
                    {isAuth && <button type="button" onClick={() => navigate("/recept-toevoegen")} className="button-1">Recept toevoegen</button> }
                    <h4>Filters</h4>
                    <form onChange={onChangeValue} className="mocktail-filters-container">
                        <ul>
                            <li><Checkbox
                                value="none"
                                name="filter"
                                label=" None"
                            /></li>
                        </ul>
                        <p><strong>Seizoenen</strong></p>
                        <ul>
                            <li><Checkbox
                                value="winter"
                                name="filter"
                                label=" Winter Mocktails"
                            /></li>
                            <li><Checkbox
                                value="lente"
                                name="filter"
                                label=" Lente Mocktails"
                            /></li>
                            <li><Checkbox
                                value="zomer"
                                label=" Zomer Mocktails"
                            /></li>
                            <li><Checkbox
                                value="herfst"
                                label=" Herfst Mocktails"
                            /></li>
                        </ul>

                        <p><strong>Ingrediënten</strong></p>
                        <ul>
                            <li><Checkbox
                                value="Grenadine"
                                label=" Grenadine"
                            /></li>
                            <li><Checkbox
                                value="Mint"
                                label=" Munt"
                            /></li>
                            <li><Checkbox
                                value="Orange juice"
                                label=" Sinasappelsap"
                            /></li>
                            <li><Checkbox
                                value="Strawberries"
                                label=" Aardbei"
                            /></li>
                        </ul>
                        <p><strong>Meer categorieën</strong></p>
                        <ul>
                            <li><Checkbox
                                value="classics"
                                label=" The Classics"
                            /></li>
                            <li><Checkbox
                                value="Simple"
                                label=" Simple Mocktails"
                            /></li>
                            <li><Checkbox
                                value="New"
                                label=" Nieuwste Mocktails"
                            /></li>
                        </ul>
                    </form>
                </section>
                <section>
                    <div className="mocktail-card-container">
                        {mocktailList.map((oneMocktail) => {
                            return (
                                <div className="mocktail-card" key={oneMocktail.idDrink}>
                                    <Link to={`/mocktails/${oneMocktail.idDrink}`} className="mocktail-card-link">
                                        <img src={oneMocktail.strDrinkThumb} alt={oneMocktail.strDrink} className="mocktail-card-image"/>
                                        <h4 className="mocktail-card-title">{oneMocktail.strDrink}</h4>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MocktailOverview;