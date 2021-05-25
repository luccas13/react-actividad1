let navBar = [];

export const cambiarClases = (msg) => {
    navBar.push(document.getElementById('navHome'));
    navBar.push(document.getElementById('navPuesto'));
    navBar.push(document.getElementById('navEmpresa'));
    navBar.push(document.getElementById('navCiudad'));
    navBar.push(document.getElementById('navPais'));
    navBar.map(elemento => {return(
        elemento ? elemento.innerHTML === msg ? elemento.classList.add('select') : elemento.classList.remove('select') : null
    )})
}