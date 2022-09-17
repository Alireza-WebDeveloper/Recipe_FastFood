import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { async } from 'regenerator-runtime';
import ForkifyAxios from '../../api/ForkifyAxios';
import { addMyShopping, removeMyShopping } from '../myShopping/myShoppingSlice';

const initialState = {
  list: [],
  loading: false,
  error: '',
  total: 0,
};

const FetchSearchFood = createAsyncThunk(
  'foodList/fetchByQuery',
  async (query, thunkControl) => {
    try {
      const response = await ForkifyAxios.get(`?search=${query}`);
      return response.data;
    } catch (error) {
      thunkControl.rejectWithValue('Failed Request');
    }
  }
);

const foodListSlice = createSlice({
  name: 'foodList',
  initialState: initialState,
  reducers: {
    updateFoodList_OfShopping: (state, action) => {
      state.list.forEach((stateMain) => {
        action.payload.forEach((stateShopping) => {
          if (stateMain.id === stateShopping.id) {
            stateMain.bookmarked = stateShopping.bookmarked;
          }
        });
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FetchSearchFood.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(FetchSearchFood.fulfilled, (state, action) => {
        if (!action.payload) {
          state.loading = false;
          state.list = [];
          state.total = 0;
          state.error = 'Faield Request';
        }
        if (action.payload) {
          state.loading = false;
          state.list = action.payload.data.recipes;
          state.total = action.payload.results;
          state.error = '';
        }
      }),
      builder.addCase(addMyShopping, (state, action) => {
        const targetFood = state.list.find(
          ({ id }) => id === action.payload.id
        );
        if (!targetFood) return;
        targetFood.bookmarked = true;
      }),
      builder.addCase(removeMyShopping, (state, action) => {
        const targetFood = state.list.find(({ id }) => id === action.payload);
        if (!targetFood) return;
        targetFood.bookmarked = false;
      });
  },
});

const { updateFoodList_OfShopping } = foodListSlice.actions;

export { FetchSearchFood, updateFoodList_OfShopping };

export default foodListSlice.reducer;
