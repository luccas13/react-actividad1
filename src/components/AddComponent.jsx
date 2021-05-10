//Import my components
import Selector from '../components/Selector';

const AddComponent = (props) => {
    return (
    <div className='formulario'>
        <input 
        type="text" 
        onChange={(event) => props.handleInput(event)} 
        name={props.nameInput} 
        value={props.input} 
        placeholder={'Ingrese ' + props.msg}
        //Estilos
        className='formulario__input-text'
        />
        {props.selector ? <Selector 
        msgSelect={props.msgSelect} 
        lista={props.lista } 
        nameSelect={props.nameSelect}
        handleInput={props.handleInput}
        /> : <></>}
        <span 
        onClick={() => props.addItem()}
        //Estilos 
        className='formulario__boton-add' 
        >Agregar</span>
    </div>
    );
}
 
export default AddComponent;