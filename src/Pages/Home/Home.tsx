import React from 'react';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Theme, Typography, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import './Home.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Game from '../Game/Game';
import { NUMBER_QUESTIONS,MENU_PROPS} from '../../Assets/const';



function Home() {
    const [nQuestions, setNQuestions] = React.useState<any>(10);
    const [play, setPlay] = React.useState<any>(false);
    const handleChange = (event: SelectChangeEvent) => {
        setNQuestions(event.target.value as any);
        
    };

    
  return (
    <div className="Home">
        {play ? <Game nQuestions={nQuestions} /> :
        <div className="div-Home">
        <Typography variant="h1" > Quizz-App </Typography>
        <Typography variant="subtitle1" > Choose the number of questions: </Typography>
        <div className="form">
        
        
            <FormControl sx={{ m: 1, width:  100  }}>
                <InputLabel>Questions </InputLabel>
                <Select
                
                value={nQuestions}
                onChange={handleChange}
                input={<OutlinedInput label="Questions" />}
                MenuProps={MENU_PROPS}
                >
                {NUMBER_QUESTIONS.map((nQ) => (
                    <MenuItem
                    key={nQ}
                    value={nQ}
                    >
                    {nQ}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            
            <Button variant="contained"  size='large' onClick={() => { setPlay(true) }}  endIcon ={<PlayArrowIcon/>}>Play</Button>
        </div>
        </div>
    }
    </div>
    
  );
}

export default Home;
