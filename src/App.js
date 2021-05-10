import React from 'react';
import { Route, Switch } from 'react-router-dom';
//IMPORT MY COMPONENT
import NavBar from './components/NavBar';
import VistaPrincipal from './views/VistaPrincipal';
import Puesto from './views/Puesto';
import Empresa from './views/Empresa';
import Ciudad from './views/Ciudad';
import Pais from './views/Pais';
import NotFoundView from './views/NotFoundView';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/" exact component={VistaPrincipal} />
        <Route path="/Puestos" exact component={Puesto} />
        <Route path="/Empresas" exact component={Empresa} />
        <Route path="/Ciudades" exact component={Ciudad} />
        <Route path="/Paises" exact component={Pais} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  );
}

export default App;
