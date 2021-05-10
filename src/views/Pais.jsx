import React, { Component } from 'react';
//Import my components
import AddComponent from '../components/AddComponent';
import Lista from '../components/Lista';
//Import utils
import { validarCadena } from '../utils/validarCadena';

class Pais extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaPaises: [],
            inputPais: '',
        }
    }

    componentDidMount() {
        let Paises = localStorage.getItem('listaPaises');
        this.setState({
            listaPaises: Paises ? JSON.parse(Paises) : [],
        });
    }

    handleInput = (event) => {
        this.setState({
            inputPais: event.target.value,
        });
    }

    addItem = () => {
        const {listaPaises, inputPais,} = this.state
        if (validarCadena(inputPais)) {
            this.setState({
                listaPaises: [...listaPaises, {'País': inputPais,}],
                inputPais: '',
            });
            localStorage.setItem('listaPaises', JSON.stringify([...listaPaises, {'País': inputPais,}]));
        } else {
            alert('Debe Rellenar Todos Los Campos!!!');
        }
    }

    render() { 
        return (
            <div className='contenedor'>
                <AddComponent 
                nameInput='inputPais'
                addItem={this.addItem}
                handleInput={this.handleInput}
                input={this.state.inputPais}
                msg='País'
                selector={false}
                />
                <Lista 
                lista={this.state.listaPaises}
                msg='País'
                />
            </div>
        );
    }
}
 
export default Pais;