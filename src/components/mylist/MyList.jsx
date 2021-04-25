import React from 'react'

//ESTILOS CSS
// import '../../assets/css/estilos.css'

export class MyList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            miLista: [],
            puesto: '',
            empresa: '',
            ciudad: '',
            pais: ''
        }
    }

    Entrada(cambio){
        if (cambio.target.id === 'puesto'){
            this.setState({
                puesto: cambio.target.value
            })
        }
        else if (cambio.target.id === 'empresa'){
            this.setState({
                empresa: cambio.target.value
            })
        }
        else if (cambio.target.id === 'ciudad'){
            this.setState({
                ciudad: cambio.target.value
            })
        }
        else if (cambio.target.id === 'pais'){
            this.setState({
                pais: cambio.target.value
            })
        }
    }

    Agregar(){
        if ( this.state.puesto === '' || this.state.empresa === '' || this.state.ciudad === '' || this.state.pais === '' ){
            alert("Debes completar todos los campos.");
        }
        else{
            this.setState({
                miLista: [...this.state.miLista, `Puesto: ${this.state.puesto} - Empresa: ${this.state.empresa} - Ciudad: ${this.state.ciudad} - Pais: ${this.state.pais}`],
                puesto: '',
                empresa: '',
                ciudad: '',
                pais: ''
            })
        }
    }

    Eliminar(){
        var indice = document.getElementById("indice").value - 1
        console.log(`indice: ${indice} - Tamaño de la lista: ${this.state.miLista.length}`)
        if (-1 < indice && indice < this.state.miLista.length){
            var listaNueva = this.state.miLista
            listaNueva.splice(indice, 1)
            this.setState({
                miLista: listaNueva
            })

        }
        else{
            alert("El elemento no existe!!")
        }
    }

    render(){
        return(
            <div className="contenedor">
                <div className="formulario">
                    <label className="formulario__label" >Puesto: </label>
                    <input type="text" onChange={(cambio) => this.Entrada(cambio)} id="puesto" value={this.state.puesto} className="formulario-input" /><br></br>
                    <label className="formulario__label" >Empresa: </label>
                    <input type="text" onChange={(cambio) => this.Entrada(cambio)} id="empresa" value={this.state.empresa} className="formulario-input" /><br></br>
                    <label className="formulario__label" >Ciudad: </label>
                    <input type="text" onChange={(cambio) => this.Entrada(cambio)} id="ciudad" value={this.state.ciudad} className="formulario-input" /><br></br>
                    <label className="formulario__label" >Pais: </label>
                    <input type="text" onChange={(cambio) => this.Entrada(cambio)} id="pais" value={this.state.pais} className="formulario-input" /><br></br>
                    <button onClick={() => this.Agregar()} className="formulario__boton" >Agregar</button>
                    <hr className="formulario__separador" ></hr>
                    <label className="formulario__label--del" >Índice del elemento: </label>
                    <input type="number" id="indice" className="formulario__input-indice" />
                    <button onClick={() => this.Eliminar()} className="formulario__boton" >eliminar</button>
                </div>
                <div className="lista">
                    <ol>
                        {this.state.miLista.map((item, index) => {return( <li key={index} className="lista__elemento" >{item}</li> )})}
                    </ol>
                </div>
            </div>
        );
    }
}