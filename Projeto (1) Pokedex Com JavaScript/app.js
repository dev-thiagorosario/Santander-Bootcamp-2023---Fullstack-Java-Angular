const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';

// Função para converter tipos de Pokémon para elementos HTML <li>
function convertPokemonTypesToLi(pokemonTypes) {
    return pokemonTypes.map(typeSlot => `<li class="type">${typeSlot.type.name}</li>`).join('');
}

// Função para converter dados de Pokémon para um elemento HTML <li>
function convertPokemonToLi(pokemon) {
    // Utiliza a função convertPokemonTypesToLi para gerar a lista de tipos de Pokémon
    const typesHtml = convertPokemonTypesToLi(pokemon.types);
    
    return `
    <li class="pokemon Grass">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="type">
                ${typesHtml}
            </ol>
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" />
        </div>
    </li>`;
}

// Busca os pokémons da PokeAPI e os exibe na página
const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then(pokemons => {
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('');
});
