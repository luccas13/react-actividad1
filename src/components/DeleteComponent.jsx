const DeleteComponent = (props) => {
    return (
        <div className='formulario'>
            <input 
            type="number" 
            onChange={(event) => props.handleInput(event)} 
            //Estilos
            className='formulario__input-number'
            />
            <span 
            onClick={() => props.deleteItem()}
            //Estilos 
            className='formulario__boton-del' 
            >Eliminar</span>
        </div>
    );
}
 
export default DeleteComponent;