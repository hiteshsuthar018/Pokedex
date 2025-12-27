import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { usePokemonList } from "./usePokemonList";
import { useLocation } from "react-router";

export const usePokemonDetail = () =>{
    const [pokemondata,setPokemondata] = useState({});
    const {id} = useParams();
    const location = useLocation();
    const downloadData = async() =>{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = {
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            height:response.data.height,
            weight:response.data.weight,
            types:response.data.types.map(el=>el.type.name)
        }
        setPokemondata(data);
        const type = data.types[0]
        setPokemonListState((data)=>({...data,url:`https://pokeapi.co/api/v2/type/${type}/`}));
    }
    const [pokemonListState,setPokemonListState] = usePokemonList(true);
    useEffect(()=>{
     downloadData();
    },[pokemonListState.url,location.pathname])
    return [pokemondata,pokemonListState];
}