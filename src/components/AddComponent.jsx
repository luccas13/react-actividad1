//Import my components
import Selector from '../components/Selector';

const AddComponent = (props) => {
    return (
    <>
        {props.selector ? <Selector 
            handleInput={props.handleInput}
            msgSelect={props.msgSelect} 
            msgSelect2={props.msgSelect2}
            lista={props.lista} 
            lista2={props.lista2} 
            nameSelect={props.nameSelect}
            validar={props.validar}
            /> : <></>}
        {props.msg === 'Puesto' ? <input 
        className='input formulario__input-select'
        type='text'
        placeholder='Descripción'
        name='inputDescription'
        onChange={(event) => props.handleInput(event)}
        /> : null}
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
        onClick={() => props.addItem(props.elemento, props.indice, props.description)}
        //Estilos 
        className='boton formulario__boton-add' 
        >Agregar</span>
    </>
    );
}
 
export default AddComponent;