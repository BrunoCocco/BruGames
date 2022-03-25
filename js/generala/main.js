const opciones = [1, 2, 3, 4, 5, 6];
const tiradaDeDado = [];

class newJugada {
    constructor(dado) {
        this.dado = dado;
    }
}

const tirarDadoRamdom = document.getElementById("tirarDado");
console.log(tirarDadoRamdom);

tirarDadoRamdom.addEventListener("click", () => {
    for(i=0; i<5; i++){
    let jugada = new newJugada();  
    jugada.dado = Math.floor( Math.random(1,6) * opciones.length + 1);

    tiradaDeDado.push(jugada)
}
console.log(tiradaDeDado);

// if(tiradaDeDado.length > 6){

//     console.log("no puede trar de nuevo")

// }
});
