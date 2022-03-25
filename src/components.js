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
                                color: "inherit"
                            }
                        }}>
                            По алфавиту</Button>
                        <Button sx={{
                            color: '#ababac',
                            '&:hover': {
                                color: "inherit"
                            }
                        }}>
                            По странам</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}

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
            <p>{/*<p>{typeOfSorting}</p>*/}в алфавитном порядке</p>
        </Box>
    )
}

export const AppFooter = () => {
    return (
        <footer>
            <div>
                © 2021 <a href="index.html">CarLogo</a>. Все права на опубликованные изображения принадлежат их авторам или законным владельцам.
            </div>
        </footer>
    )
}