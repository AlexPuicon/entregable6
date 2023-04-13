import { configureStore } from '@reduxjs/toolkit';
import user from './slices/userslice';

const store = configureStore({
  reducer: {},
  user,
});

export default store;
