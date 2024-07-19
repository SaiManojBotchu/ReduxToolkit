import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentSlice';

const store4 = configureStore({
  reducer: {
    content: contentReducer
  }
});

export default store4;
