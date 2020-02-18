import React from 'react'
import Zutat from "./Zutat"

export default function Zutatenliste(props) {
    return (
        <div>
            {props.ingredients.map(ingredient =>{
                return(
                    <Zutat deleteIngredient = {props.deleteIngredients} ingredient={ingredient}/>
                )
            })}
        </div>
    )
}
