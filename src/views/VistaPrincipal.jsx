//Import my components
import Tabla from '../components/Tabla';
//Import utils
import { cambiarClases } from '../utils/cambiarClases';

const VistaPrincipal = (props) => {
    cambiarClases('Home');
    return (
        <div className='contenedor' >
            <Tabla 
            lista={props.lista}
            msg={['Puesto','Empresa','Ciudad','País']}
            />
        </div>
    );
}
 
export default VistaPrincipal;