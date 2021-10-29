import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'


export default class InsertarPersonaje extends Component {

    state = {
        series:[]
        , status:false
    }

    cajanombreRef = React.createRef();
    cajaimagenRef = React.createRef();
    cajaselectRef = React.createRef();


    insertarPersonaje = (e) => {
        e.preventDefault();
        var nombre = this.cajanombreRef.current.value;
        var imagen = this.cajaimagenRef.current.value;
        var select = this.cajaselectRef.current.value;
        console.log(select);
        var insert = {
            nombre: nombre
            , imagen: imagen 
            , idSerie: parseInt(select)
        };

        var request = "/api/Personajes";
        var url = Global.urlseries + request;
        axios.post(url,insert).then(res=>{
            this.setState({
                status:true
            })
        })


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
                <h1 style={{color:"blue"}}> Nuevo Personaje</h1>
                <form style={{width:"500px" , margin:"0 auto", display:"table"}} 
                onSubmit={this.insertarPersonaje}>
                    <div className="form-group row">
                        <label>Nombre:</label>
                        <input type="text" className="form-control" ref={this.cajanombreRef} required/>
                    </div>
                    <div className="form-group row">
                        <label>Imagen:</label>
                        <input type="text" className="form-control" ref={this.cajaimagenRef} required/>
                    </div>
                    <div className="form-group row">
                        <select ref={this.cajaselectRef}>
                        {this.state.series.map((serie,index)=>{
                            return(
                                <option  value={serie.idSerie}>
                                    {serie.nombre}
                                </option>
                            )
                        })}
                        </select>
                    </div>
                    <br/>
                    <button className="btn btn-info">
                        Insertar Personaje
                    </button>
                </form>
            </div>
        )
    }
}
