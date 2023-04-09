import React, {createContext, useReducer, useEffect} from "react";
import Watched from "../components/hooks-checkpoint/Watched";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')): [], 
    //check if there is any item in Local Storage called watchlist and if so pass it back to watchlist item as an array, if not pass back empty array
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')): [], 
    //check if there is any item in Local Storage called watched and if so pass it back to watched item as an array, if not pass back empty array
}

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = props =>{

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(()=>{
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist))
        localStorage.setItem('watched', JSON.stringify(state.watched))
    }, [state])
    //triggered when state is changed (e.g whenever movie is added or removed from watchlist)
    //for each trigger, we update the watchlist array and the watched array

    //actions
    const addMovieToWatchlist = movie => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
    }
    const removeMovieFromWatchlist = id => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
    }
    const addMovieToWatched = movie => {
        dispatch({type:"ADD_MOVIE_TO_WATCHED", payload: movie})
    }
    const removeMovieFromWatched = id => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHED", payload: id});
    }

    return(
        <GlobalContext.Provider value={{watchlist:state.watchlist, watched:state.watched, addMovieToWatchlist, removeMovieFromWatchlist, addMovieToWatched, removeMovieFromWatched}}>
            {props.children}
        </GlobalContext.Provider>
    )
}











