import { Car } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { carsSlice, favoritesSlice } from './states';
export interface AppStore {
    cars: Car[];
    favorites: Car[];
}

export default configureStore<AppStore>({
    reducer: {
        cars: carsSlice.reducer,
        favorites: favoritesSlice.reducer,
    }
});