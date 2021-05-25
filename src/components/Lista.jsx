const Lista = (props) => {
    return (
        <table className='tabla' >
            <thead className='tabla__cabecera' >
                <tr>
                    <td className='tabla__celdas' ><b>#</b></td>
                    <td className='tabla__celdas' ><b>{props.msg}</b></td>
                </tr>
            </thead>
            <tbody className='tabla__cuerpo' >
                {props.lista.map((item, index) => {return(
                    <tr key={index}>
                        <td className='tabla__celdas' >{index}</td>
                        <td className='tabla__celdas' >{item[props.msg]}</td>
                    </tr>
                )})}
            </tbody>
        </table>
    );
}
 
export default Lista;