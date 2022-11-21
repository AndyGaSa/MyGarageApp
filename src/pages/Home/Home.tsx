import { Cars } from '@/data';
import { minWidth } from '@mui/system';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';

export interface HomeInterface{}

const Home: React.FC<HomeInterface> = () => {
    const pageSize = 5;
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