import React, { Component } from 'react';
//Import my components
import AddComponent from '../components/AddComponent';
import DeleteComponent from '../components/DeleteComponent'
import Lista from '../components/Lista';
//Import utils
import { cambiarClases } from '../utils/cambiarClases';

class Pais extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputPais: '',
            inputIndex: -1,
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() { 
        cambiarClases('Paises');
        return (
            <div className='contenedor'>
                <div className='formulario'>
                    <AddComponent 
                    addItem={this.props.addItem}
                    handleInput={this.handleInput}
                    elemento={this.state.inputPais}
                    nameInput='inputPais'
                    msg='País'
                    selector={false}
                    />
                    <hr className="formulario__separador" ></hr>
                    <DeleteComponent 
                    handleInput={this.handleInput}
                    deleteItem={this.props.deleteItem}
                    nameInput='inputIndex'
                    lista={this.props.paises}
                    indice={this.state.inputIndex}
                    idLista='listaPaises'
                    />
                </div>
                <Lista 
                lista={this.props.paises}
                msg='País'
                />
            </div>
        );
    }
}
 
export default Pais;