const DeleteComponent = (props) => {
    const {lista, indice, idLista} = props;
    return (
        <>
            <input 
            type="number" 
            name={props.nameInput}
            onChange={(event) => props.handleInput(event)} 
            //Estilos
            className='input formulario__input-number'
            />
            <span 
            onClick={() => props.deleteItem(lista, indice, idLista)}
            //Estilos 
            className='boton formulario__boton-del' 
            >Eliminar</span>
        </>
    );
}
 
export default DeleteComponent;