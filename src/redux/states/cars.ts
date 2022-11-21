import { Car, LocalStorageTypes } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Car[] = []

 export const carsSlice = createSlice({
    name: 'cars',
    initialState: getLocalStorage(LocalStorageTypes.CARS) ? JSON.parse(getLocalStorage(LocalStorageTypes.CARS) as string) : initialState,
    reducers:{
        addCars: (state,action) => {
            setLocalStorage(LocalStorageTypes.CARS ,state);
            return action.payload;
        },
    } 
 });

 export const { addCars } = carsSlice.actions;

 export default carsSlice.reducer;