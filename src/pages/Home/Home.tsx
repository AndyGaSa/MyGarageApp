import { Car } from '@/models';
import { addCars } from '@/redux/states';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CarsTable } from './components';

export interface HomeInterface{}

const Home: React.FC<HomeInterface> = () => {
    
    const dispatch = useDispatch();
    const [cars, setCars] = useState<Car[]>([]);

    useEffect ( () => {
        const loadDataFromAPI = async () => {
            const data = await fetch("https://seat-cars-api.herokuapp.com/cars", {
              method: "GET"
            });
            const jsonData = await data.json();
            setCars(jsonData);
          };
          loadDataFromAPI();
    }, []);

    useEffect ( () => {
        dispatch(addCars(cars));
    }, [cars]);

    return <CarsTable/> ;
};

export default Home;