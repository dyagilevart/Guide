import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ActionAreaCard from './card'

export default function BasicGrid() {
  return (
    <Box sx={{ 
        flexGrow: 1, 
        marginTop: 4,
        marginLeft: 3,
        marginRight: 3,
        marginBottom: 4,
        display: 'flex',
        flexWrap: 'wrap'
     }}>
      <Grid container spacing={3} sx={{position: 'relative'}}>
        <Grid item>
          <ActionAreaCard/>
        </Grid>
        <Grid item>
          <ActionAreaCard/>
        </Grid>
        <Grid item>
          <ActionAreaCard/>
        </Grid>
        <Grid item>
          <ActionAreaCard/>
        </Grid>
        <Grid item>
          <ActionAreaCard/>
        </Grid>
        <Grid item>
          <ActionAreaCard/>
        </Grid>
        <Grid item>
          <ActionAreaCard/>
        </Grid>
        <Grid item>
          <ActionAreaCard/>
        </Grid>
        <Grid item>
          <ActionAreaCard/>
        </Grid>
        <Grid item>
          <ActionAreaCard/>
        </Grid>
      </Grid>
    </Box>
  );
}