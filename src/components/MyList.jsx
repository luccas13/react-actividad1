import React from 'react'

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
        const {miLista, puesto, empresa, ciudad, pais} = this.state
        if ( puesto === '' || empresa === '' || ciudad === '' || pais === '' ){
            alert("Debes completar todos los campos.");
        }
        else{
            this.setState({
                miLista: [...miLista, `Puesto: ${puesto} - Empresa: ${empresa} - Ciudad: ${ciudad} - Pais: ${pais}`],
                puesto: '',
                empresa: '',
                ciudad: '',
                pais: ''
            })
        }
    }

    Eliminar(){
        let indice = document.getElementById("indice").value - 1
        if (-1 < indice && indice < this.state.miLista.length){
            let listaNueva = this.state.miLista
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
                    <input type="text" onChange={(cambio) => this.Entrada(cambio)} id="puesto" value={this.state.puesto} className="formulario-input" />
                    <label className="formulario__label" >Empresa: </label>
                    <input type="text" onChange={(cambio) => this.Entrada(cambio)} id="empresa" value={this.state.empresa} className="formulario-input" />
                    <label className="formulario__label" >Ciudad: </label>
                    <input type="text" onChange={(cambio) => this.Entrada(cambio)} id="ciudad" value={this.state.ciudad} className="formulario-input" />
                    <label className="formulario__label" >Pais: </label>
                    <input type="text" onChange={(cambio) => this.Entrada(cambio)} id="pais" value={this.state.pais} className="formulario-input" />
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