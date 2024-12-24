import { useEffect, useRef, useState } from "react";
import GlobalApi from './../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const Image_Url = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null); // Corrected useRef

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110; // Scroll 800px to the right
    };

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110; // Scroll 800px to the left
    };

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        });
    };

    return (
        <div className="relative">
            <HiChevronLeft
                className="hidden md:block text-white text-[30px] absolute left-0 mx-8 mt-[155px] cursor-pointer"
                onClick={() => sliderLeft(elementRef.current)}
            />
            <HiChevronRight
                className="hidden md:block text-white text-[30px] absolute right-0 mx-8 mt-[155px] cursor-pointer"
                onClick={() => sliderRight(elementRef.current)}
            />
            <div className="flex overflow-x-auto px-16 py-4 scrollbar-hide scroll-smooth space-x-10" ref={elementRef}>
                {movieList.map((item, index) => (
                    <div 
                        key={item.id || index} 
                        className="container h-[200px] w-[250px] min-w-[250px] md:min-w-[600px] md:h-[390px] lg:min-w-full flex bg-gradient-to-r from-gray-800 via-gray-900 to-black p-5 rounded-lg shadow-lg hover:scale-95 transition-transform duration-300 ease-in-out"
                    >
                        <img
                            src={`${Image_Url}${item.backdrop_path}`}
                            className="md:h-[345px] h-[150px] w-[250px] object-cover rounded-md shadow-md"
                            alt={item.title || "Movie Image"}
                        />
                        <div className="md:h-[345px] ml-5 flex flex-col justify-center text-white">
                            {/* Title */}
                            <h2 className="hidden md:block text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                                {item.title || "Untitled Movie"}
                            </h2>
                            
                            {/* Overview */}
                            <p className="hidden md:block text-sm md:text-xl text-gray-300 leading-relaxed mt-2">
                                {item.overview || "No description available for this movie."}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;