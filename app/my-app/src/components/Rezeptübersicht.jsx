import React, { Component } from 'react'
import axios from "axios"

export default class Rezeptübersicht extends Component {

    constructor(props){
        super(props);
        this.state ={
            download : [],
            recipes : [],
            matched : false
        }
    }

    componentDidMount(){
        this.getDatabaseUpdate()
    }

    getDatabaseUpdate(){
        axios.get("https://dhbwws20.firebaseio.com/recipes.json").then(
        response =>   {
            const fetchedOrders = [];
            for (let key in response.data){
                fetchedOrders.push({
                    ...response.data[key], 
                    id : key
                })
            this.state.download = fetchedOrders
            }
            this.setRecipes()
    })}

    setRecipes(){
        this.state.download.map(recipe => {
            const ingredients = recipe.ingredients.split(",")
            const recipename = recipe.name
            var newelement = {}
            newelement[recipename] = ingredients
            this.state.recipes.push(newelement)
        })
        this.checkMatchingRateIngRec()
    }

    checkMatchingRateIngRec(){
        this.state.recipes.forEach( recipe => {
            var ret = []
            var matchingRate = 0
            for(var i in recipe) {
                for(var ingredients in recipe[i]){
                    if(this.props.ingredients.indexOf(recipe[i][ingredients]) > -1){
                        ret.push(recipe[i][ingredients]);
                    }
                }
            matchingRate = ret.length / recipe[i].length
            }
            recipe.matchingRate = matchingRate
        })
        this.forceUpdate()
        }

    render() {
        console.log(this.state.recipes)
        return (
            <div>
                
            </div>
        )
    }
}