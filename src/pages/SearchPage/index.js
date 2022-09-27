import React from 'react'
import './SearchPage.css';
import axios from '../../api/axios';
import { useState, useEffect  } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';

function SearchPage() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([])

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get('q');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  
  useEffect(() => {
    if(debouncedSearchTerm){
      fetchSearchMovie(debouncedSearchTerm);
    }
  }  , [debouncedSearchTerm])

  const fetchSearchMovie = async () => { 
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`)
    
    console.log(request);
    setSearchResults(request.data.results);
      } catch (error) {
        console.log(error);
      }     
}

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if(movie.backdrop_path !== null && movie.media_type !== 'person'){
            const movieImageUrl = 
            'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
            return (
              <div className='movie' key={movie.id}>
                <div
                  onClick={()=> navigate(`/${movie.id}`)}
                  className='movie__column-poster'
                >
                  <img
                    src={movieImageUrl} alt='movieimage'
                    className='movie__poster' />
                </div>
              </div>
            )
          }  
        })}
      </section>
    ) : <section className='no-results'>
      <div className='no-results__text'>
        <p> no results for {debouncedSearchTerm} </p>
      </div>
    </section>
  }

  return renderSearchResults();
  
  
}

export default SearchPage;