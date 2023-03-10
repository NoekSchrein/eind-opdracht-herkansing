// import React, {useEffect, useState} from 'react';
// import "./MocktailOverview.css"
// import axios from "axios";
// import MocktailCard from "../../components/MocktailCard/MocktailCard";
// import Checkbox from "../../components/Checkbox/Checkbox";
//
// const apiKey = "9973533"
//
// function MocktailOverview() {
//     const [mocktailList, setMocktailList] = useState([])
//     const [error, toggleError] = useState(false);
//     const [loading, toggleLoading] = useState(false);
//     const [filter, setFilter] = useState("")
//
//     function onChangeValue(event) {
//         setFilter(event.target.value);
//         console.log(event.target.value);
//         if (event.target.value === "none") {
//             setFilter("");
//         }
//     }
//
//     useEffect(() => {
//         async function fetchData() {
//             toggleLoading(true);
//
//             try {
//                 toggleError(false);
//
//                 const result = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?f=a`);
//                 console.log(result.data.drinks);
//                 setMocktailList(result.data.drinks)
//
//             } catch (e) {
//                 console.error(e);
//                 toggleError(true);
//             }
//             toggleLoading(false);
//         }
//
//         fetchData();
//     }, [filter])
//
//     return (
//         <div className="inner-container">
//             {loading && <span>
//                 Loading...
//             </span>}
//             {error && <span>
//                 Er is iets misgegaan met het ophalen van de data
//             </span>}
//
//             <h2>Mocktail Recepten</h2>
//             <div className="mocktails-overview">
//                 <section>
//                     <h4>Filters</h4>
//                     <form onChange={onChangeValue} className="mocktail-card-container">
//                         <ul>
//                             <li><Checkbox
//                                 value="none"
//                                 name="filter"
//                                 label=" None"
//                                 onChange={(() => setFilter(""))}
//                             /></li>
//                         </ul>
//                         <p><strong>Seizoenen</strong></p>
//                         <ul>
//                             <li><Checkbox
//                                 value="winter"
//                                 name="filter"
//                                 label=" Winter Mocktails"
//                                 onChange={(() => setFilter("winter"))}
//                             /></li>
//                             <li><Checkbox
//                                 value="lente"
//                                 name="filter"
//                                 label=" Lente Mocktails"
//                                 onChange={(() => setFilter("lente"))}
//                             /></li>
//                             <li><Checkbox
//                                 value="zomer"
//                                 label=" Zomer Mocktails"
//                                 onChange={(() => setFilter("zomer"))}
//                             /></li>
//                             <li><Checkbox
//                                 value="herfst"
//                                 label=" Herfst Mocktails"
//                                 onChange={(() => setFilter("herfst"))}
//                             /></li>
//                         </ul>
//                     </form>
//                     <form onChange={onChangeValue}>
//                         <p><strong>Ingrediënten</strong></p>
//                         <ul>
//                             <li><Checkbox
//                                 value="Grenadine"
//                                 label=" Grenadine"
//                                 onChange={(() => setFilter("Grenadine"))}
//                             /></li>
//                             <li><Checkbox
//                                 value="Mint"
//                                 label=" Munt"
//                                 onChange={(() => setFilter("Mint"))}
//                             /></li>
//                             <li><Checkbox
//                                 value="Orange juice"
//                                 label=" Sinasappelsap"
//                                 onChange={(() => setFilter("Orange juice"))}
//                             /></li>
//                             <li><Checkbox
//                                 value="Strawberry"
//                                 label=" Aardbei"
//                                 onChange={(() => setFilter("Strawberry"))}
//                             /></li>
//                         </ul>
//                     </form>
//                     <div>
//                         <p><strong>Meer categorieën</strong></p>
//                         <ul>
//                             <li>Alle Mocktails</li>
//                             <li>The Classics</li>
//                             <li>Simpele Mocktails</li>
//                             <li>Populairste Mocktails</li>
//                         </ul>
//                     </div>
//                 </section>
//                 <section>
//                     <div className="mocktail-card-container">
//                         {mocktailList.map((oneMocktail) => {
//                             return (
//                                 <MocktailCard
//                                     imageSrc={oneMocktail.strDrinkThumb}
//                                     imageAlt={oneMocktail.strDrink}
//                                     mocktailName={oneMocktail.strDrink}
//                                     key={oneMocktail.idDrink}
//                                     // mocktailLink={`/mocktails/${oneMocktail.idDrink}`}
//                                 />
//                             )
//                         })}
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// }
//
// export default MocktailOverview;