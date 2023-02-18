import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  fromCurrency: 'USD',
  toCurrency: 'EUR',
  rates: {},
  values: {
    first: 1,
    second: '',
    rate: '',
  },
  isLoading: true,
  error: null,
};

export const fetchRates = createAsyncThunk(
  'actions/fetchAction',
  async ({ payload }) => {
    let response;
    await fetch(
      `https://v6.exchangerate-api.com/v6/c7cce2979b67578ad77deb90/latest/${payload}`
    )
      .then((res) => res.json())
      .then((data) => {
        response = data;
      });
    console.log('fetch request', payload);
    return response;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setFromCurrency: (state, action) => {
      state.fromCurrency = action.payload;
      state.isLoading = true;
      const values = state.values;
      values.second = values.first * values.rate;
    },
    setToCurrency: (state, action) => {
      state.toCurrency = action.payload;
      const values = state.values;
      values.rate = state.rates[state.toCurrency].toFixed(2);
      values.second = state.rates[state.toCurrency].toFixed(2);
      values.second = values.first * values.rate;
    },
    setFirstValue: (state, action) => {
      state.values.first = action.payload;
    },
    setSecondValue: (state, action) => {
      state.values.second = action.payload.toFixed(2);
    },
    swapCurrencies: (state) => {
      const newToCurrency = state.fromCurrency;
      state.fromCurrency = state.toCurrency;
      state.toCurrency = newToCurrency;
      state.isLoading = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRates.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchRates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rates = action.payload.conversion_rates;
        state.values.rate = action.payload.conversion_rates[state.toCurrency];
        state.values.second = (
          action.payload.conversion_rates[state.toCurrency] * state.values.first
        ).toFixed(2);
      })
      .addCase(fetchRates.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const {
  setFromCurrency,
  setToCurrency,
  setFirstValue,
  setSecondValue,
  swapCurrencies,
} = dataSlice.actions;
export default dataSlice.reducer;
