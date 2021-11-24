var prueb = [];
var grid = document.getElementById("tot");
var contenedor = document.querySelector('div');

function obtenerPoke(poke) {
    let div = document.createElement("div")
    div.className = "grid-item";

    let img = document.createElement('img');
    img.src = poke.sprites.front_default;
    img.className = "ima";

    const nom = poke.name;

    function capitalizeOnlyFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let salto = document.createElement('br');
    div.innerHTML = `#${poke.id} <br>${capitalizeOnlyFirst(nom)}`;

    grid.appendChild(div);
    div.appendChild(salto);
    div.appendChild(img);
    div.appendChild(salto);
}

function pedirPok() {
    for (let i = 1; i <= 153; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(res => res.json())
            .then(data => {
                obtenerPoke(data);
            })
            .catch(error => console.log(error))
    }
}
pedirPok();
console.log(prueb);