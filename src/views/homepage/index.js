import { Button, Paper, Typography } from "@mui/material"
import startRun from './../../assets/img/png/start_run.png'

import { useNavigate } from 'react-router-dom';

 const Home = ()=>{

    
    const navigate = useNavigate();

    return(
       <div className="d-flex flex-column justify-content-center h-100 p-4">
        <Typography variant="h6" style={{fontWeight:'550'}}>
         Take the quiz
        </Typography>
        <Typography variant="h6" style={{fontWeight:'550'}}>
         and try your first pair!
        </Typography>
        <Button variant="contained" onClick={()=>navigate('/quiz')} className="col-5 my-2" color="primary">Try on Trial</Button>
        <div className="d-flex flex-row col-12">
        <Typography variant="body2" color="text.secondary" className="col-5" style={{fontWeight:'bold'}}>
         30 Days risk free
        </Typography>
        <img src={startRun} className="img-fluid col-7" alt="asd"/>
        </div>
        </div>
    )
}

export default Home