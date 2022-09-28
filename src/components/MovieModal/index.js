import React, { useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside';
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

    const ref = useRef();
    useOnClickOutside(ref, () => {
        setModalOpen(false);
    })

  return (
    <div className='presentation'>
        <div className='wrapper-modal'>
            <div className='modal' ref={ref}>
                <span className='modal-close' onClick={() => setModalOpen(false)}>
                    X
                </span>
                <img 
                    className='modal__poster-img'
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                    alt='modal__poster-img'
                />
                <div className='modal__contents'>
                    <p className='modal__detail'>
                        <span className='modal__user__perc'>
                           {`${Math.floor(vote_average * 10)}`}% for you 
                       </span> &nbsp; &nbsp; 
                       {release_date ? release_date : first_air_date}
                    </p>
                    <h2 className='modal__title'>{title ? title : name }</h2>
                    <p className='modal__overview'> Rate : {vote_average.toFixed(1)}</p>
                    <p className='modal__story'>{overview}</p>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default MovieModal;