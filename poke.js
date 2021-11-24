var prueb = [];

function obtenerPoke(poke) {
    let x = document.getElementById("tot");
    let h = document.createElement("div")
    let img = document.createElement('img');
    let salto = document.createElement('br');
    img.src = poke.sprites.front_default;
    h.className = "grid-item";
    img.className = "ima";
    h.innerHTML = poke.name;
    x.appendChild(h);
    h.appendChild(img);
    img.appendChild(salto);
    console.log(poke.name);
}

function pedirPok() {
    for (let i = 1; i < 152; i++) {
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

