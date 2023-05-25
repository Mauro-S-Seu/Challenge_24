//! ..........CHALLENGE 24 ..........

// Realice un programa donde un personaje abra 10 cofres, los cofres pueden contener: 10 de oro, 2 pociones de vida, nada.

// * a. Indique el oro final recolectado

// * b. Indique cuantas pociones de Vida obtuvo

// * c. Indique cuantos cofres vacíos hubo

// * d. Cada vez que abre un cofre indique qué saco

// Resuelto con SWITCH

let cofre = 0;
let moneda_oro = 0;
let pociones_vida = 0;
let cofre_vacio = 0;

for (let index = 1; index < 11; index++) {
    cofre = Math.round(Math.random()*2);

    switch (cofre){
        case 0:
            alert("Encontraste 10 monedas de oro en el cofre número "+ "'"+(index)+"'");
            moneda_oro = moneda_oro + 10;
            break;

        case 1:
            alert("Al abrir el cofre, te ganaste "+(pociones_vida)+" posicion/es de vida en el cofre número "+"'"+(index)+"'")
            pociones_vida = pociones_vida + 2;
            break;

        default:
            alert("No obtuviste nada en el cofre número "+"'"+(index)+"'"+" elegido");
            cofre_vacio = cofre_vacio + 1;
            break;
    }
}

alert(`El personaje encontró:\n\n${moneda_oro} monedas de oro.\n${pociones_vida} pociones de vida.\n${cofre_vacio} cofre(s) vacío(s).\n\nDe los 10 cofres abiertos. `)


// Resuelto con IF ELSE

/*
let moneda_oro = 0;
let pociones_vida = 0;
let cofre_vacio = 0;

for (let index = 1; index < 11; index++)
{
    let cofre = Math.round(Math.random() * 3);

    if(cofre === 0){
        moneda_oro = moneda_oro + 10;
        alert("Encontraste 10 monedas de oro en el cofre número "+"'"+(index)+"'");
    }else{
        if(cofre === 1){
            pociones_vida = pociones_vida + 2;
            alert("Al abrir el cofre, te ganaste "+(pociones_vida)+" posicion/es de vida en el cofre número "+"'"+(index)+"'");
        }else{
            if(cofre === 2){
                cofre_vacio = cofre_vacio + 1;
                alert("No obtuviste nada en el cofre número "+"'"+(index)+"'"+" elegido");
            }
        }
    }
}

alert("Al final obtuviste: \n\n"+(moneda_oro)+(" monedas de oro. \n" + (pociones_vida)+(" pociones de vida. \n" + (cofre_vacio)+(" cofres vacíos.\n\nDe los 10 cofres abiertos."))))
*/
