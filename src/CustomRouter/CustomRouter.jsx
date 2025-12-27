import { Route, Routes } from "react-router"
import Pokedex from "../component/Pokedex/Pokedex"
import PokemonData from "../component/PokemonData/PokemonData"
import { useState } from "react"
import Search from "../component/Search/Search"

const CustomRouter = () => {
  const [searchTerm , setSearchTerm] = useState();
  return (
    <>
       <div className="m-12">
        <h1 className="text-center text-6xl p-9 tracking-[0.5rem]">Pokedex</h1>
        <Search setSearchTerm={setSearchTerm}/>
       </div>
    <Routes>
        <Route path="/" element={<Pokedex searchTerm={searchTerm}/>}/>
        <Route path="/pokemon/:id" element={<PokemonData/>}/>
    </Routes>
    </>
  )
}

export default CustomRouter