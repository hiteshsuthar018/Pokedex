import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { usePokemonDetail } from "../../hooks/usePokemonDetail";
import { usePokemonList } from "../../hooks/usePokemonList";
import Pokemon from "../Pokemon/Pokemon";


const PokemonData = ({searchTerm}) => {
    const [pokemondata,pokemonListState] = usePokemonDetail(searchTerm);
  return (
    <div>

    <div className="h-96 w-[70vw] flex gap-14 bg-blue-950 rounded-3xl m-auto p-4">
        <img src={pokemondata.image} alt="" />
        <div className="flex flex-col w-full gap-4 text-4xl tracking-[0.4rem] font-thin justify-center ">
            <h1 className="text-6xl">Details</h1>
            <div>name: {pokemondata.name}</div>
            <div>height: {pokemondata.height}</div>
            <div>weight: {pokemondata.weight}</div>
            <div className="flex gap-2">
                {pokemondata.types && pokemondata.types.map(t=><div key={t} className="bg-black p-3 rounded-2xl">{t}</div>)}
            </div>
        </div>

    </div>
    <div className="mt-10 flex justify-center flex-col items-center gap-6">
        <h1 className="text-4xl">More  {pokemondata.types? pokemondata?.types[0]:""}type pokemon</h1>
        <div className="flex flex-wrap justify-around gap-3">
        {pokemonListState.isLoading? "loading...":pokemonListState.pokemonList.slice(0,20).map((el)=>
        <div key={el.id}>
           <Pokemon  name={el.name} url={el.url} id={el.id}/>
        </div>
    )}
    </div>
    </div>
    </div>
  )
}
export default PokemonData