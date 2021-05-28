import React, { Component } from 'react';
//Import my components
import Tabla from '../components/Tabla';
//Import utils
import { getData } from '../clients/pilarClient';
import { cambiarClases } from '../utils/cambiarClases';

class VistaPrincipal extends Component {
    constructor(props){
        super(props);
        this.state = {
            dbPilar: [],
        }
    }

    componentDidMount() {
        getData().then(res => this.setState({
            dbPilar: res,
          }));
    }


    render(){
        cambiarClases('Home');
        return (
            <div className='contenedor' >
                <Tabla 
                lista={this.state.dbPilar}
                msg={['Puesto', 'Descripción', 'Empresa','Ciudad','País']}
                />
            </div>
        );
    }
}
 
export default VistaPrincipal;