
import { Typography } from '@mui/material'
import LoadingResults from './../../assets/img/gif/loader.gif'

const  Loader  = (props) =>{
    const {loadingText = "We're running to get your results"} = props
    return(
    <div className="d-flex flex-column align-items-center"> 
    <img src={LoadingResults} width="100px" height= "50px" className="img-fluid" alt="loading"/>
    <Typography variant="body2" color="text.secondary" className="" style={{fontWeight:'bold'}}>
        {loadingText}
    </Typography>
    </div>
    )
}

export default Loader