import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sampleCryptoData, CryptoData } from '../utils/sampleData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: sampleCryptoData,
  reducers: {
    updateCryptoPrices: (state, action: PayloadAction<CryptoData[]>) => {
      action.payload.forEach(update => {
        const coin = state.find(c => c.symbol === update.symbol);
        if (coin) Object.assign(coin, update);
      });
    },
  },
});

export const { updateCryptoPrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;