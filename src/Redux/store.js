import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// 1. Create a store
const store = configureStore({
  // 4. Add slice to the store
  // Root reducer for whole app which have all slice's reducers
  reducer: {
    counter: counterReducer
  }
});


export default store;
