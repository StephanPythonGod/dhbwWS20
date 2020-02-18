import React, { Component } from 'react'
import { BrowserRouter,
    Switch,
    Route  } from "react-router-dom";
import Zutateneingabe from './Zutateneingabe';
import Rezeptübersicht from './Rezeptübersicht';
import Rezept from './Rezept';
import App_Bar_Navigation from "./App-Bar-Navigation"


const LOCAL_STORAGE_KEY ="cocktailapp.ingredients"

export default class Router extends Component {

    constructor (props){
        super(props);
        this.state = {
            ingredients : []
        }
    } 

    componentDidMount(){
        const storedIngredients = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedIngredients) this.state.ingredients = storedIngredients
        this.forceUpdate()
    }

    updateIngredients (input){
        this.state.ingredients.push(input)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.ingredients))
        this.forceUpdate()
    }

    deleteIngredients (input){
        this.state.ingredients.splice( this.state.ingredients.indexOf(input), 1 )
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.ingredients))
        this.forceUpdate()
    }

    render() {
        return (
            <div>
            <BrowserRouter >
                <App_Bar_Navigation/>
                    <Switch>
                        <Route path="/Rezeptübersicht" render={(props) => <Rezeptübersicht {...props} ingredients={this.state.ingredients} />}/>
                        <Route path="/Rezept/:id" component={Rezept}/>
                        <Route path="/" render={(props) => <Zutateneingabe {...props} deleteIngredients={this.deleteIngredients.bind(this)} 
                            ingredients={this.state.ingredients} updateIngredients={this.updateIngredients.bind(this)} />}/>
                    </Switch>
            </BrowserRouter>
            </div>
        )
    }
}
