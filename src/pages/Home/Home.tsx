import { Cars } from '@/data';
import { Car } from '@/models';
import { addCars, addFavorite } from '@/redux/states';
import store from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export interface HomeInterface{}

const Home: React.FC<HomeInterface> = () => {
    const [selectedCars, setSelectedCars] = useState<Car[]>([]);
    const pageSize = 5;
    const dispatch = useDispatch();

    const findCar = (car: Car) => !!selectedCars.find(c => c.id === car.id)
    const filterCar = (car: Car) => selectedCars.filter(c => c.id !== car.id)

    const handleChange = (car: Car) => {
        const filteredCars = findCar(car) ? filterCar(car) : [...selectedCars, car];
        dispatch(addFavorite(filteredCars));
        setSelectedCars(filteredCars)
    };
    const columns = [
        {
            field:'actions',
            type:'actions',
            sortable:false,
            headerName: '',
            minWidth: 50,
            renderCell: (params: GridRenderCellParams)=> (
                <>{<Checkbox size="small" 
                checked={findCar(params.row)}
                onChange={() => handleChange(params.row)}
                />}</>
           ) 
        },
        {
            field:'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
        },
        {
            field:'category',
            headerName: 'Categories',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
        },
        {
            field:'company',
            headerName: 'Company',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams)=> <>{params.value}</>
        },

    ];

    useEffect ( () => {
        dispatch(addCars(Cars));
    }, []);

    return (
        <DataGrid
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        getRowId={(row: any) => row.id}
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        rows={store.getState().cars}
        columns={columns}
        />
        );
};

export default Home;