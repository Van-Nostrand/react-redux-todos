import axios from 'axios'
const ROOT_URL = 'http://www.omdbapi.com/?apikey=64081808&' 

export const GET_MOVIES = 'GET_MOVIES';
export const LOAD_TO_STATE = 'LOAD_TO_STATE';

export function getMovies(){
  return (dispatch) => {
    axios.get(`${ROOT_URL}t=aladdin`)
      .then(res => dispatch(loadMoviesToState(res)))
      .then(res => console.log("all done!"))
      .catch(err => console.log(err));
  }
}

export function loadMoviesToState(movies) {
  return {
    type: LOAD_TO_STATE,
    listOfMovies: movies
  }
}