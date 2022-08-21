import { Button, Typography } from "@mui/material"
import { useMemo } from "react"
import ShoeCard from "../../common/shoe-card"
import { INPUT_DATA } from "../../constants/input-data"
import useImage from "../../utils/use-image"
import { useShoes } from "../../utils/use-shoes"


const Result = (props) => {
    const { resultShoeName = '' } = props
    const { loading: loadingImage, image: resultShoeImage } = useImage(resultShoeName, 'png')
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
           <ShoeCard loadingImage={loadingImage} shoeName={shoeName} resultShoeImage={resultShoeImage}/>
            <Button className="mt-2 align-self-center col-10" variant="contained" color="aqua"> Shop Now</Button>
        </div>
    )
}

export default Result