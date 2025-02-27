// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer/userReducer'; // Pastikan Anda membuat userSlice

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
