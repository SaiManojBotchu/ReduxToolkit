import { combineReducers } from 'redux';
import counterReducer from '../01_Redux_Basics/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
