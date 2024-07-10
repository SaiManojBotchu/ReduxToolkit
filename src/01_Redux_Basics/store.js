import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// 1. Configure a store
const store = configureStore({
  // 4. Add slice to the store
  // Root reducer for whole app which have all slice's reducers
  reducer: {
    counter: counterReducer
  }
});

export default store;

/*  Redux Toolkit Usage steps:
1. Configure a store
2. Create a Slice (name, initialState, reducers)
3. Export slice {actions} and reducer
4. Add slice reducer to the store
5. Provide store to the parent componet
6. Subscribing store (useSelector)
7. For dispatching actions (useDispatch)
*/
