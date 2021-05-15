const Tabla = (props) => {
    const { listaPaises, listaCiudades, listaEmpresas, listaPuestos } = props.listas;
    // console.log(listaEmpresas[0].Empresa);
    return (
        <table className='tabla' >
            <thead className='tabla__cabecera' >
                <tr>
                    <td className='tabla__celdas' ><b>#</b></td>
                    {props.msg.map((item, index) => {return(
                        <td key={index} className='tabla__celdas' ><b>{item}</b></td>
                    )})}
                </tr>
            </thead>
            <tbody className='tabla__cuerpo' >
                {listaPuestos.map((elemento, indice) => {return(
                    <tr key={indice}>
                        <td className='tabla__celdas' >{indice}</td>
                        <td className='tabla__celdas' >{elemento.Puesto}</td>
                        <td className='tabla__celdas' >{listaEmpresas[elemento.Empresa].Empresa}</td>
                        <td className='tabla__celdas' >{listaCiudades[listaEmpresas[elemento.Empresa].Ciudad].Ciudad}</td>
                        <td className='tabla__celdas' >{listaPaises[listaCiudades[listaEmpresas[elemento.Empresa].Ciudad]['País']]['País']}</td>
                    </tr>
                )})}
            </tbody>
        </table>
    );
}
 
export default Tabla;