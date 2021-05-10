import React, { Component } from 'react';
//Import my components
import AddComponent from '../components/AddComponent';
import Lista from '../components/Lista';
//Import utils
import { validarCadena } from '../utils/validarCadena';
import { validarNumero } from '../utils/validarNumero';

class Empresa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaCiudades: [],
            indiceCiudad: -1,
            listaEmpresas: [],
            inputEmpresa: '',
        }
    }

    componentDidMount() {
        let Ciudades = localStorage.getItem('listaCiudades');
        let Empresas = localStorage.getItem('listaEmpresas');
        this.setState({
            listaCiudades: Ciudades ? JSON.parse(Ciudades) : [],
            listaEmpresas: Empresas ? JSON.parse(Empresas) : [],
        });
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    addItem = () => {
        const {listaCiudades, indiceCiudad, listaEmpresas, inputEmpresa,} = this.state
        if (validarCadena(inputEmpresa) && validarNumero(indiceCiudad)) {
            this.setState({
                listaEmpresas: [...listaEmpresas, {
                    Empresa: inputEmpresa,
                    Ciudad: listaCiudades[indiceCiudad].Ciudad,
                    'País': listaCiudades[indiceCiudad]['País'],
                }],
                inputEmpresa: '',
            });
            localStorage.setItem('listaEmpresas', JSON.stringify([...listaEmpresas, {
                Empresa: inputEmpresa,
                Ciudad: listaCiudades[indiceCiudad].Ciudad,
                'País': listaCiudades[indiceCiudad]['País'],
            }]));
        } else {
            alert('Debe Rellenar Todos Los Campos!!!');
        }
    }

    render() { 
        return (
            <div className='contenedor'>
                <AddComponent 
                nameInput='inputEmpresa'
                addItem={this.addItem}
                handleInput={this.handleInput}
                input={this.state.inputEmpresa}
                msg='Empresa'
                nameSelect='indiceCiudad'
                selector={true}
                msgSelect='Ciudad'
                lista={this.state.listaCiudades}
                />
                <Lista 
                lista={this.state.listaEmpresas}
                msg='Empresa'
                />
            </div>
        );
    }
}
 
export default Empresa;