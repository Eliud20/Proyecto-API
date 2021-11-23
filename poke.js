fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then(res => res.json())
    .then(data => {
        ciclo(data);
    })
    .catch(error => console.log(error))

function obtenerPoke(poke) {
    let x = document.getElementById("tot");
    let h = document.createElement("div")
    h.className = "grid-item";
    h.innerHTML = poke.name;
    x.appendChild(h);
    console.log(poke.name);
}

function ciclo(data) {
    let vec = [];
    for (let i = 1; i <= 151; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(res => res.json())
            .then(data => {
                //console.log(`Id: ${data.id} Nombre: ${data.name}`);
                vec[i] = data.name, data.id;
            })
            .catch(error => console.log(error))
    }
    console.log(vec);

}