const Selector = (props) => {
    let aux = props.lista.length;
    return (
        <select 
        onChange={(event) => props.handleInput(event)}
        name={props.nameSelect}
        className='input formulario__input-select'
        //Estilos
        >
            <option value={-1} >{'Seleccione ' + props.msgSelect}</option>
            {aux === 0 ? null : props.lista.map(({name, id}, index) => {return(
                <option key={index} value={id}>{name}</option>
            )}) }
        </select>
    );
}
 
export default Selector;