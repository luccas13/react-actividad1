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
import { getData, postData, deleteData } from './clients/pilarClient';
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
    }
  }

  componentDidMount() {
    getData().then(res => this.setState({
      // dbPilar: res,
      listaPaises: res.countries,
      listaCiudades: res.places,
      listaEmpresas: res.organizations,
      listaPuestos: res.jobs,
    }));
  }

  addPais = (elemento) => {
    if (validarCadena(elemento)) {
        let data = {name: elemento,};
        postData('countries', data, 'País', 'name').then(res => {
          this.setState({
            listaPaises: [...this.state.listaPaises, res.data],
          });
          alert('País agregado exitosamente!!!');
        });
      } else {
    }
  }

  addCiudad = (elemento, indice) => {
    if (validarCadena(elemento) && validarNumero(indice)) {
      let data = {name: elemento, countrieId: indice,};
      postData('places', data, 'Ciudad', 'name').then(res => {
        this.setState({
          listaCiudades: [...this.state.listaCiudades, res.data],
        });
        alert('Ciudad agregada exitosamente!!!');
      });
    } else {
        alert('Faltan campos por completar!!!');
    }
  }

  addEmpresa = (elemento, indice) => {
    if (validarCadena(elemento) && validarNumero(indice)) {
      let data = {name: elemento, placeId: indice,};
      postData('organizations', data).then(res => {
        this.setState({
          listaEmpresas: [...this.state.listaEmpresas, res.data],
        });
        alert('Empresa agregada exitosamente!!!');
      });
    } else {
        alert('Faltan campos por completar!!!');
    }
  }

  addPuesto = (elemento, indice, description) => {
    if (validarCadena(elemento) && validarNumero(indice) && validarCadena(description)) {
      let data = {position: elemento, description: description, organizationId: indice,};
      postData('jobs', data).then(res => {
        this.setState({
          listaPuestos: [...this.state.listaPuestos, res.data],
        });
        alert('Puesto agregado exitosamente!!!');
      });
    } else {
        alert('Faltan campos por completar!!!');
    }
  }

  deleteItem = (url, indice) => {
    deleteData(url, indice).then(res => {
      res.status === 200 ? alert('Elemento eliminado con éxito!!!') : alert(`Ocurrió un error al querer eliminar el elemento!!!`);
      getData().then(res => this.setState({
        listaPaises: res.countries,
        listaCiudades: res.places,
        listaEmpresas: res.organizations,
        listaPuestos: res.jobs,
      }));
    });
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/" exact render={() => <VistaPrincipal />} />
          <Route path="/Puestos" exact render={() => <Puesto addItem={this.addPuesto} deleteItem={this.deleteItem} ciudades={this.state.listaCiudades} empresas={this.state.listaEmpresas} puestos={this.state.listaPuestos} />} />
          <Route path="/Empresas" exact render={() => <Empresa addItem={this.addEmpresa} deleteItem={this.deleteItem} paises={this.state.listaPaises} ciudades={this.state.listaCiudades} empresas={this.state.listaEmpresas} />} />
          <Route path="/Ciudades" exact render={() => <Ciudad addItem={this.addCiudad} deleteItem={this.deleteItem} paises={this.state.listaPaises} ciudades={this.state.listaCiudades} />} />
          <Route path="/Paises" exact render={() => <Pais addItem={this.addPais} deleteItem={this.deleteItem} paises={this.state.listaPaises} />} />
          <Route component={NotFoundView} />
        </Switch>
      </div>
    );
  }
}

export default App;
