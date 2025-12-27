import { useDebounce } from "../../hooks/useDebounce"

const Search = ({ setSearchTerm }) => {
  const x = (e)=>setSearchTerm(e.target.value)
  return (
    <div className="h-14 w-full flex items-center justify-center">
      <input
        className="p-11 tracking-[0.4rem] h-full w-[60%]  text-xl border outline-none"
        type="text"
        placeholder="Enter the pokemon name..."
        onChange={useDebounce(x)}
      />
    </div>
  )
}

export default Search