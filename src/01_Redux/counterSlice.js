import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0
};

// 2. Create a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    }
  }
});

// 3. Export slice {actions} and reducer
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
