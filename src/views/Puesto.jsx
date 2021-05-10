import React, { Component } from 'react';
//Import my components
import AddComponent from '../components/AddComponent';
import Lista from '../components/Lista';
//Import utils
import { validarCadena } from '../utils/validarCadena';
import { validarNumero } from '../utils/validarNumero';

class Puesto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaEmpresas: [],
            indiceEmpresa: -1,
            listaPuestos: [],
            inputPuesto: '',
        }
    }

    componentDidMount() {
        let Empresas = localStorage.getItem('listaEmpresas');
        let Puestos = localStorage.getItem('listaPuestos');
        this.setState({
            listaEmpresas: Empresas ? JSON.parse(Empresas) : [],
            listaPuestos: Puestos ? JSON.parse(Puestos) : [],
        });
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    addItem = () => {
        const {listaEmpresas, indiceEmpresa, listaPuestos, inputPuesto,} = this.state
        if (validarCadena(inputPuesto) && validarNumero(indiceEmpresa)) {
            this.setState({
                listaPuestos: [...listaPuestos, {
                    Puesto: inputPuesto,
                    Empresa: listaEmpresas[indiceEmpresa].Empresa,
                    Ciudad: listaEmpresas[indiceEmpresa].Ciudad,
                    'País': listaEmpresas[indiceEmpresa]['País'], 
                }],
                inputPuesto: '',
            });
            localStorage.setItem('listaPuestos', JSON.stringify([...listaPuestos, {
                Puesto: inputPuesto,
                Empresa: listaEmpresas[indiceEmpresa].Empresa,
                Ciudad: listaEmpresas[indiceEmpresa].Ciudad,
                'País': listaEmpresas[indiceEmpresa]['País'],
            }]));
        } else {
            alert('Debe Rellenar Todos Los Campos!!!');
        }
    }

    render() { 
        return (
            <div className='contenedor'>
                <AddComponent 
                nameInput='inputPuesto'
                addItem={this.addItem}
                handleInput={this.handleInput}
                input={this.state.inputPuesto}
                msg='Puesto'
                nameSelect='indiceEmpresa'
                selector={true}
                msgSelect='Empresa'
                lista={this.state.listaEmpresas}
                />
                <Lista 
                lista={this.state.listaPuestos}
                msg='Puesto'
                />
            </div>
        );
    }
}
 
export default Puesto;