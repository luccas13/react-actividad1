import React, { Component } from 'react';
//Import my components
import Tabla from '../components/Tabla';
import DeleteComponent from '../components/DeleteComponent'

class VistaPrincipal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaCompleta: [],
            indiceInput: -1,
        };
    }

    componentDidMount() {
        let Lista = localStorage.getItem('listaPuestos');
        this.setState({
            listaCompleta: Lista ? JSON.parse(Lista) : [],
        });
    }

    handleInput = (event) => {
        this.setState({
            indiceInput: event.target.value,
        });
    }

    deleteItem = () => {
        const {indiceInput, listaCompleta} = this.state
        let aux = listaCompleta.length;
        if (-1 < indiceInput && indiceInput < aux){
            let listaNueva = listaCompleta
            listaNueva.splice(indiceInput, 1)
            this.setState({
                listaCompleta: listaNueva,
            })
            localStorage.setItem('listaPuestos', JSON.stringify(listaNueva));

        }
        else{
            alert("El elemento no existe!!")
        }
    }

    render() { 
        return (
            <div className='contenedor' >
                <DeleteComponent 
                handleInput={this.handleInput}
                deleteItem={this.deleteItem}
                />
                <Tabla 
                lista={this.state.listaCompleta}
                msg={['Puesto','Empresa','Ciudad','País']}
                />
            </div>
        );
    }
}
 
export default VistaPrincipal;