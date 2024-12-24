import GenresList from "../Constant/GenresList"
import MovieList from './MovieList'
const GenreMovieList = () => {
  return (
    <div>
      {GenresList.genere.map((item,index)=>index<=6 && (
        <div className="p-2 md:p-4 px-8 md:px-16" key={item.id}>
            <h2 className="text-white text-3xl font-bold ">{item.name}</h2>
            <MovieList genreId={item.id} index_={index}/>
        </div>
      ))}
    </div>
  )
}

export default GenreMovieList
