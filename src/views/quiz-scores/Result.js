import { Button, Card, CardMedia, CircularProgress, Divider, Typography } from "@mui/material"
import { useMemo } from "react"
import { INPUT_DATA } from "../../constants/input-data"
import useImage from "../../utils/use-image"
import { useShoes } from "../../utils/use-shoes"


const Result = (props) => {
    const { resultShoeName = '' } = props
    const { loading: loadingImage, error, image: resultShoeImage } = useImage(resultShoeName, 'png')
    const { groupedShoesById } = useShoes(INPUT_DATA?.shoes)

    const shoeName = useMemo(() => {
        return groupedShoesById[resultShoeName].name
    }, [groupedShoesById, resultShoeName])
    return (
        <div className="d-flex flex-column">
            <Typography variant="h6" style={{ fontWeight: 'medium' }}>
                Congratulations
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 'medium' }} color="text.secondary" className="my-2">
                Based on your selection we've decided on the {shoeName}! Enjoy the 30 day trial!
            </Typography>
            <Card className="p-2 d-flex flex-column" sx={{ backgroundColor: "background.lightgrey" }}>
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
            </Card>
            <Button className="mt-2 align-self-center col-10" variant="contained" color="aqua"> Shop Now</Button>
        </div>
    )
}

export default Result