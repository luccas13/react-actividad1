export const validarCadena = (cadena) => {
    const aux = /[^\w]/g;
    return(cadena !== null && cadena !== undefined && cadena !== "" && cadena.search(aux) !== 0)
}