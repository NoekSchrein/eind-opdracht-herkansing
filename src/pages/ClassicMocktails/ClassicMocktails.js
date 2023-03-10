import React, {useEffect, useState} from 'react';
import axios from "axios";
import MocktailCard from "../../components/MocktailCard/MocktailCard";
import "./ClassicMocktails.css"

const apiKey = "9973533"

function ClassicMocktails() {
    const [classicsList, setClassicsList] = useState([])
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);

            try {
                toggleError(false);

                const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/popular.php`);
                console.log(result.data.drinks);
                // const classicslist = result.data.drinks.filter((oneMocktail) => {
                //     return oneMocktail.strAlcoholic.includes("Non alcoholic");
                // });
                // console.log(mocktailList);
                setClassicsList(result.data.drinks);

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

            <main>
                <h2 className="classics-title">The Classics</h2>
                <div className="mocktail-card-container">
                    {classicsList.map((oneMocktail) => {
                        return (
                            <MocktailCard
                                imageSrc={oneMocktail.strDrinkThumb}
                                imageAlt={oneMocktail.strDrink}
                                mocktailName={oneMocktail.strDrink}
                                key={oneMocktail.idDrink}
                                // mocktailLink={`/mocktails/${oneMocktail.idDrink}`}
                            />
                        )
                    })}
                </div>
            </main>
        </div>
    );
}

export default ClassicMocktails;

/*



    */