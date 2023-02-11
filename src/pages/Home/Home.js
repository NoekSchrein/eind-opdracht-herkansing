import React from 'react';
import populairMocktails from "../../assets/summer-cocktails.jpg"
import winterMocktails from "../../assets/winter-mocktail-img.webp"
import Article from "../../components/Article/Article";


function Home() {
    return (
        <div className="outer-container">
            <main className="inner-container">
                <section className="articles-container">
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
                        buttonText="winterrecepten"
                        imageSrc={winterMocktails}
                        imageAlt="winter mocktails"/>

                    <article>
                        <p>Nieuwste mocktail recepten</p>
                        <div>
                            <img src="" alt=""/>
                            <h4>Rainbow Paradis</h4>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <h4>Galaxy Mocktail</h4>
                        </div>
                        <div>
                            <img src="" alt=""/>
                            <h4>the Duchess</h4>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default Home;