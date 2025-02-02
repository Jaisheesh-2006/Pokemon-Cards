import React from "react";

const PokeCard = ({ pokeData }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokeData.sprites.other.dream_world.front_default}
          alt={pokeData.id}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{pokeData.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokeData.types
            .map((currData) => {
              return currData.type.name;
            })
            .join(", ")}
        </p>
      </div>
      <div className="grid-three-cols">
        <p className="pokemon-info">
        <span>Height:</span>{pokeData.height}
        </p>
        <p className="pokemon-info">
        <span> Weight:</span> {pokeData.weight}
        </p>
        <p className="pokemon-info">
        <span>Speed: </span>{pokeData.stats[5].base_stat}
        </p>
      </div>
      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{pokeData.base_experience}</p>
          <span>Experience</span>
        </div>
        <div className="pokemon-info">
          <p>{pokeData.stats[1].base_stat}</p>
          <span>Attack</span>
        </div>
        <p>{pokeData.abilities.map((abilityInfo)=> abilityInfo.ability.name).slice(0,1)} <span>Abilities</span></p>
      </div>
    </li>
  );
};

export default PokeCard;
