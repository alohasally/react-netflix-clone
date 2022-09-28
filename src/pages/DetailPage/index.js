import axios from '../../api/axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './DetailPage.css' 

function DetailPage() {
 const {movieId} = useParams();
  const [movie, setMovie] = useState({});
  console.log(movie);
 useEffect(() => {
   async function fetchData() {
    const request = await axios.get(`/movie/${movieId}`);
   setMovie(request.data);
   }
   fetchData();
 }, [movieId]);
 
 if(!movie) return <div>...loading</div>;

  return (
    <section>
     
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
     className='modal__poster-img'
     alt='poster' />
     <div className='modal__content'>
      <h2 className='modal__title'>{movie.title}</h2>
      <p className='modal__overview'>{movie.overview}</p>
     </div>
    </section>
  );
}

export default DetailPage