import { Component } from 'react'
import React, { Fragment, useState, useEffect } from 'react'
import axios from "axios"
import RezpetZutaten from './RezpetZutaten';
import Grid from '@material-ui/core/Grid';
import Stepper from "./Stepper"




export default class RezeptAnsicht extends Component {

    constructor (props){
        super(props);
        this.state = {
            recipe_name: props.match.params.id,
            download : [],
            recipe : []
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
                if (response.data[key].name === this.state.recipe_name){
                fetchedOrders.push({
                    ...response.data[key], 
                    id : key
                })}
                this.setState({download:fetchedOrders})
            this.engineerDonwload()
            }
    })}

    engineerDonwload(){
        this.state.download.map(item => {
            const ingredients = item.ingredients.split(",")
            const amount = item.amount.split(",")
            const recipename = item.name
            var newelement = {}
            newelement["ingredients"] = ingredients
            newelement["name"] = recipename
            newelement["amount"] = amount
            this.state.recipe.push(newelement)
        })
        this.forceUpdate()
    }
    render() {
        return (
            <Grid container
                direction="column"
                justify="center"
                alignItems="center">
                <Grid>
                    <h2>
                        {this.state.recipe_name}
                    </h2>
                </Grid>
                <Grid>
                    <RezpetZutaten recipe = {this.state.recipe[0]}/>
                </Grid>
                <Grid>
                </Grid>
            </Grid>
        )
    }
}