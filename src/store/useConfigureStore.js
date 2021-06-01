import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk'
import { getMovies } from './async/actions';


const { NODE_ENV } = process.env;

export default () => {
  const store = createStore(
    rootReducer,
    NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
  );

  store.dispatch(getMovies());
  return store;
}