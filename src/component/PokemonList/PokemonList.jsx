import Pokemon from "../Pokemon/Pokemon";
import { usePokemonList } from "../../hooks/usePokemonList";
import { useEffect } from "react";


const PokemonList = () => {
    
    // console.log("pokemonListState in PokemonList",usePokemonList);
    const [pokemonListState,setPokemonListState] = usePokemonList(false);
    

  return (
    <div>
    <div className="flex flex-wrap justify-around gap-3">
        {pokemonListState.isLoading? "loading...":
        pokemonListState.pokemonList.map((el)=><div key={el.id}>
           <Pokemon  name={el.name} url={el.url} id={el.id}/>
           
        </div>)}
    </div>
        <div className="flex w-full justify-center gap-4 p-6">
            <button 
            className={`p-4 border rounded-xl px-10 cursor-pointer ${pokemonListState.prevUrl==null&& "opacity-50 cursor-not-allowed"}`} 
            disabled={pokemonListState.prevUrl==null} 
            onClick={()=>setPokemonListState((data)=>({...data,url:data.prevUrl}))} >
                Prev
                </button>
            <button 
            className={`p-4 border rounded-xl px-10 cursor-pointer ${pokemonListState.nextUrl==null&& "opacity-50 cursor-not-allowed"}`} 
            disabled={pokemonListState.nextUrl==null}  
            onClick={()=>setPokemonListState((data)=>({...data,url:data.nextUrl}))} >
                Next
                </button>
           </div>
    </div>
  )
}

export default PokemonList