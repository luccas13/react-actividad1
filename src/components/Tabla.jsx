const Tabla = (props) => {
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
                {props.lista.map((item1, index1) => {return(
                    <tr key={index1}>
                        <td className='tabla__celdas' >{index1}</td>
                        {props.msg.map((item2, index2) => {return(
                            <td key={index2} className='tabla__celdas' >{item1[item2]}</td>
                        )})}
                    </tr>
                )})}
            </tbody>
        </table>
    );
}
 
export default Tabla;