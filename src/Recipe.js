import React from 'react'
import "./recipeStyle.css"

const Recipe = ({ title, image, calories, ingredients }) => {
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text.replace(/(?:(?:http|ftp)s?:\/\/|www\.)[\n\S]+/ig, "")}.</li>
                ))}
            </ol>
            <img src={image} alt="" />
            <p><span>CALORIES: </span> {calories}</p>
        </div>
    )
}

export default Recipe
