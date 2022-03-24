import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const AppTypeSort = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#e9ecef',
                padding: '40px 10px 20px 15px',
                fontWeight: 200,
                cursor: 'default'
            }}
        >
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Перечень автомобильных марок
            </Typography>
            <p>в алфавитном порядке</p>
        </Box>
    )
}

// <p> меняется в зависимости от выбранной кнопки
