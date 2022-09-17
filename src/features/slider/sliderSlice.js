import { createSlice } from '@reduxjs/toolkit';
import dataSlider from './dataSlider';
const initialState = dataSlider;
const sliderSlice = createSlice({
  name: 'slider',
  initialState: initialState,
});

export default sliderSlice.reducer;
