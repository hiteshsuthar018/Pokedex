import axios from "axios";
import { useEffect, useState } from "react";

export const usePokemonList = (type) => {
    // Hook implementation goes here
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        prevUrl: null,
        nextUrl: null,
        url:"https://pokeapi.co/api/v2/pokemon"
    });

    const downloadList = async () => {
        const response = await axios.get(pokemonListState.url);
        const data = response.data;
        const { results, next, previous } = data;
        setPokemonListState((data) => ({ ...data, nextUrl: next, prevUrl: previous }));
       let res=[];
        if(!type){
        res = results.map(async el => {
            const pokemon = await axios.get(el.url);
            return {
                id: pokemon.data.id,
                name: pokemon.data.name,
                url: pokemon.data.sprites.other.dream_world.front_default
            }
        })
      
    }
    else{
         res = data.pokemon && data?.pokemon?.map(async el => {
            const pokemon = await axios.get(el.pokemon.url);
            return {
                id: pokemon.data.id,
                name: pokemon.data.name,
                url: pokemon.data.sprites.other.dream_world.front_default
            }
        })
    }
    if (!res) return;
    const finalList =  (await axios.all(res)).slice(0, 20);
    setPokemonListState((data) => ({ ...data, isLoading: false ,pokemonList: finalList }));
}
    useEffect(() => {
        downloadList();
    }, [pokemonListState.url])
    
    
    return [pokemonListState, setPokemonListState];

}