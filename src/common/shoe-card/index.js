import { Card, CardMedia, CircularProgress, Divider, Typography } from "@mui/material";


 const ShoeCard =(props)=>{

   const {loadingImage =false , shoeName, resultShoeImage} =props;
    return( <Card className="p-2 d-flex flex-column" sx={{ backgroundColor: "background.lightgrey" }}>
    {loadingImage ? <CircularProgress /> :
        <CardMedia
            component="img"
            image={resultShoeImage}
            alt="result shoe"
        />}
    <Typography variant="h5" style={{ fontWeight: 'medium' }} className="mt-3">
        {shoeName}
    </Typography>
    <Typography paragraph color="text.secondary" className="my-3" >
        Your perfect partner in the world's lightest fully-cushioned shoe for Running Remixed.
    </Typography>
    <div className="d-flex flex-row">
        <Typography variant="caption" className="me-2">
            200CHF
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="caption" className="ms-2">
            {`Neon & grey`}
        </Typography>
    </div>
</Card>)
 }

 export default ShoeCard;