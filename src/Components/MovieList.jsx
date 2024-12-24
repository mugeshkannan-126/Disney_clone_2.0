import { useEffect, useState, useRef } from "react";
import GlobalApi from "./../Services/GlobalApi";
import MovieCard from "./MovieCard";
import HrMovieCard from "./HrMovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const MovieList = ({ genreId,index_ }) => {
  const elementRef = useRef(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const slideRight = (element) => {
    element.scrollTo({
      left: element.scrollLeft + 500,
      behavior: "smooth", // Smooth scrolling
    });
  };

  const slideLeft = (element) => {
    element.scrollTo({
      left: element.scrollLeft - 500,
      behavior: "smooth", // Smooth scrolling
    });
  };

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovies(resp.data.results);
    });
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      <IoChevronBackOutline
        className={`text-white text-[50px] 
          left-0 absolute p-2 z-10 cursor-pointer 
          hidden md:block
          ${index_ % 3===0?'mt-[100px]':' mt-[150px]'}`}
        onClick={() => slideLeft(elementRef.current)}
      />

      {/* Right Arrow */}
      <IoChevronForwardOutline
        className="text-white text-[50px] mt-[100px] 
          right-0 absolute p-2 z-10 cursor-pointer 
          hidden md:block"
        onClick={() => slideRight(elementRef.current)}
      />

      {console.log(movies)}

      {/* Movie List */}
      <div
        ref={elementRef}
        className="flex overflow-x-auto space-x-8 scrollbar-hide scroll-smooth pt-4 pb-4 px-3"
      >
        {movies.map((item, index) =>
          index_ % 3 === 0 ? (
            <div className="shrink-0" key={item.id}>
              <HrMovieCard item={item} />
            </div>
          ) : (
            <div className="shrink-0" key={item.id}>
              <MovieCard item={item} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MovieList;