import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const AppHeader = () => {
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static"
                    sx={{ backgroundColor: '#343a40' }}
                >
                    <Toolbar>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, cursor: 'default' }}>
                            CarLogo
                        </Typography>
                        <Button sx={{
                            color: '#ababac', 
                            '&:hover': {
                                color: "inherit"}
                        }}>
                        По алфавиту</Button>
                        <Button sx={{
                            color: '#ababac', 
                            '&:hover': {
                                color: "inherit"}
                        }}>
                        По странам</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}

