import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './../01_Redux_Basics/counterSlice';

const store3 = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store3;
