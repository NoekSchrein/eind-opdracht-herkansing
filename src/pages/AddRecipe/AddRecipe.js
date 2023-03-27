import React, {useState} from 'react';
import "./AddRecipe.css";
import {useNavigate} from "react-router-dom";

function AddRecipe() {
    const [strDrink, setStrDrink] = useState("");
    const [strIngredient1, setStrIngredient1] = useState("");
    const [strIngredient2, setStrIngredient2] = useState("");
    const [strIngredient3, setStrIngredient3] = useState("");
    const [strIngredient4, setStrIngredient4] = useState("");
    const [strIngredient5, setStrIngredient5] = useState("");
    const [strIngredient6, setStrIngredient6] = useState("");
    const [strIngredient7, setStrIngredient7] = useState("");
    const [strIngredient8, setStrIngredient8] = useState("");
    const [strIngredient9, setStrIngredient9] = useState("");
    const [strIngredient10, setStrIngredient10] = useState("");
    const [strIngredient11, setStrIngredient11] = useState("");
    const [strIngredient12, setStrIngredient12] = useState("");
    const [strIngredient13, setStrIngredient13] = useState("");
    const [strIngredient14, setStrIngredient14] = useState("");
    const [strIngredient15, setStrIngredient15] = useState("");
    const [strMeasure1, setStrMeasure1] = useState("");
    const [strMeasure2, setStrMeasure2] = useState("");
    const [strMeasure3, setStrMeasure3] = useState("");
    const [strMeasure4, setStrMeasure4] = useState("");
    const [strMeasure5, setStrMeasure5] = useState("");
    const [strMeasure6, setStrMeasure6] = useState("");
    const [strMeasure7, setStrMeasure7] = useState("");
    const [strMeasure8, setStrMeasure8] = useState("");
    const [strMeasure9, setStrMeasure9] = useState("");
    const [strMeasure10, setStrMeasure10] = useState("");
    const [strMeasure11, setStrMeasure11] = useState("");
    const [strMeasure12, setStrMeasure12] = useState("");
    const [strMeasure13, setStrMeasure13] = useState("");
    const [strMeasure14, setStrMeasure14] = useState("");
    const [strMeasure15, setStrMeasure15] = useState("");
    const [strInstructions, setStrInstructions] = useState("");
    const navigate = useNavigate();


    function handleSubmit() {
        navigate("/mocktails")
    }

    return (
        <div className="inner-container">
            <h1 className="h1-vervolg">Een nieuw recept toevoegen</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Mocktailnaam:
                        <input
                            type="text"
                            name="name"
                            required
                            value={strDrink}
                            onChange={(e) => setStrDrink(e.target.value)}
                        /></label>
                </div>
                <div className="input-container row">
                    <label className="ingredients">Ingrediënten:
                        <input type="text" name="ingredient1" value={strIngredient1}
                               onChange={(e) => setStrIngredient1(e.target.value)}/>
                        <input type="text" name="ingredient2" value={strIngredient2}
                               onChange={(e) => setStrIngredient2(e.target.value)}/>
                        <input type="text" name="ingredient3" value={strIngredient3}
                               onChange={(e) => setStrIngredient3(e.target.value)}/>
                        <input type="text" name="ingredient4" value={strIngredient4}
                               onChange={(e) => setStrIngredient4(e.target.value)}/>
                        <input type="text" name="ingredient5" value={strIngredient5}
                               onChange={(e) => setStrIngredient5(e.target.value)}/>
                        <input type="text" name="ingredient6" value={strIngredient6}
                               onChange={(e) => setStrIngredient6(e.target.value)}/>
                        <input type="text" name="ingredient7" value={strIngredient7}
                               onChange={(e) => setStrIngredient7(e.target.value)}/>
                        <input type="text" name="ingredient8" value={strIngredient8}
                               onChange={(e) => setStrIngredient8(e.target.value)}/>
                        <input type="text" name="ingredient9" value={strIngredient9}
                               onChange={(e) => setStrIngredient9(e.target.value)}/>
                        <input type="text" name="ingredient10" value={strIngredient10}
                               onChange={(e) => setStrIngredient10(e.target.value)}/>
                        <input type="text" name="ingredient11" value={strIngredient11}
                               onChange={(e) => setStrIngredient11(e.target.value)}/>
                        <input type="text" name="ingredient12" value={strIngredient12}
                               onChange={(e) => setStrIngredient12(e.target.value)}/>
                        <input type="text" name="ingredient13" value={strIngredient13}
                               onChange={(e) => setStrIngredient13(e.target.value)}/>
                        <input type="text" name="ingredient14" value={strIngredient14}
                               onChange={(e) => setStrIngredient14(e.target.value)}/>
                        <input type="text" name="ingredient15" value={strIngredient15}
                               onChange={(e) => setStrIngredient15(e.target.value)}/>
                    </label>
                    <label className="measurements">Hoeveelheden:
                        <input type="text" name="measure1" value={strMeasure1}
                               onChange={(e) => setStrMeasure1(e.target.value)}/>
                        <input type="text" name="measure2" value={strMeasure2}
                               onChange={(e) => setStrMeasure2(e.target.value)}/>
                        <input type="text" name="measure3" value={strMeasure3}
                               onChange={(e) => setStrMeasure3(e.target.value)}/>
                        <input type="text" name="measure4" value={strMeasure4}
                               onChange={(e) => setStrMeasure4(e.target.value)}/>
                        <input type="text" name="measure5" value={strMeasure5}
                               onChange={(e) => setStrMeasure5(e.target.value)}/>
                        <input type="text" name="measure6" value={strMeasure6}
                               onChange={(e) => setStrMeasure6(e.target.value)}/>
                        <input type="text" name="measure7" value={strMeasure7}
                               onChange={(e) => setStrMeasure7(e.target.value)}/>
                        <input type="text" name="measure8" value={strMeasure8}
                               onChange={(e) => setStrMeasure8(e.target.value)}/>
                        <input type="text" name="measure9" value={strMeasure9}
                               onChange={(e) => setStrMeasure9(e.target.value)}/>
                        <input type="text" name="measure10" value={strMeasure10}
                               onChange={(e) => setStrMeasure10(e.target.value)}/>
                        <input type="text" name="measure11" value={strMeasure11}
                               onChange={(e) => setStrMeasure11(e.target.value)}/>
                        <input type="text" name="measure12" value={strMeasure12}
                               onChange={(e) => setStrMeasure12(e.target.value)}/>
                        <input type="text" name="measure13" value={strMeasure13}
                               onChange={(e) => setStrMeasure13(e.target.value)}/>
                        <input type="text" name="measure14" value={strMeasure14}
                               onChange={(e) => setStrMeasure14(e.target.value)}/>
                        <input type="text" name="measure15" value={strMeasure15}
                               onChange={(e) => setStrMeasure15(e.target.value)}/>
                    </label>
                </div>
                <div className="input-container">
                    <label>Bereidingswijze:
                        <textarea
                            name="instructions"
                            required
                            value={strInstructions}
                            onChange={(e) => setStrInstructions(e.target.value)}
                            rows="4" cols="50"
                        /></label>
                </div>
                <button type="submit" className="button-1">Verzenden</button>
            </form>
        </div>
    );
}

export default AddRecipe;