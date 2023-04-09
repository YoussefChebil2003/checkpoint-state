import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState'

function MovieControls({movie, type}) {
    const {removeMovieFromWatchlist, addMovieToWatched, removeMovieFromWatched} = useContext(GlobalContext)

    return (
        <div className='inner-card-controls'>
            {type === 'watchlist' && (
                <>
                    {/*add to watched button */}
                    <button className='ctrl-btn' onClick={()=>addMovieToWatched(movie)}>
                        <i className='fa-fw far fa-eye'></i>
                    </button>
                    {/*remove movie from watchlist button */}
                    <button className='ctrl-btn' onClick={()=>removeMovieFromWatchlist(movie.id)}>
                        <i className='fa-fw fa fa-times'></i>
                    </button>
                </>
            )}
            {type === 'watched' && (
                <>
                    {/*remove movie from watchlist button */}
                    <button className='ctrl-btn' onClick={()=>removeMovieFromWatched(movie.id)}>
                        <i className='fa-fw fa fa-times'></i>
                    </button>
                </>
            )}
        </div>
    )
}

export default MovieControls