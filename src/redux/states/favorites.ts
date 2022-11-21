import { LocalStorageTypes, Car } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utils';
import { createSlice, current } from '@reduxjs/toolkit';

const initialState: Car[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
      return action.payload;
    },
    removeFavorite: (state, action) => {
      const filteredState = current(state).filter((c: Car) => c.id !== action.payload.id);
      setLocalStorage(LocalStorageTypes.FAVORITES, filteredState);
      return filteredState;
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;