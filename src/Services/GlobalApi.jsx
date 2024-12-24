import axios from 'axios'

// const movieBaseUrl="https://api.themoviedb.org/3"
// const api_key = '3d3a3521861f30858310d639e01daddd'
//https://api.themoviedb.org/3/discover/movie?api_key=3d3a3521861f30858310d639e01daddd
const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='3d3a3521861f30858310d639e01daddd'
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
const getMovieByGenreId=(id)=>
        axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}

// https://api.themoviedb.org/3/?api_key=3d3a3521861f30858310d639e01daddd
// https://api.themoviedb.org/3/discover/movie?api_key=3d3a3521861f30858310d639e01daddd



// https://api.themoviedb.org/3/discover/movie?api_key=3d3a3521861f30858310d639e01daddd&with_genres=16