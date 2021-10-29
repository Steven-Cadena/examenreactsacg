import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import { NavLink } from 'react-router-dom'

export default class DetallesSeries extends Component {

    state = {
        serie:{}
        ,status: false
    }

    cargarSeries = () => {
        var id = this.props.idserie;
        var request = "/api/Series/" + id;
        var url = Global.urlseries + request;
        axios.get(url).then(res => {
            this.setState({
                serie:res.data
                , status:true
            })
            console.log(this.state.serie);
        });
        
    }

    componentDidMount = () => {
        this.cargarSeries();
    }
    componentDidUpdate = (oldProps) => {
        if(this.props.idserie != oldProps.idserie){
            this.cargarSeries();
        }
    }
    render() {
        return (
            <div>
                <h1> detalle serie </h1>
                <img src={this.state.serie.imagen} style={{width:"100px",height:"100px"}}/>
                <h2>{this.state.serie.nombre}</h2>
                <h2>IMDB: {this.state.serie.puntuacion}</h2>
                <NavLink to={"/personajes/" + this.state.serie.idSerie}
                className="btn btn-success">
                    Personajes
                </NavLink>
            </div>
        )
    }
}
