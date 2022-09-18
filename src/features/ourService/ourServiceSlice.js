import { createSlice } from '@reduxjs/toolkit';
import dataService from './dataService';

const ourServiceSlice = createSlice({
  name: 'ourService',
  initialState: dataService,
});

export default ourServiceSlice.reducer;
