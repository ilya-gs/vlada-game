import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { Button, Checkbox, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, SvgIcon, TextField } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import useSound from 'use-sound';
import Animation, { Position } from './Animation';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  const [dificulty, setDificulty] = useState('2');
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [rabbit, setRabbit] = useState<Position>({x: 0,y: 70});
  
  const [playActive] = useSound(
    '/pop.mp3',
    { volume: 0.95 }
  );

  const [playClean] = useSound(
    '/glug-a.mp3',
    { volume: 0.95 }
  );

  function handleNumberButtons(number: number) {
    setCurrentAnswer(currentAnswer + number)
    playActive();
  }

  // setRabbit((prev) => {
  //   prev.x = (prev.x + 10) % 500;
  //   return prev;
  // });

  useEffect(() => {
    setInterval(() => {
      setRabbit(prevState => { return { ...prevState, x: (prevState.x + 1)% 500 } });
      
    },100)
    
    console.log("INIT");
    
  }, [])
  

  const handleChange = (event: SelectChangeEvent) => {
    setDificulty(event.target.value as string);
  };

  const handleClean = () => {
    setCurrentAnswer(''); 
    playClean();
  };

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item><h1>VLADA GAME</h1></Item>
        </Grid>
        <Grid item xs={12}>
          <Animation rabbit={rabbit} />
        </Grid>


        <Grid item xs={3}>
          <Item>-</Item>
        </Grid>
        <Grid item xs={2}>
          <Item><TextField size="medium" value={currentAnswer} disabled></TextField></Item>
        </Grid>
        <Grid item xs={2}>
          <Item><IconButton color='success' size="large"><DoneOutlineIcon /></IconButton></Item>
        </Grid>
        <Grid item xs={2}>
          <Item><IconButton color="error" size="large" onClick={() => handleClean()}><CancelIcon fontSize="inherit" /></IconButton></Item>
        </Grid>
        <Grid item xs={3}>
          <Item>-</Item>
        </Grid>


        <Grid item xs={1}>
          <Item>-</Item>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary" onClick={() => handleNumberButtons(1)}>1</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary" onClick={() => handleNumberButtons(2)}>2</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary" onClick={() => handleNumberButtons(3)}>3</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary" onClick={() => handleNumberButtons(4)}>4</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary" onClick={() => handleNumberButtons(5)}>5</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary" onClick={() => handleNumberButtons(6)}>6</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary" onClick={() => handleNumberButtons(7)}>7</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary" onClick={() => handleNumberButtons(8)}>8</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary" onClick={() => handleNumberButtons(9)}>9</Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" size="large" color="secondary" onClick={() => handleNumberButtons(0)}>0</Button>
        </Grid>
        <Grid item xs={1}>
          <Item>-</Item>
        </Grid>
        
        

        <Grid item xs={3}>
          <Item>-</Item>
        </Grid>

        <Grid item xs={2}>
          <Item>
            <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Dificulty</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={dificulty}  
               onChange={handleChange}
              label="Dificulty"
            >
              <MenuItem value={1}>Simple</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>Hard</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item><Checkbox /><AddIcon /></Item>
        </Grid>
        <Grid item xs={1}>
          <Item><Checkbox /><RemoveIcon /></Item>
        </Grid>
        <Grid item xs={1}>
          <Item><Checkbox /><ClearIcon /></Item>
        </Grid>
        <Grid item xs={1}>
          <Item><Checkbox /><SvgIcon>
            <path d='M19,13H5V11H19V13M12,5A2,2 0 0,1 14,7A2,2 0 0,1 12,9A2,2 0 0,1 10,7A2,2 0 0,1 12,5M12,15A2,2 0 0,1 14,17A2,2 0 0,1 12,19A2,2 0 0,1 10,17A2,2 0 0,1 12,15Z' />
            </SvgIcon></Item>
        </Grid>

        <Grid item xs={3}>
          <Item>-</Item>
        </Grid>

        <Grid item xs={12}>
          <Item><Button color='error' variant='contained' size='large'>------ START -------</Button></Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
