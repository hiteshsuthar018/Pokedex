import { Route, Routes } from "react-router"
import Pokedex from "../component/Pokedex/Pokedex"
import PokemonData from "../component/PokemonData/PokemonData"

const CustomRouter = () => {
  return (
    <>
        <h1 className="text-center text-6xl p-9 tracking-[0.5rem]">Pokedex</h1>
    <Routes>
        <Route path="/" element={<Pokedex/>}/>
        <Route path="/pokemon/:id" element={<PokemonData/>}/>
    </Routes>
    </>
  )
}

export default CustomRouter