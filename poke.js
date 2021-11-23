const request = require("request");
const vec = [];

function getPokebyId(id) {
    var url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    console.log(url);
    var pok;
    request(url, function (error, response, body) {
        console.log(response.statusCode);
        if (response.statusCode == 200) {
            var pokemon = JSON.parse(body);
            console.log(pokemon.name);
            document.getElementById("nom1").innerHTML = (pokemon.name).JSON.parse;
            for (let i = 0; i < pokemon.abilities.length; i++) {
                vec[i] = pokemon.abilities[i].ability.name;
                console.log(vec[i]);
            }
        } else {
            console.log("Error" + error);
        }
        pok = pokemon;
    })
    return pok;
}

getPokebyId(1);