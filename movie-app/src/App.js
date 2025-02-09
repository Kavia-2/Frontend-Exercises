import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=58c58a31'
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {
    searchMovies('Harry potter');

  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
          placeholder='search for Movies'
          value={searchTerm}
          onChange={(e) =>setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search' 
          onClick={() =>searchMovies(searchTerm)} 
          />
      </div>

      {
        movies?.length > 0 ?
          (<div className='container'>
            {movies.map((movie)=>(
              <MovieCard movie={movie}/>
            ))}
          </div>) :
          (
            <div className='empty'>
              <h2>No movies Found</h2></div>
          )
      }


    </div>
  );
}

export default App;