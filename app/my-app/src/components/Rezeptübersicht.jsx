import React, { Component } from 'react'
import axios from "axios"

export default class Rezeptübersicht extends Component {

    constructor(props){
        super(props);
        this.state ={
            recipes : []
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
            this.state.recipes = fetchedOrders
            }
            this.forceUpdate()
    })}

    render() {
        console.log(this.state.recipes)
        return (
            <div>
                
            </div>
        )
    }
}