export const buscadorId = (compId, lista) => {
    let aux;
    lista.map(item => {
        if (item.id == compId){
            aux = item;
        }
    });
    return aux;
}