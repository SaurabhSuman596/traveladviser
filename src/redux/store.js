import { configureStore } from '@reduxjs/toolkit';
import mapReducer from '../redux/mapSlice';

const store = configureStore({
  reducer: {
    mapReducer,
  },
});

export default store;
