import { createSlice } from '@reduxjs/toolkit';
import dataCarousel from './dataCarousel';

const carouselSlice = createSlice({
  name: 'carousel',
  initialState: dataCarousel,
});

export default carouselSlice.reducer;
