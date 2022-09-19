import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    changeThemeMode: (state, action) => {
      state.mode === 'dark' ? (state.mode = 'light') : (state.mode = 'dark');
    },
  },
});
const { changeThemeMode } = themeSlice.actions;
export { changeThemeMode };
export default themeSlice.reducer;
