
import {useEffect} from 'react';
import './Timer.css'
function Timer (props:any){
   

    useEffect(() => {
        
        const interval = setInterval(() => {
            
            props.changeTimer(props.timer - 1)
            
           

        }, 1000);
        return () => clearInterval(interval);
    }, [props.timer]);


return(
    <div>
        {
            props.timer > 0 ? <h1 className = 'time'> {props.timer} </h1> : null
        }
    
 
    </div>
)
}

export default Timer;