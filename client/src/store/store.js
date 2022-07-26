
import addReducer from './reducer/reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const store = createStore(
    addReducer,
    applyMiddleware(thunk)
);


export default store;

