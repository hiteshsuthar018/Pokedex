import { Link } from "react-router"

const Pokemon = ({name, url,id}) => {

  return (
        <Link to={`/pokemon/${id}`}>
      <div className="h-72 w-60 flex flex-col items-center justify-center p-4 gap-2 hover:bg-gray-800 rounded-xl cursor-pointer">
        <img height={"100%"} src={url} alt={name} />
        <h3>{name}</h3>
    </div>
    </Link>
  )
}
export default Pokemon