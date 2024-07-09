import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import loggerMiddleware from './loggerMiddleware';

const store1 = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
});

export default store1;
