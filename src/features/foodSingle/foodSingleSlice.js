import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { async } from 'regenerator-runtime';
import ForkifyAxios from '../../api/ForkifyAxios';
import { addMyShopping, removeMyShopping } from '../myShopping/myShoppingSlice';
const initialState = {
  single: {},
  loading: false,
  error: '',
};

const FetchSingleFood = createAsyncThunk(
  'foodSingle/FetchById',
  async (foodId, thunkControl) => {
    try {
      const response = await ForkifyAxios.get(`/${foodId}`);
      return response.data;
    } catch (error) {
      thunkControl.rejectWithValue('Failed Request');
    }
  }
);

const foodSingleSlice = createSlice({
  name: 'foodSingle',
  initialState: initialState,
  reducers: {
    updateFoodSingle_OfShopping: (state, action) => {
      action.payload.forEach((stateShopping) => {
        state.single.id === stateShopping.id
          ? (state.single.bookmarked = stateShopping.bookmarked)
          : '';
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FetchSingleFood.pending, (state, action) => {
      state.loading = true;
    }),
      builder.addCase(FetchSingleFood.fulfilled, (state, action) => {
        if (!action.payload) {
          state.loading = false;
          state.single = {};
          state.error = 'Faield Request';
        }
        if (action.payload) {
          state.loading = false;
          state.single = action.payload.data.recipe;
          state.error = '';
        }
      }),
      builder.addCase(addMyShopping, (state, action) => {
        if (!state.single) return;
        if (state.single.id === action.payload.id) {
          state.single.bookmarked = true;
        }
      }),
      builder.addCase(removeMyShopping, (state, action) => {
        if (!state.single) return;
        if (state.single.id === action.payload) {
          state.single.bookmarked = false;
        }
      });
  },
});

const { updateFoodSingle_OfShopping } = foodSingleSlice.actions;

export { updateFoodSingle_OfShopping, FetchSingleFood };

export default foodSingleSlice.reducer;
