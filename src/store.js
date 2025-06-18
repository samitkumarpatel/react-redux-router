import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increase: (state) => { state.count += 1; },
    decrease: (state) => { state.count -= 1; },
  },
});

export const { increase, decrease } = counterSlice.actions;



// User slice to manage user data
export const fetchAllUser = createAsyncThunk(
  'users/fetchAllUser',
  async () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: { 
    users: [],
    loading: false,
    error: null, 
},
  reducers: {
    removeUser: (state, action) => {
      console.log('Removing user with id:', action.payload);
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAllUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchAllUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    });
  },
});

export const { removeUser } = userSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
