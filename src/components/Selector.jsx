import { buscadorId } from '../utils/buscadorId';

const Selector = (props) => {
    let aux = props.lista.length;
    return (
        <select 
        onChange={(event) => props.handleInput(event)}
        name={props.nameSelect}
        //Estilos
        className='input formulario__input-select'
        >
            <option value={-1} >{'Seleccione ' + props.msgSelect}</option>
            {aux === 0 ? null : props.lista.map((item, index) => {
                let elemento;
                if(props.validar){
                    elemento = item[props.msgSelect2] ? buscadorId(item[props.msgSelect2], props.lista2) : null;
                }
                return(
                    <option key={index} value={item.id}>{props.validar ? (item.name ? item.name : null) + ' - ' +  elemento.name : item.name ? item.name : ' - '}</option>
            )})}
        </select>
    );
}
 
export default Selector;