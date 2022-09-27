import React from 'react'
import './MovieModal.css';


function MovieModal({
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen
}) {
  return (
    <div className='presentation'>
        <div className='wrapper-modal'>
            <div className='modal'>
                <span className='modal-close' onClick={() => setModalOpen(false)}>
                    X
                </span>
                <img 
                    className='modal__poster-img'
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                    alt='modal__poster-img'
                />
                <div className='modal__content'>
                    <p className='modal__details'>
                        <span className='modal__user__perc'>
                            100% for you 
                       </span>
                       {release_date ? release_date : first_air_date}
                    </p>
                    <h2 className='modal__title'>{title ? title : name }</h2>
                    <p className='modal__overview'> Rate : {vote_average}</p>
                    <p className='moda__overview'>{overview}</p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default MovieModal;