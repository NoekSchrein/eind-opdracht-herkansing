import React, {useState} from 'react';
import axios from "axios";

const apiKey = "9973533"

function IngredientList() {
    const [ingredientList, setIngredientList] = useState([]);

    async function fetchData() {
        try {
            const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/list.php?i=list`);
            // console.log(result.data.drinks);
            setIngredientList(result.data.drinks);

        } catch (e) {
            console.error(e);
        }
    }

    fetchData();
}, [])

    return (
        <div>
            <ul>

            </ul>
        </div>
    );
}

export default IngredientList;