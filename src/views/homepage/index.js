import { Button, Typography } from "@mui/material"
import startRun from './../../assets/img/png/start_run.png'

import { useNavigate } from 'react-router-dom';

 const Home = ()=>{

    
    const navigate = useNavigate();

    return(
       <div className="d-flex flex-column h-100 mt-5 pt-5 p-4">
        <Typography variant="h6" style={{fontWeight:'medium'}}>
         Take the quiz
        </Typography>
        <Typography variant="h6" style={{fontWeight:'medium'}}>
         and try your first pair!
        </Typography>
        <Button variant="contained" onClick={()=>navigate('/quiz')} className="col-6 my-2" color="primary">Try on Trial</Button>
        <div className="d-flex h-100 flex-row col-12">
        <Typography variant="caption" color="text.secondary" className="col-4" style={{fontWeight:'bold'}}>
         30 Days risk free
        </Typography>
        <img src={startRun} className="img-fluid col-8 fade-in-image" alt="asd"/>
        </div>
        </div>
    )
}

export default Home