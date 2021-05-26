const Lista = (props) => {
    return (
        <table className='tabla' >
            <thead className='tabla__cabecera' >
                <tr>
                    <td className='tabla__celdas' ><b>Id</b></td>
                    <td className='tabla__celdas' ><b>{props.msg1}</b></td>
                </tr>
            </thead>
            <tbody className='tabla__cuerpo' >
                {props.lista.map((item, index) => {return(
                    <tr key={index}>
                        <td className='tabla__celdas' >{item.id}</td>
                        <td className='tabla__celdas' >{item[props.msg2]}</td>
                    </tr>
                )})}
            </tbody>
        </table>
    );
}
 
export default Lista;