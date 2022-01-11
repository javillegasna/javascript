//Javier Villegas
const pokemons = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
//Lista de pokémon que tengan nombres que comiencen con la letra "B"
const bListPkmn = pokemons.filter( pokemon => pokemon.name[0]=="B" );
console.log('Nombres que comiencen con la letra "B" \n',bListPkmn);

//Los identificadores
const pkmnIds = pokemons.map( pokemon => pokemon.id );
console.log("Los identificadores \n",pkmnIds);

//Una serie de objetos Pokémon donde la identificación es divisible por 3
const pkmnId3s = pokemons.filter(pokemon => pokemon.id % 3 === 0);
console.log("Pokémon donde la identificación es divisible por 3 \n",pkmnId3s);

//Una serie de objetos Pokémon que son del tipo "fuego"
const firePkmn = pokemons.filter(pokemon => pokemon.types.includes("fire"));
console.log('Pokémon que son del tipo "fuego" \n',firePkmn);

//Una variedad de objetos Pokémon que tienen más de un tipo
const duoType = pokemons.filter(pokemon => pokemon.types.length == 2);
console.log('Pokémon que tienen más de un tipo \n',duoType);

//Una matriz con solo los nombres de los Pokémon
const namePoke = pokemons.map(pokemon => pokemon.name);
console.log("matriz con solo los nombres de los Pokémon \n",namePoke);

//Una matriz con solo los nombres de Pokémon con una identificación mayor que 99
const pokeNameIdMore99 = pokemons.filter(pokemon=>pokemon.id>99).map(pokemon=>pokemon.name);
console.log("matriz con solo los nombres de Pokémon con una identificación mayor que 99 \n",pokeNameIdMore99);

//Una matriz con solo los nombres del pokémon cuyo único tipo es veneno
const poisonPkmn = pokemons.filter(pokemon => pokemon.types.length == 1 && pokemon.types == "poison");
console.log('matriz con solo los nombres del pokémon cuyo único tipo es veneno \n',poisonPkmn);

//una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
const duoTypeFlying = pokemons.filter(pokemon=>pokemon.types.length>1 && pokemon.types[1]=="flying")
console.log('matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador" \n',duoTypeFlying);

//un recuento de la cantidad de pokémon que son de tipo "normal"
const normalPkmn = pokemons.filter(pokemon => pokemon.types.includes("normal")).length;
console.log('recuento de la cantidad de pokémon que son de tipo "normal" \n',normalPkmn);

