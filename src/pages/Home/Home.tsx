import { Cars } from '@/data';
import { Car } from '@/models';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useState } from 'react';

export interface HomeInterface{}

const Home: React.FC<HomeInterface> = () => {
    const [selectedCars, setSelectedCars] = useState<Car[]>([]);
    const pageSize = 5;

    const findCar = (car: Car) => !!selectedCars.find(c => c.id === car.id)
    const filterCar = (car: Car) => selectedCars.filter(c => c.id !== car.id)

    const handleChange = (car: Car) => {
        setSelectedCars(findCar(car) ? filterCar(car) : [...selectedCars, car])
    };
    const columns = [
        {
            field:'actions',
            type:'actions',
            sortable:false,
            headerName: '',
            flex: 1,
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

]
    return (
        <DataGrid
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        getRowId={(row: any) => row.id}
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        rows={Cars}
        columns={columns}
        />
        );
};

export default Home;