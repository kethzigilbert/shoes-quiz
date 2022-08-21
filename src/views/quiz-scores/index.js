
import { Box } from "@mui/material";
import { isEmpty } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from './../../common/loader'
import Result from "./Result";
const QuizScores = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false)
    const [resultShoe, setResultShoe] = useState('')
    const { state } = location
    const { totalScores = {} } = state

    useEffect(() => {
        setIsLoading(true)
        calculateResultShoe(totalScores)
    }, [totalScores])



    const getresultShoe = (totalScores) => {
        console.log("totalScores", totalScores)
        const reccommendedShoe = Object.keys(totalScores).reduce((a, b) => totalScores[a]?.rating > totalScores[b]?.rating ? a : b);
        return reccommendedShoe


    }

    const calculateResultShoe = async (totalScores) => {
        const calculatePromise = new Promise(resolve => {
            setTimeout(() => {
                resolve(getresultShoe(totalScores));
            }, 300);
        });


        const response = await calculatePromise
        setResultShoe(response)
        setIsLoading(false)

    }
    const showLoader = useMemo(() => {
        return isEmpty(resultShoe) || isLoading
    }, [resultShoe, isLoading])

    return (
        <Box sx={showLoader ? { backgroundColor: "background.darkgrey" } : { backgroundColor: "background.white" }} className="d-flex flex-column justify-content-center p-4 h-100" >
            {showLoader && <Loader />}
            {!showLoader && <Result resultShoeName={resultShoe} />}
        </Box>
    )
}
export default QuizScores