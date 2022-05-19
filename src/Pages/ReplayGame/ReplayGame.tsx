import { Button, Typography } from '@mui/material';
import React from 'react';
import './Replay.css'
import ReplayIcon from '@mui/icons-material/Replay';
class Replay extends  React.Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            replay: false,
        };
    }
  
    render(){  return ( 
        <div className='replay'>
             
                
                    <Typography variant='h2' > You answered </Typography> 
                    <Typography variant='h1' style={{color:'green'}}> {this.props.correct}/{this.props.nQuestions } </Typography> 
                    <Typography variant='h2' > Questions Right</Typography>

                    <Button variant="contained" style={{marginTop:'2rem'}} size='large' onClick={() => { window.location.reload()} } endIcon ={<ReplayIcon/>}> Replay</Button>

                
            
        </div>
    )}
       
   
        
       

}

export  default Replay;