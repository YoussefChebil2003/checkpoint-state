//we're building a store, that holds the object that holds the app's state data
//we need a reducer, which is a function that returns the state data
//it basically descibes how your state is transfered into the next state
//tells our store what to do with the data when something happens

export default (state, action) => {
    switch(action.type){
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state, //return existing state
                //add movie to existing state of watchlist
                watchlist: [action.payload, ...state.watchlist]
            }
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state, //return existing state 
                //filter all movies from watch list that don't have the id of that movie
                watchlist: state.watchlist.filter(movie=>movie.id !== action.payload)
            }   
        case "ADD_MOVIE_TO_WATCHED":
            return{
                ...state, //return existing state
                //add movie to existing state of watched
                watched: [action.payload, ...state.watched],
                //remove movie from state of watchlist
                watchlist: state.watchlist.filter(movie=>movie.id !== action.payload.id)
            }
        case "REMOVE_MOVIE_FROM_WATCHED":
            return {
                ...state, //return existing state 
                //filter all movies from watched list that don't have the id of that movie
                watched: state.watched.filter(movie=>movie.id !== action.payload)
            }  
        default:
            return state;
    }
}