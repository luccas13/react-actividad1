//Import my components
import Selector from '../components/Selector';

const AddComponent = (props) => {
    return (
    <>
        {props.selector ? <Selector 
            msgSelect={props.msgSelect} 
            lista={props.lista } 
            nameSelect={props.nameSelect}
            handleInput={props.handleInput}
            /> : <></>}
        <input 
        type="text" 
        onChange={(event) => props.handleInput(event)} 
        name={props.nameInput} 
        value={props.elemento} 
        placeholder={'Ingrese ' + props.msg}
        //Estilos
        className='input '
        />
        <span 
        onClick={() => props.addItem(props.elemento, props.indice)}
        //Estilos 
        className='boton formulario__boton-add' 
        >Agregar</span>
    </>
    );
}
 
export default AddComponent;