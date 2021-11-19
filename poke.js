const request = require("request");


function getPokebyId(id){
    var url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    console.log(url);
    request(url, function(error, response, body){
        console.log(response.statusCode);
        if(response.statusCode == 200){
            let pokemon = JSON.parse(body);
            console.log(pokemon.id);
            for(let i=0; i<pokemon.abilities.length; i++){
                console.log(pokemon.abilities[i].ability.name);
            }
            console.log(pokemon.name);
        } else {
            console.log("Error" + error);
        }
    })
}



getPokebyId(1);