import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'


export default class ModificarPersonaje extends Component {
    cajaselectserieRef = React.createRef();
    cajaselectpersonajeRef = React.createRef();

    state = {
        series:[]
        , personajes:[]
        , status:false
    }


    cargarSeries = () => {
        var request = "/api/Series";
        var url = Global.urlseries + request;
        axios.get(url).then(res => {
            this.setState({
                series:res.data
            })
            console.log(this.state.series);
        });
        
    }
    componentDidMount = () => {
        this.cargarSeries();
        this.cargarPersonajes();
    }

    cargarPersonajes = () => {
        var request = "/api/Personajes";
        var url = Global.urlseries + request;
        axios.get(url).then(res => {
            this.setState({
                personajes:res.data
                , status:true
            });
        });
    } 

    modificarPersonaje = (e) => {
        e.preventDefault();
        var idserie = this.cajaselectserieRef.current.value;
        var idpersonaje = this.cajaselectpersonajeRef.current.value;
         var request = "/api/Personajes/" + idpersonaje +"/" + idserie;
         var url = Global.urlseries + request;
         axios.put(url).then(res=>{
            this.setState({
                status:true
            });
            console.log("se modifico");
         });

    }


    render() {
        return (
            <div>
                <h1 style={{color:"blue"}}>Perdonajes y series</h1>
                <h2>Seleccione una serie:</h2>
                <form style={{width:"500px" , margin:"0 auto", display:"table"}} 
                onSubmit={this.modificarPersonaje}>
                <div className="form-group row">
                        <select ref={this.cajaselectserieRef}>
                        {this.state.series.map((serie,index)=>{
                            return(
                                <option key={index} value={serie.idSerie}>
                                    {serie.nombre}
                                </option>
                            )
                        })}
                        </select>
                </div>
                <h2>Seleccione un personaje:</h2>
                <div className="form-group row">
                        <select ref={this.cajaselectpersonajeRef}>
                        {this.state.personajes.map((personaje,index)=>{
                            return(
                                <option key={index} value={personaje.idPersonaje}>
                                    {personaje.nombre}
                                </option>
                            )
                        })}
                        </select>
                </div>
                <br/>
                    <button className="btn btn-info">
                        Modificar Personaje
                    </button>
                </form>
            </div>
        )
    }
}
