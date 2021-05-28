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
                {jobs ? jobs.map(({position, id, description, organizationId}, indice) => {
                    // console.log(organizations.length);
                    let organization =  organizations.length > 0 ? buscadorId(organizationId, organizations) : {name: ' - '};
                    // console.log('Organization: ', organization);
                    let place = organization.placeId ? buscadorId(organization.placeId, places) : {name: ' - '};
                    // console.log('Place: ', place);
                    let country = place.countrieId ? buscadorId(place.countrieId, countries) : {name: ' - '};
                    // console.log('Country :', country);
                    return(
                    <tr key={indice}>
                        <td className='tabla__celdas' >{id}</td>
                        <td className='tabla__celdas' >{position}</td>
                        <td className='tabla__celdas' >{description}</td>
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