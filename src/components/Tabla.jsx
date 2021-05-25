const Tabla = (props) => {
    const { lista } = props;
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
                {lista.map(({Puesto, Empresa}, indice) => {return(
                    <tr key={indice}>
                        <td className='tabla__celdas' >{indice}</td>
                        <td className='tabla__celdas' >{Puesto}</td>
                        <td className='tabla__celdas' >{Empresa.Empresa}</td>
                        <td className='tabla__celdas' >{Empresa.Ciudad.Ciudad}</td>
                        <td className='tabla__celdas' >{Empresa.Ciudad['País']['País']}</td>
                    </tr>
                )})}
            </tbody>
        </table>
    );
}
 
export default Tabla;