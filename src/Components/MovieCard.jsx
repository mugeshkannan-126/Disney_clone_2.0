
const Image_Url = "https://image.tmdb.org/t/p/original";
const MovieCard = ({item}) => {
  return (
    <>
        <img 
        src={Image_Url+item.poster_path} 
        alt=""
        className="w-[150px] md:w-[200px] lg:[250px] h-auto rounded-lg hover:scale-110
        hover:border-[3px] border-gray-400 cursor-pointer transition-all duration-150 ease-in"/>
         <h2 className="text-white text-xl font-bold w-[110px] md:w-[260px] pt-4">{item.title}</h2>
    </>
  )
}


export default MovieCard
