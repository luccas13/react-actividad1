import React, { Component } from 'react';
//Import my components
import AddComponent from '../components/AddComponent';
import DeleteComponent from '../components/DeleteComponent'
import Lista from '../components/Lista';
//Import utils
import { cambiarClases } from '../utils/cambiarClases';

class Puesto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indiceEmpresa: -1,
            inputPuesto: '',
            inputIndex: -1,
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() { 
        cambiarClases('Puestos');
        return (
            <div className='contenedor'>
                <div className='formulario' >
                    <AddComponent 
                    addItem={this.props.addItem}
                    handleInput={this.handleInput}
                    indice={this.state.indiceEmpresa}
                    elemento={this.state.inputPuesto}
                    nameInput='inputPuesto'
                    msg='Puesto'
                    selector={true}
                    nameSelect='indiceEmpresa'
                    msgSelect='Empresa'
                    lista={this.props.empresas}
                    />
                    <hr className="formulario__separador" ></hr>
                    <DeleteComponent 
                    handleInput={this.handleInput}
                    deleteItem={this.props.deleteItem}
                    nameInput='inputIndex'
                    url='jobs'
                    indice={this.state.inputIndex}
                    idLista='listaPuestos'
                    />
                </div>
                <Lista 
                lista={this.props.puestos}
                msg1='Puesto'
                msg2='position'
                />
            </div>
        );
    }
}
 
export default Puesto;