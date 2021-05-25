import React, { Component } from 'react';
//Import my components
import AddComponent from '../components/AddComponent';
import DeleteComponent from '../components/DeleteComponent'
import Lista from '../components/Lista';
//Import utils
import { cambiarClases } from '../utils/cambiarClases';

class Ciudad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indicePais: -1,            
            inputCiudad: '',
            inputIndex: -1,
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() { 
        cambiarClases('Ciudades');
        return (
            <div className='contenedor'>
                <div className='formulario' >
                    <AddComponent 
                    addItem={this.props.addItem}
                    handleInput={this.handleInput}
                    elemento={this.state.inputCiudad}
                    nameInput='inputCiudad'
                    indice={this.state.indicePais}
                    msg='Ciudad'
                    selector={true}
                    nameSelect='indicePais'
                    lista={this.props.paises}
                    msgSelect='País'
                    />
                    <hr className="formulario__separador" ></hr>
                    <DeleteComponent 
                    handleInput={this.handleInput}
                    deleteItem={this.props.deleteItem}
                    nameInput='inputIndex'
                    lista={this.props.ciudades}
                    indice={this.state.inputIndex}
                    idLista='lsitaciudades'
                    />
                </div>
                <Lista 
                lista={this.props.ciudades}
                msg='Ciudad'
                />
            </div>
        );
    }
}
 
export default Ciudad;