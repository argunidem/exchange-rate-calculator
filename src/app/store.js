import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../components/actions/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
