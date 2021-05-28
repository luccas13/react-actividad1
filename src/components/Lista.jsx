const Lista = (props) => {
    return (
        <table className='tabla' >
            <thead className='tabla__cabecera' >
                <tr>
                    <td className='tabla__celdas' ><b>Id</b></td>
                    <td className='tabla__celdas' ><b>{props.msg1}</b></td>
                    {props.msg2 === 'position' ? <td className='tabla__celdas' ><b>Descripción</b></td> : null}
                </tr>
            </thead>
            <tbody className='tabla__cuerpo' >
                {props.lista.map((item, index) => {return(
                    <tr key={index}>
                        <td className='tabla__celdas' >{item.id}</td>
                        <td className='tabla__celdas' >{item[props.msg2]}</td>
                        {item.description ? <td className='tabla__celdas' >{item.description}</td> : null}
                    </tr>
                )})}
            </tbody>
        </table>
    );
}
 
export default Lista;