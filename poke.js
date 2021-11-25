var prueb = [];
var grid = document.getElementById("tot");
var contenedor = document.getElementsByClassName('grid-item');
var id = 1;
var modal = document.getElementById("mod");
var dentro = document.getElementById("info");
var btn = document.getElementById("boton");
var span = document.getElementsByClassName("close")[0];
var input = document.querySelector("input");
var ima = document.getElementById("imag");


function muestraModal(poke) {
    ima.src = poke.sprites.front_default;
    dentro.innerHTML = `${capitalizar(poke.name)}
                 <br> Tipo(s): ${capitalizar(getTypes(poke))}
                 <br> Peso: ${poke.weight} lbs
                 <br> Altura: ${poke.height} ft
                 <br> Movimientos: ${capitalizar(getAbilities(poke))}`;
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

function buscarPoke(poke) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        .then(res => res.json())
        .then(data => {
            muestraModal(data);
        })
        .catch(error => console.log(error))
}


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

function capitalizar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getTypes(poke) {
    let cad = "";
    for (let i = 0; i < poke.types.length; i++) {
        cad += capitalizar(poke.types[i].type.name) + ", ";
    }
    return cad.slice(0, -2);
}

function getAbilities(poke) {
    let cad = "";
    for (let i = 0; i < 10; i++) {
        cad += "<li>" + capitalizar(poke.moves[i].move.name) + "</li>";
    }
    return cad.slice(0, -2);
}

function imprimirPoke(poke) {
    let div = document.createElement("div")
    div.className = "grid-item";

    let div2 = document.createElement("div");
    div2.innerHTML = `Tipo(s): <br>${capitalizar(getTypes(poke))}`;

    let but = document.createElement('button');
    but.className = "bot";
    but.id = `${id}`;
    id++;
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


pedirPok();
console.log(prueb);