import React,{useEffect,useState} from 'react'
import MovieCard from '../components/MovieCard'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=d6278b3dc3e6f8f8376a89851c3f8c8f&query="


const Main = () => {
    const [movies,setMovies] =useState([])

    useEffect(() =>{
    getMoives(FEATURED_API);
    },[])

    const getMoives = (API)=>{
        fetch(API)
        .then((res)=> res.json())
        .then((res)=> setMovies(res.results))
      
    }
    return (
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    );
}

export default Main;
