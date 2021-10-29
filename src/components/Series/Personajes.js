import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import { NavLink } from 'react-router-dom'

export default class Personajes extends Component {

    state = {
        personajes:[]
    }

    cargarSeries = () => {
        var id = this.props.idserie;
        var request = "/api/Series/PersonajesSerie/" + id;
        var url = Global.urlseries + request;
        axios.get(url).then(res => {
            this.setState({
                personajes:res.data
                , status:true
            });
            console.log(this.state.serie);
        });
        
    }

    componentDidMount = () => {
        this.cargarSeries();
    }
    render() {
        return (
            <div>
                <NavLink to={"/home"} className="btn btn-danger">
                    Volver
                </NavLink>
                 <h1>Personajes</h1>
                <table>
                    <thead>
                        <th>Personaje</th>
                        <th>Imagen</th>
                    </thead>
                    <tbody>
                    {this.state.personajes.map((personaje,index)=>{
                            return(<tr key={index}>
                                <td>{personaje.nombre}</td>
                                <td>
                                    <img src={personaje.imagen} style={{width:"100px" , height:"100px"}}/>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
