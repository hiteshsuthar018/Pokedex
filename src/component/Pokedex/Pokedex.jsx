import PokemonData from "../PokemonData/PokemonData"
import PokemonList from "../PokemonList/PokemonList"

const Pokedex = ({searchTerm}) => {
  return (
    <div className="flex flex-col gap-12 ">
        
        {searchTerm?<PokemonData key={searchTerm} searchTerm={searchTerm}/>:<PokemonList/>}
    </div>
  )
}

export default Pokedex