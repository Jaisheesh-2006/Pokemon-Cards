import React, { useEffect, useState } from "react";
import PokeCard from "./PokeCard";

const Pokemon = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading]= useState(true)
  const [error,setError]=useState("")
  const [search,setSearch]=useState("")
  const API = "https://pokeapi.co/api/v2/pokemon?limit=124";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const detailedPokeRes = data.results.map(async (currData) => {
        const innerRes = await fetch(currData.url);
        const innerData = await innerRes.json();
        return innerData;
      });
      const detailedPokeData = await Promise.all(detailedPokeRes);
      setData(detailedPokeData);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false) 
      setError(error)
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);
  
  //todo Implementing search functionality
  const searchData=data.filter((curData)=>curData.name.toLowerCase().includes(search.toLowerCase()))


  if(loading) return <div><h1>Loading...</h1></div>
  if(error) return <div><h1>{error.message}</h1></div>
  return (
    <section className="container">
      <header>
        <h1>Lets catch Pokemon</h1>
      </header>
      <div className="pokemon-search">
        <input type="text" placeholder="search pokemon" value={search} onChange={(e)=>setSearch(e.target.value)} />
      </div>
      <div>
        <ul className="cards">
          {searchData.map((currData) => {
            return <PokeCard key={currData.id} pokeData={currData} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Pokemon;
