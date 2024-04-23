const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeApiDetails) {
  const  pokemon = new Pokemon();
  pokemon.number =  pokeApiDetails.order;
  pokemon.name = pokeApiDetails.name;

  const types  =  pokeApiDetails.type.map((typeSlot) => typeSlot.type.name);
  const [] = types

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.pokemon.sprites.other.dream_world.front_default

}

// Função para obter detalhes de um Pokémon específico.
pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then(response => response.json()) 
    .then(pokemonDetails => {
      // Adiciona as informações do Pokémon às propriedades da variável
      pokemonDetails.type = pokeApi.determineType(pokemonDetails);
      return pokemonDetails;
    });
};

// Função para obter uma lista de Pokémon, com paginação.
pokeApi.getPokemons = (pageSize = 10, pageNumber = 1) => {
  const offset = pageSize * (pageNumber - 1);
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pageSize}`;

  return fetch(url)
    .then(response => response.json())
    .then(jsonBody => jsonBody.results)
    .then(pokemons => Promise.all(pokemons.map(pokemon => pokeApi.getPokemonDetail(pokemon))))
    .then(details => details.flat()); 
};


pokeApi.determineType = (pokemon) => {
  return pokemon.types.map(typeInfo => typeInfo.type.name).join(', ');
};

