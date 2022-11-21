import { Car } from '@/models';
import { addFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { red } from '@mui/material/colors';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export interface CarsTableInterface {}


const CarsTable : React.FC<CarsTableInterface> = () => {
	const [selectedCars, setSelectedCars] = useState<Car[]>([]);
    const pageSize = 5;
    const dispatch = useDispatch();
    const stateCars = useSelector((store: AppStore) => store.cars);
	const favoriteCars = useSelector((store: AppStore) => store.favorites);

    const findCar = (car: Car) => !!selectedCars.find(c => c.id === car.id)
    const filterCar = (car: Car) => selectedCars.filter(c => c.id !== car.id)

    const handleChange = (car: Car) => {
        const filteredCars = findCar(car) ? filterCar(car) : [...selectedCars, car];
        dispatch(addFavorite(filteredCars));
        setSelectedCars(filteredCars)
    };

    const columns = [
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
		{
            field:'actions',
            type:'actions',
            sortable:false,
            headerName: 'Fav',
            minWidth: 50,
            renderCell: (params: GridRenderCellParams)=> (
                <>{<Checkbox size="small" 
                checked={findCar(params.row)}
                onChange={() => handleChange(params.row)}
                />}</>
           ) 
        },
    ];

	useEffect(() => {
		setSelectedCars(favoriteCars);
	  }, [favoriteCars]);

	    return (
        <DataGrid
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        getRowId={(row: any) => row.id}
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        rows={stateCars}
        columns={columns}
		sx={{
			background: 'white',
			opacity: 0.98,
		  }}
        />
        );
};

export default CarsTable;
