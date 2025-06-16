import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increase: (state) => { state.count += 1; },
    decrease: (state) => { state.count -= 1; },
  },
});

export const { increase, decrease } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;
