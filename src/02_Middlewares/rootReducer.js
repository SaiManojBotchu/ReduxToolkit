import { combineReducers } from 'redux';
import counterReducer from '../01_Redux/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
