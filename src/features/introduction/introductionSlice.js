import { createSlice } from '@reduxjs/toolkit';
import dataIntroduction from './dataIntroduction';

const introductionSlice = createSlice({
  name: 'introduction',
  initialState: dataIntroduction,
});

export default introductionSlice.reducer;
