import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/Search"

const Pokedex = () => {
  return (
    <div className="flex flex-col gap-12 ">
        
        <Search/>
        <PokemonList/>
    </div>
  )
}

export default Pokedex