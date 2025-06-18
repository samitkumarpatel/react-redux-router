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
export const initializeUsers = createAsyncThunk(
  'users/initializeUsers',
  async () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .catch(error => {
          console.error('Error fetching users:', error);
          return [];
        });
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: { users: [] },
  reducers: {
    setInitialUsers: (state, action) => {
      state.users = action.payload;
    },
    removeUser: (state, action) => {
      console.log('Removing user with id:', action.payload);
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initializeUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { setInitialUsers, removeUser } = userSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
