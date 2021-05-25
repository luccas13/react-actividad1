import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//IMPORT MY COMPONENT
import NavBar from './components/NavBar';
import VistaPrincipal from './views/VistaPrincipal';
import Puesto from './views/Puesto';
import Empresa from './views/Empresa';
import Ciudad from './views/Ciudad';
import Pais from './views/Pais';
import NotFoundView from './views/NotFoundView';
//Import utils
import { validarCadena } from './utils/validarCadena';
import { validarNumero } from './utils/validarNumero';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listaPaises: [],
      listaCiudades: [],
      listaEmpresas: [],
      listaPuestos: [],
      listaIds: {
        idPais: 0,
        idCiudad: 0,
        idEmpresa: 0,
        idPuesto: 0,
      }
    }
  }

  componentDidMount() {
    let Paises = localStorage.getItem('listaPaises');
    let Ciudades = localStorage.getItem('listaCiudades');
    let Empresas = localStorage.getItem('listaEmpresas');
    let Puestos = localStorage.getItem('listaPuestos');
    let Ids = localStorage.getItem('listaIds');
    this.setState({
        listaPaises: Paises ? JSON.parse(Paises) : [],
        listaCiudades: Ciudades ? JSON.parse(Ciudades) : [],
        listaEmpresas: Empresas ? JSON.parse(Empresas) : [],
        listaPuestos: Puestos ? JSON.parse(Puestos) : [],
        listaIds: Ids ? JSON.parse(Ids) : {
          idPais: 0,
          idCiudad: 0,
          idEmpresa: 0,
          idPuesto: 0,
        },
    });
  }

  addPais = (entrada) => {
    const {listaPaises, listaIds } = this.state
    if (validarCadena(entrada)) {
        this.setState({
            listaPaises: [...listaPaises, {'País': entrada, id: listaIds.idPais}],
        });
        localStorage.setItem('listaPaises', JSON.stringify([...listaPaises, {'País': entrada, id: listaIds.idPais++}]));
        localStorage.setItem('listaIds', JSON.stringify(listaIds));
        alert('País agregado exitosamente!!!');
    } else {
        alert('Faltan campos por completar!!!');
    }
  }

  addCiudad = (elemento, indice) => {
    const {listaCiudades, listaPaises, listaIds} = this.state
    if (validarCadena(elemento) && validarNumero(indice)) {
        this.setState({
            listaCiudades: [...listaCiudades, {
                Ciudad: elemento, 
                id: listaIds.idCiudad,
                'País': listaPaises[indice], 
            }],
        });
        localStorage.setItem('listaCiudades', JSON.stringify([...listaCiudades, {
            Ciudad: elemento,
            id: listaIds.idCiudad++,
            'País': listaPaises[indice],

        }]));
        localStorage.setItem('listaIds', JSON.stringify(listaIds));
        alert('Ciudad agregada exitosamente!!!');
    } else {
        alert('Faltan campos por completar!!!');
    }
  }

  addEmpresa = (elemento, indice) => {
    const {listaEmpresas, listaCiudades, listaIds} = this.state
    if (validarCadena(elemento) && validarNumero(indice)) {
        this.setState({
            listaEmpresas: [...listaEmpresas, {
                Empresa: elemento,
                id: listaIds.idEmpresa,
                Ciudad: listaCiudades[indice],
            }],
        });
        localStorage.setItem('listaEmpresas', JSON.stringify([...listaEmpresas, {
          Empresa: elemento,
          id: listaIds.idEmpresa++,
          Ciudad: listaCiudades[indice],
        }]));
        localStorage.setItem('listaIds', JSON.stringify(listaIds));
        alert('Empresa agregada exitosamente!!!');
    } else {
        alert('Faltan campos por completar!!!');
    }
  }

  addPuesto = (elemento, indice) => {
    const {listaPuestos, listaEmpresas, listaIds} = this.state
    if (validarCadena(elemento) && validarNumero(indice)) {
        this.setState({
            listaPuestos: [...listaPuestos, {
                Puesto: elemento,
                id: listaIds.idPuesto,
                Empresa: listaEmpresas[indice],
            }],
        });
        localStorage.setItem('listaPuestos', JSON.stringify([...listaPuestos, {
          Puesto: elemento,
          id: listaIds.idPuesto++,
          Empresa: listaEmpresas[indice],
        }]));
        localStorage.setItem('listaIds', JSON.stringify(listaIds));
        alert('Puesto agregado exitosamente!!!');
    } else {
        alert('Faltan campos por completar!!!');
    }
  }

  deleteItem = (lista, indice, idLista) => {
    let aux = lista.length;
    if (-1 < indice && indice < aux){
        let listaNueva = lista
        listaNueva.splice(indice, 1)
        this.setState({
            [idLista]: listaNueva,
        })
        localStorage.setItem(idLista, JSON.stringify(listaNueva));

    }
    else{
        alert("El elemento no existe!!")
    }
}

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact render={() => <VistaPrincipal lista={this.state.listaPuestos} />} />
          <Route path="/Puestos" exact render={() => <Puesto addItem={this.addPuesto} deleteItem={this.deleteItem} empresas={this.state.listaEmpresas} puestos={this.state.listaPuestos} />} />
          <Route path="/Empresas" exact render={() => <Empresa addItem={this.addEmpresa} deleteItem={this.deleteItem} ciudades={this.state.listaCiudades} empresas={this.state.listaEmpresas} />} />
          <Route path="/Ciudades" exact render={() => <Ciudad addItem={this.addCiudad} deleteItem={this.deleteItem} paises={this.state.listaPaises} ciudades={this.state.listaCiudades} />} />
          <Route path="/Paises" exact render={() => <Pais addItem={this.addPais} deleteItem={this.deleteItem} paises={this.state.listaPaises} />} />
          <Route component={NotFoundView} />
        </Switch>
      </div>
    );
  }
}

export default App;
