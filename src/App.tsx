import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React from 'react';
import { Button, IconButton, Input, TextField } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item><h1>VLADA GAME</h1></Item>
        </Grid>
        <Grid item xs={12}>
          <Item><h1>VOLK I ZAYA</h1></Item>
        </Grid>


        <Grid item xs={3}>
          <Item>-</Item>
        </Grid>
        <Grid item xs={2}>
          <Item><TextField size="medium"></TextField></Item>
        </Grid>
        <Grid item xs={2}>
          <Item><IconButton color='success' size="large"><DoneOutlineIcon /></IconButton></Item>
        </Grid>
        <Grid item xs={2}>
          <Item><IconButton color="error" size="large"><CancelIcon fontSize="inherit" /></IconButton></Item>
        </Grid>
        <Grid item xs={3}>
          <Item>-</Item>
        </Grid>


        <Grid item xs={1}>
          <Item>-</Item>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary">1</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary">2</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary">3</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary">4</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary">5</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary">6</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary">7</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary">8</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary">9</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary">0</Button>
        </Grid>
        <Grid item xs={1}>
          <Item>-</Item>
        </Grid>

        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
      <h1></h1>
    </div>
  );
}

export default App;
