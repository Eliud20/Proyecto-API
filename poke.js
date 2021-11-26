var prueb = [];
var grid = document.getElementById("tot");
var contenedor = document.getElementsByClassName('grid-item');
var id = "";
var modal = document.getElementById("mod");
var dentro = document.getElementById("info");
var btn = document.getElementById("boton");
var span = document.getElementsByClassName("close")[0];
var input = document.querySelector("input");
var ima = document.getElementById("imag");
var cont = document.querySelector(".contenido");


function capitalizar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//Funcion que obtiene los pokemones de la api
function pedirPok() {
    for (let i = 1; i <= 155; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(res => res.json())
            .then(data => {
                imprimirPoke(data);
            })
            .catch(error => console.log(error))
    }
}

//Funcion para buscar pokemon por nombre
function buscarPoke(poke) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        .then(res => res.json())
        .then(data => {
            muestraModal(data);
        })
        .catch(error => console.log(error))
}


function getTypes(poke) {
    let cad = "";
    for (let i = 0; i < poke.types.length; i++) {
        cad += capitalizar(poke.types[i].type.name) + ", ";
    }
    return cad.slice(0, -2);
}



function getMoves(poke) {
    let cad = "";
    for (let i = 0; i < 10; i++) {
        cad += "<li>" + capitalizar(poke.moves[i].move.name) + "</li>";
    }
    return cad;
}


function getStats(poke) {
    let stat = "";
    for (let x = 0; x < 3; x++) {
        stat += `<li> ${poke.stats[x].base_stat} ${poke.stats[x].stat.name} </li>`;
    }
    return stat;
}


//Funcion que inserta la informacion creando divs dentro del grid container, se llama
//cada vez que se pide un pokemon
function imprimirPoke(poke) {
    let div = document.createElement("div")
    div.className = "grid-item";

    let div2 = document.createElement("div");
    div2.innerHTML = `Tipo(s): <br>${capitalizar(getTypes(poke))}`;

    let but = document.createElement('button');
    but.className = "bot";
    id = poke.name;
    but.id = `${id}`;

    //Funcion que muestra en el modal la informacion adicional del pokemon usando el id del div
    //que es el nombre del pokemon
    but.onclick = function () {
        buscarPoke(but.id);
        modal.style.display = "block";
    }

    let img = document.createElement('img');
    img.src = poke.sprites.front_default;
    img.className = "ima";

    const nom = poke.name;

    let salto = document.createElement('br');
    div.innerHTML = `#${poke.id} <br>${capitalizar(nom)}<br>`;

    grid.appendChild(but);
    but.appendChild(div);
    div.appendChild(salto);
    div.appendChild(img);
    div.appendChild(salto);
    div.appendChild(div2);

}

function muestraModal(poke) {
    ima.src = poke.sprites.front_default;
    dentro.innerHTML = `${(poke.name).toUpperCase()}
                 <br> Tipo(s): ${capitalizar(getTypes(poke))}
                 <br> Peso: ${poke.weight} lbs
                 <br> Altura: ${poke.height} ft
                 <ul>
                  Estadisticas: ${getStats(poke)} <br>
                  Movimientos: ${capitalizar(getMoves(poke))}
                 </ul>`;
    cont.style.background = sacaBack(poke);
}

btn.onclick = function () {
    modal.style.display = "block";
    buscarPoke((input.value).toLowerCase());
}


span.onclick = function () {
    modal.style.display = "none";
    input.value = "";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        input.value = "";
    }
}

//Funcion para poner background de acuerdo al primer tipo de la lista
function sacaBack(poke) {

    switch (poke.types[0].type.name) {
        case "grass":
            return "linear-gradient(90deg, rgba(56,148,27,0.8267682072829132) 8%, rgba(56,148,27,1) 28%, rgba(56,148,27,1) 69%, rgba(56,148,27,0.7595413165266106) 100%)";

        case "fire":
            return "linear-gradient(90deg, rgba(255,57,39,0.6334908963585435) 0%, rgba(255,57,39,1) 20%, rgba(255,19,13,1) 67%, rgba(255,0,0,0.5298494397759104) 100%)";

        case "bug":
            return "linear-gradient(90deg, rgba(214,255,39,0.8911939775910365) 0%, rgba(156,184,38,0.7819502801120448) 43%, rgba(230,169,39,0.7679446778711485) 86%)";

        case "water":
            return "linear-gradient(90deg, rgba(28,84,221,0.639093137254902) 0%, rgba(28,88,221,1) 20%, rgba(27,107,221,1) 85%, rgba(27,116,221,0.44861694677871145) 100%";

        case "ice":
            return "linear-gradient(90deg, rgba(28,84,221,0.639093137254902) 0%, rgba(28,88,221,1) 20%, rgba(27,107,221,1) 85%, rgba(27,116,221,0.44861694677871145) 100%";

        case "electric":
            return "linear-gradient(90deg, rgba(255,205,39,0.8911939775910365) 0%, rgba(227,181,31,0.8799894957983193) 45%, rgba(113,86,0,0.7679446778711485) 91%)";

        case "poison":
            return "linear-gradient(90deg, rgba(162,39,255,0.8911939775910365) 0%, rgba(76,0,113,0.6166841736694677) 100%)";

        case "psychic":
            return "linear-gradient(90deg, rgba(250,124,239,0.8575805322128851) 0%, rgba(113,0,112,0.6839110644257703) 100%)";

        case "fighting":
            return "linear-gradient(90deg, rgba(121,93,56,0.773546918767507) 0%, rgba(161,128,83,0.9472163865546218) 100%)";

        case "rock":
            return "linear-gradient(90deg, rgba(65,62,59,0.8099614845938375) 0%, rgba(142,132,118,0.908000700280112) 100%)";

        case "ground":
            return "linear-gradient(90deg, rgba(60,37,15,1) 0%, rgba(164,110,34,0.908000700280112) 100%)";

        case "ghost":
            return "linear-gradient(90deg, rgba(227,215,202,1) 0%, rgba(163,37,217,0.908000700280112) 100%)";

        default:
            return "linear-gradient(90deg, rgba(242,223,108,0.9248074229691877) 0%, rgba(237,231,95,0.8603816526610644) 100%)";
    }
}


pedirPok();