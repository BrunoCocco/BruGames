const opciones= ["piedra","papel","tijera"]

//TODO: 

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");



piedra.addEventListener("click", ()=>{
    const user = "piedra"
    console.log(`usuario elige ${user}`)
    const random = Math.floor(Math.random()*opciones.length);
    let elecionPc = opciones[random]
    console.log(`pc elige ${elecionPc}`);
    if (elecionPc === user) {
        console.log("empate")
    }
    else if (elecionPc == "piedra" && user == "papel", elecionPc == "papel" && user == "tijera", elecionPc == "tijera" && user == "piedra"){
        console.log("usuario Gana")
    } else {
        console.log("usuario pierde")
    }
})



papel.addEventListener("click", ()=>{
    const user = "piedra"
    const random = Math.floor(Math.random()*opciones.length);
    let elecionPc = opciones[random]
    console.log(elecionPc);

    if (elecionPc === user) {
        console.log("empate")
    }
    else if (elecionPc == "piedra" && user == "papel", elecionPc == "papel" && user == "tijera", elecionPc == "tijera" && user == "piedra"){
        console.log("usuario Gana")
    } else {
        console.log("usuario pierde")
    }
})


tijera.addEventListener("click", ()=>{
    const user = "piedra"
    const random = Math.floor(Math.random()*opciones.length);
    let elecionPc = opciones[random]
    console.log(elecionPc);

    if (elecionPc === user) {
        console.log("empate")
    }
    else if (elecionPc == "piedra" && user == "papel", elecionPc == "papel" && user == "tijera", elecionPc == "tijera" && user == "piedra"){
        console.log("usuario Gana")
    } else {
        console.log("usuario pierde")
    }
})