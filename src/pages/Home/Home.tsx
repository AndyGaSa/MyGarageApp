import { Cars } from '@/data';
import { addCars } from '@/redux/states';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CarsTable } from './components';

export interface HomeInterface{}

const Home: React.FC<HomeInterface> = () => {
    
    const dispatch = useDispatch();

    useEffect ( () => {
        dispatch(addCars(Cars));
    }, []);

    return <CarsTable/> ;
};

export default Home;