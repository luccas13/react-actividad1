export const buscadorId = (compId, lista) => {
    let aux = lista.filter(item => Number(item.id) === Number(compId));
    console.log(aux);
    return aux[0] ? aux[0] : {name: ' - '};    
}