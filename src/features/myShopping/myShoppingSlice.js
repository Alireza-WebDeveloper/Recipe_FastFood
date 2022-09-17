import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  list: [],
  total: 0,
};

const myShoppingSlice = createSlice({
  name: 'myShopping',
  initialState: initialState,
  reducers: {
    addMyShopping: (state, action) => {
      state.list.push({ ...action.payload, bookmarked: true });
      state.total = state.list.length;
      toast.success(`Added to your store`, {
        autoClose: 1000,
        position: 'top-center',
        closeOnClick: true,
        draggable: true,
        pauseOnHover: false,
        style: {
          textTransform: 'capitalize',
          fontWeight: '600',
          fontSize: '1rem',
          fontFamily: 'Roboto',
        },
      });
    },
    removeMyShopping: (state, action) => {
      state.list = state.list.filter(({ id }) => id !== action.payload);
      state.total = state.list.length;
      toast.error(`Removed from your store`, {
        autoClose: 1000,
        position: 'top-center',
        closeOnClick: true,
        draggable: true,
        pauseOnHover: false,
        style: {
          textTransform: 'capitalize',
          fontWeight: '600',
          fontSize: '1rem',
          fontFamily: 'Roboto',
        },
      });
    },
  },
});

const { addMyShopping, removeMyShopping } = myShoppingSlice.actions;
export { addMyShopping, removeMyShopping };
export default myShoppingSlice.reducer;
