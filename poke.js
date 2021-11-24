<<<<<<< HEAD
/*fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then(res => res.json())
    .then(data => {
        ciclo(data);
    })
    .catch(error => console.log(error))*/
=======
var prueb = [];
>>>>>>> 64bd2bd4aa606d52703feb1300c9574954e770f2

function obtenerPoke(poke) {
    let x = document.getElementById("tot");
    let h = document.createElement("div")
    let img = document.createElement('img');
    let salto = document.createElement('br');
    img.src = poke.sprites.front_default;
    h.className = "grid-item";
<<<<<<< HEAD
    h.id = "hola"
=======
    img.className = "ima";
>>>>>>> 64bd2bd4aa606d52703feb1300c9574954e770f2
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

