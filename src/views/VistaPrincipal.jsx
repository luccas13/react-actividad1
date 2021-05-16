//Import my components
import Tabla from '../components/Tabla';
//Import utils
import { cambiarClases } from '../utils/cambiarClases';

const VistaPrincipal = (props) => {
    cambiarClases('Home');
    return (
        <div className='contenedor' >
            <Tabla 
            listas={props.listas}
            msg={['Puesto','Empresa','Ciudad','País']}
            />
        </div>
    );
}
 
export default VistaPrincipal;