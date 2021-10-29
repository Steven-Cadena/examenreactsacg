import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DetallesSeries from './Series/DetallesSeries';
import Home from './Series/Home';
import InsertarPersonaje from './Series/InsertarPersonaje';
import MenuSeries from './Series/MenuSeries'
import ModificarPersonaje from './Series/ModificarPersonaje';
import Personajes from './Series/Personajes';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MenuSeries/>
                    <Switch>
                        <Route exact path="/home"
                        component={Home}/>
                        <Route exact path="/insertarpersonaje"
                        component={InsertarPersonaje}/>
                        <Route exact path="/modificarpersonaje"
                        component={ModificarPersonaje}/>
                        <Route exact path="/detallesseries/:idserie"
                        render={props=>{
                            var idserie = props.match.params.idserie;
                            return (<DetallesSeries idserie={idserie}/>)
                        }}/>
                        <Route exact path="/personajes/:idserie"
                        render={props=>{
                            var idserie = props.match.params.idserie;
                            return (<Personajes idserie={idserie}/>)
                        }}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
