import React, {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';

function ResultsCard({ movie }) {
    const {addMovieToWatchlist, addMovieToWatched, watchlist, watched} = useContext(GlobalContext);

    //check if movie already exists in watchlist array
    let storedMovie = watchlist.find(x=>x.id === movie.id)
    //check if movie already exists in watched array
    let storedMovieWatched = watched.find(x=>x.id === movie.id)
    //if movie exists in the watchlist array, disable add to watchlist button, else enable
    const watchlistDisabled = storedMovie ? true: false; 
     //if movie exists in the watched array, disable add to watchlist button, else enable
    const watchedDisabled = storedMovieWatched ? true: false;

    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">
                        {/* <Moment format="YYYY">{movie.release_date}</Moment> */}
                        {movie.release_date ? movie.release_date.substring(0,4):'-'}
                    </h4>
                </div>

                <div className='controls'>
                    <button className='btn' disabled={watchlistDisabled} onClick={()=>addMovieToWatchlist(movie)}> Add to WatchList</button>
                    <button className='btn' disabled={watchedDisabled} onClick={()=>addMovieToWatched(movie)}> Add to Watched</button>
                
                </div>

            </div> 
        </div>
    );
}

export default ResultsCard