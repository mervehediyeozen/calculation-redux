import {configureStore} from '@reduxjs/toolkit'
import moneyReducer from './FirstSlice';


export const store = configureStore({
    reducer: {
      money: moneyReducer, // Store'a reducer'ı düzgün bir şekilde ekliyoruz
    },
  });