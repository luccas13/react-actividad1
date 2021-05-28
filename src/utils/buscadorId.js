export const buscadorId = (compId, lista) => {
    let aux = lista.filter(item => Number(item.id) === Number(compId));
    return aux[0];    
}