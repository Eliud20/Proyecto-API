var prueb = [];
var grid = document.getElementById("tot");
var contenedor = document.getElementsByClassName('grid-item');
var id = 0;
var modal = document.getElementById("mod");
var btn = document.getElementById("boton");
var span = document.getElementsByClassName("close")[0];
var input = document.querySelector("input");
var a = "";


btn.onclick = function () {
    modal.style.display = "block";
    let div = document.createElement("div");
    div.innerHTML = buscarPoke(input.value);
    console.log(buscarPoke(input.value));
    modal.appendChild(div);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function buscarPoke(poke) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        .then(res => res.json())
        .then(data => {
            a = data.name;
            return a;
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

function capitalizeOnlyFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getTypes(poke) {
    let cad = "";
    for (let i = 0; i < poke.types.length; i++) {
        cad += poke.types[i].type.name + ", ";
    }
    return cad.slice(0, -2);
}

function imprimirPoke(poke) {
    let div = document.createElement("div")
    div.className = "grid-item";

    let div2 = document.createElement("div");
    div2.innerHTML = `Tipo(s): <br>${capitalizeOnlyFirst(getTypes(poke))}`;

    let but = document.createElement('button');
    but.className = "bot";
    but.id = `${id}`;
    id++;

    let img = document.createElement('img');
    img.src = poke.sprites.front_default;
    img.className = "ima";

    const nom = poke.name;

    let salto = document.createElement('br');
    div.innerHTML = `#${poke.id} <br>${capitalizeOnlyFirst(nom)}<br>`;

    grid.appendChild(but);
    but.appendChild(div);
    div.appendChild(salto);
    div.appendChild(img);
    div.appendChild(salto);
    div.appendChild(div2);

}


pedirPok();
console.log(prueb);