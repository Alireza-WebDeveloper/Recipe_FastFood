import { configureStore } from '@reduxjs/toolkit';
import carouselSlice from '../features/carousel/carouselSlice';
import sliderSlice from '../features/slider/sliderSlice';
import introductionSlice from '../features/introduction/introductionSlice';
import foodListSlice from '../features/foodList/foodListSlice';
import foodSingleSlice from '../features/foodSingle/foodSingleSlice';
import myShoppingSlice from '../features/myShopping/myShoppingSlice';
import storage from 'redux-persist/lib/storage';
import menuSlice from '../features/menu/menuSlice';
import ourServiceSlice from '../features/ourService/ourServiceSlice';
import themeSlice from '../features/theme/themeSlice';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'shoppingStore',
  version: 1,
  storage,
  whitelist: ['myShopping', 'theme'],
};
const reducer = combineReducers({
  myShopping: myShoppingSlice,
  carousel: carouselSlice,
  slider: sliderSlice,
  introduction: introductionSlice,
  foodList: foodListSlice,
  foodSingle: foodSingleSlice,
  menu: menuSlice,
  ourService: ourServiceSlice,
  theme: themeSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
