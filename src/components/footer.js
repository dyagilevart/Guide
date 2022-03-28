import React from 'react';

import Box from '@mui/material/Box';
import styled from 'styled-components'

const Wrapper = styled.div`
  textColor: white;
`;

export const AppFooter = () => {
    return (
        <footer>
            <Box sx={{ backgroundColor: '#343a40', padding: 1}}>
                {/* Возвращает на Add */}
                © { new Date().getFullYear() } <a href="index.html">CarLogo</a>. Все права на опубликованные изображения принадлежат их авторам или законным владельцам.
            </Box>
        </footer>
    )
}

