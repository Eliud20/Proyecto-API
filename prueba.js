const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonConta = document.querySelector(".pokemon-container");

/* button.addEventListener('click', (e) => {
    e.preventDefault();
    traerPoke(input.value);
}) */

function traerPoke(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then(data => {
            inserta(data);
        });
}
function crearPoke(pokemon) {
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);

    //pokemonConta.appendChild(div);
}

function inserta(poke) {
    var a = document.getElementById('1');
    a.innerHTML = poke.name;
    var c = document.getElementById('2');
    c.innerHTML = poke.name;
    const img = document.createElement('img');
    img.src = poke.sprites.front_default;
    const img2 = document.createElement('img');
    img2.src = poke.sprites.front_default;
    a.appendChild(img2);
    c.appendChild(img);
}

traerPoke("1");