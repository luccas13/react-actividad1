import { buscadorId } from '../utils/buscadorId';

const Tabla = (props) => {
    const { countries, places, organizations, jobs } = props.lista;
    return (
        <table className='tabla' >
            <thead className='tabla__cabecera' >
                <tr>
                    <td className='tabla__celdas' ><b>Id</b></td>
                    {props.msg.map((item, index) => {return(
                        <td key={index} className='tabla__celdas' ><b>{item}</b></td>
                    )})}
                </tr>
            </thead>
            <tbody className='tabla__cuerpo' >
                {jobs ? jobs.map(({position, id, organizationId}, indice) => {
                    let organization = buscadorId(organizationId, organizations);
                    let place = buscadorId(organization.placeId, places);
                    let country = buscadorId(place.countrieId, countries)
                    return(
                    <tr key={indice}>
                        <td className='tabla__celdas' >{id}</td>
                        <td className='tabla__celdas' >{position}</td>
                        <td className='tabla__celdas' >{organization.name}</td>
                        <td className='tabla__celdas' >{place.name}</td>
                        <td className='tabla__celdas' >{country.name}</td>
                    </tr>
                )}) : null}
            </tbody>
        </table>
    );
}
 
export default Tabla;