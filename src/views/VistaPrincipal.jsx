//Import my components
import Tabla from '../components/Tabla';

const VistaPrincipal = (props) => {
    
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