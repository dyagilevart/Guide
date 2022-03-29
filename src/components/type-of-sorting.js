import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



export const AppTypeSort = () => {
    return (
        <Box sx={{
            backgroundColor: '#e9ecef',
            padding: 4,
            paddingTop:7,
            paddingBottom:5,
            cursor: 'default'
        }}>
            <Typography variant="h3" component="div"
                sx={{
                    flexGrow: 1,
                    paddingBottom:2,
                }}>
                Перечень автомобильных марок
            </Typography>
            <p>{/*<p>{typeOfSorting}</p>*/}в алфавитном порядке</p>
        </Box>

    )
}

/*
        <Box sx={{
            backgroundColor: '#e9ecef',
            padding: "4rem 2rem",
            cursor: 'default'
        }}>
            <Typography variant="h4" component="div"
                sx={{
                    flexGrow: 1,
                }}>
                Перечень автомобильных марок
            </Typography>
            <p>{<p>{typeOfSorting}</p>}в алфавитном порядке</p>
        </Box>
*/