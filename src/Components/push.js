const axios = require("axios");
const { Pokemon, Type } = require("../db");

////////////////////////////////////////////////// FUNCION PARA LA API DE POKEMON ///////////////////////////////////////

//ME TRAIGO LOS POKEMONES /////
const getApiInfo = async () => {
  try {
    const apiUrl = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=30"
    ); /// primera req a la api

    const pokemonesUrl = apiUrl.data.results.map((poke) => poke.url); //segunda req a la url del pokemon

    const fullDataPokemones = await Promise.all(
      pokemonesUrl.map((poke) => axios.get(poke)) //aplico el meto promis.all para que se aga al mismo tiempo
    );

    let pokeMap = fullDataPokemones.map((poke) => {
      // extraigo toda la informacion que fue requeriada
      let pokeTipos = poke.data.types.map((types) => types.type.name); // tambien los tipo
      let obj = {
        id: poke.data.id,
        name: poke.data.name,
        life: poke.data.stats[0].base_stat,
        atack: poke.data.stats[1].base_stat,
        defensa: poke.data.stats[2].base_stat,
        speed: poke.data.stats[5].base_stat,
        height: poke.data.height,
        weight: poke.data.weight,
        img: poke.data.sprites.other["official-artwork"].front_default,
        imgFront:
          poke.data.sprites.versions["generation-v"]["black-white"].animated
            .front_default, //fui mas adentro en la api para conseguir el git y no una imagen
        imgFrontShiny:
          poke.data.sprites.versions["generation-v"]["black-white"].animated
            .front_shiny,
        icons:
          poke.data.sprites.versions["generation-viii"].icons.front_default, //fui mas adentro en la api para conseguir el git y no una imagen

        //fui mas adentro en la api para conseguir el git y no una imagen
        tipo: pokeTipos,
      };
      return obj;
    });

    return pokeMap;
  } catch (error) {
    console.log(error);
  }
};

////////////////////////////////////////////////////////FUNCIONES PARA CREAR MI POKE EN BASE DE DATO///////////////////////////////////////

//FUNCION PARA CREAR MI POKEMON
const postCreatePokemon = async (pokeData) => {
  try {
    const {
      name,
      life,
      atack,
      defensa,
      speed,
      height,
      weight,
      img,
      imgFront,
      imgFrontShiny,
    } = pokeData; // los dato que voy a requerir en from para crear el pokemon
    const newPokemon = await Pokemon.create({
      //creo mi pokemon
      name,
      life,
      atack,
      defensa,
      speed,
      height,
      weight,
      img,
      imgFront,
      imgFrontShiny,
    });
    /* const newPokeType = await Type.findAll({
      where: { nameType: name },
    }); */
    // let newPokemonTwo = newPokemon.addType(newPokeType);

    return newPokemon;
  } catch (error) {
    console.log(error);
  }
};

//ME TRAIGO TODO LOS POKEMONES DE MI BASE DE DATO

const allGetPokeBase = async () => {
  try {
    const Pokemons = await Pokemon.findAll({
      include: Type, // la magia del hermoso include ajajaj
    });
    return Pokemons;
  } catch (error) {
    console.log(error);
  }
};
/////TODO LOS POKEMONES CREADO  Y DE BASE DE DATO
const getAllApiBD = async () => {
  try {
    const dataApi = await getApiInfo();
    const dataBD = await allGetPokeBase();
    return [...dataApi, ...dataBD]; // uno los array
  } catch (error) {
    console.log(error);
  }
};

/////////////////////////////////PUT POKEMON          NO FUNCIONA  U:U//////////

const putPokemon = async (actualizarPokemonCreado) => {
  const { id, name, life, atack, defensa, speed, height, weight, img } =
    actualizarPokemonCreado;
  if (
    !id ||
    !name ||
    !life ||
    !atack ||
    !defensa ||
    !speed ||
    !height ||
    !weight ||
    !img ||
    !Type.name
  ) {
    console.log(postCreatePokemon);
    return "podes crear tu pokemon aca   http://localhost:3001/api/Pokemon/crear";
  }

  actualizarPokemonCreado = await Pokemon.find(
    poke.id === id || poke.name === name
  );
  if (!actualizarPokemonCreado) {
    return postCreatePokemon;
  }

  actualizarPokemonCreado.name = name;
  actualizarPokemonCreado.life = life;
  actualizarPokemonCreado.atack = atack;
  actualizarPokemonCreado.defensa = defensa;
  actualizarPokemonCreado.speed = speed;
  actualizarPokemonCreado.height = height;
  actualizarPokemonCreado.weight = weight;
  actualizarPokemonCreado.img = img;
  actualizarPokemonCreado.Type = Type.name;
  console.log(actualizarPokemonCreado);
  return actualizarPokemonCreado;
};

module.exports = {
  getApiInfo,
  putPokemon,
  postCreatePokemon,
  allGetPokeBase,
  getAllApiBD,
};
