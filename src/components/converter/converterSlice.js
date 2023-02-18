import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fromCurrency: 'USD',
  toCurrency: 'EUR',
};

const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    changeFromCurrency: (state, action) => {
      state.fromCurrency = action.payload;
    },
    changeToCurrency: (state, action) => {
      state.toCurrency = action.payload;
    },
  },
});

export const { changeFromCurrency, changeToCurrency } = converterSlice.actions;

export default converterSlice.reducer;
