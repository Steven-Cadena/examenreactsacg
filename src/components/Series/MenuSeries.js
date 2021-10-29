import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from '../../Global';

export default class MenuSeries extends Component {

    state = {
        series:[]
        ,status: false
    }

    cargarSeries = () => {
        var request = "/api/Series";
        var url = Global.urlseries + request;
        axios.get(url).then(res => {
            this.setState({
                series:res.data
                , status:true
            })
            console.log(this.state.series);
        });
        
    }

    componentDidMount = () => {
        this.cargarSeries();
    }

    render() {
        return (
            <div>
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
            
                  <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink className="nav-link" to={"/home"}>Home</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink  className="nav-link" to={"/insertarpersonaje"}>
                          Nuevo personaje
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink  className="nav-link" to={"/modificarpersonaje"}>
                          Modificar personajes
                        </NavLink>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Series</a>
                        <ul className="dropdown-menu" aria-labelledby="dropdown08" >
                            {this.state.series.map((serie,index)=>{
                                return(
                                <li key={index}>
                                    <NavLink className="dropdown-item" to={"/detallesseries/" + serie.idSerie }> {serie.nombre} </NavLink>
                                </li>
                                );
                            })} 
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
        )
    }
}
