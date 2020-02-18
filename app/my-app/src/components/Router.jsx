import React from 'react'
import { BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Zutateneingabe from './Zutateneingabe';
import Rezeptübersicht from './Rezeptübersicht';
import Rezept from './Rezept';
import App_Bar_Navigation from "./App-Bar-Navigation"

  

export default function Router() {
    return (
        <BrowserRouter >
            <App_Bar_Navigation/>
            <Switch>
                <Route path="/Rezeptübersicht" component={Rezeptübersicht}/>
                <Route path="/Rezept/:id" component={Rezept}/>
                <Route path="/" component={Zutateneingabe}/>
            </Switch>
        </BrowserRouter>
    )
}
