export const GET_FACTS = 'GET_FACTS';
export const LOAD_FACTS_TO_STATE = 'LOAD_FACTS_TO_STATE';
const axios = require('axios');

export function getFacts(facts) {
  return dispatch => {
    axios.get('https://cat-fact.herokuapp.com/facts')
      .then(res => { 
        console.log("inside the axios call")
        dispatch({type: GET_FACTS, facts: res})
      })
      .catch(err => console.log(err));
  }
}
// export function getFacts(facts) {
//   return dispatch => {
//     axios.get('https://cat-fact.herokuapp.com/facts')
//       .then(res => dispatch(loadFactsToState(res)))
//       .catch(err => console.log(err));
//   }
// }

function loadFactsToState(facts) {
  return {
    type: LOAD_FACTS_TO_STATE,
    facts
  }
}