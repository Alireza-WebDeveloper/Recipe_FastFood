import { createSlice } from '@reduxjs/toolkit';
import ListOfProductName from './ListOfProductName';

const initialState = {
  ListOfProductName: ListOfProductName,
};

const menuSlice = createSlice({
  name: 'menuList',
  initialState: initialState,
});

export default menuSlice.reducer;
