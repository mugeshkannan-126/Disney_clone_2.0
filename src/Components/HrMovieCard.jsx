
const Image_Url = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({item}) => {
  return (
    <div className="hover:scale-110 transition-all duration-150 ease-in md:py-4">
        <img 
        src={Image_Url+item.backdrop_path} 
        alt=""
        className="w-[110px] md:w-[300px] h-auto rounded-lg hover:scale-90
        hover:border-[3px] border-gray-400 cursor-pointer transition-all duration-150 ease-in"/>
        <h2 className="text-white text-xl font-bold w-[110px] md:w-[260px] pt-4">{item.title}</h2>
    </div>
  )
}

export default HrMovieCard
