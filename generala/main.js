const opciones = [1, 2, 3, 4, 5, 6];
const jugada = [];

class newJugada {
    constructor(dado) {
        this.dado = dado;
    }
}

const tirarDadoRamdom = document.getElementById("tirarDado");
console.log(tirarDadoRamdom);

tirarDadoRamdom.addEventListener("click", () => {
    let jugada = new newJugada();
    jugada.dado =Math.floor( Math.random(1,6) * opciones.length + 1);


    console.log(jugada);
});
