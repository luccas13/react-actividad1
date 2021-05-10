import React, { Component } from 'react';
//Import my components
import AddComponent from '../components/AddComponent';
import Lista from '../components/Lista';
//Import utils
import { validarCadena } from '../utils/validarCadena';
import { validarNumero } from '../utils/validarNumero';

class Ciudad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaPaises: [],
            indicePais: -1,
            listaCiudades: [],
            inputCiudad: '',
        }
    }

    componentDidMount() {
        let Paises = localStorage.getItem('listaPaises');
        let Ciudades = localStorage.getItem('listaCiudades');
        this.setState({
            listaPaises: Paises ? JSON.parse(Paises) : [],
            listaCiudades: Ciudades ? JSON.parse(Ciudades) : [],
        });
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    addItem = () => {
        const {listaPaises, indicePais, listaCiudades, inputCiudad } = this.state
        console.log(validarNumero(indicePais));
        if (validarCadena(inputCiudad) && validarNumero(indicePais)) {
            this.setState({
                inputCiudad: '',
                listaCiudades: [...listaCiudades, {
                    Ciudad: inputCiudad, 
                    'País': listaPaises[indicePais]['País'],
                }] 
            });
            localStorage.setItem('listaCiudades', JSON.stringify([...listaCiudades, {
                Ciudad: inputCiudad,
                'País': listaPaises[indicePais]['País'],
            }]));
        } else {
            alert('Debe Rellenar Todos Los Campos!!!');
        }
    }

    render() { 
        return (
            <div className='contenedor'>
                <AddComponent 
                nameInput='inputCiudad'
                addItem={this.addItem}
                handleInput={this.handleInput}
                input={this.state.inputCiudad}
                msg='Ciudad'
                nameSelect='indicePais'
                selector={true}
                msgSelect='País'
                lista={this.state.listaPaises}
                />
                <Lista 
                lista={this.state.listaCiudades}
                msg='Ciudad'
                />
            </div>
        );
    }
}
 
export default Ciudad;