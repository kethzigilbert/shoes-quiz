import React, { useEffect, useMemo, useState } from 'react';
import {INPUT_DATA} from './../../constants/input-data'
import  groupBy  from 'lodash/groupBy';
import { Button, Typography } from '@mui/material';
import { cloneDeep, isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';

const QuizQuestion =() =>{
const [currentQuestion ,setCurrentQuestion] = useState({})
const [scores , setScores ] = useState({})
const {shoes,questions} =INPUT_DATA
const navigate = useNavigate()
const groupedQuestionsById = useMemo(()=>{
    const grouped =  groupBy(questions, 'id')
    Object.keys(grouped)?.forEach(each=>{
        grouped[each]=grouped[each][0]
    })
    return grouped
},[questions])


useEffect(()=>{
    const groupedInitialScores = groupBy(shoes, 'id')
    Object.keys(groupedInitialScores)?.forEach(each=>{
        groupedInitialScores[each]=groupedInitialScores[each][0]
    })
    setScores(groupedInitialScores)
},[shoes])

useEffect(()=>{
    setCurrentQuestion(groupedQuestionsById[0])
},[groupedQuestionsById])



const handleAnswerClick =(selectedAnswer)=>{
    if(!!selectedAnswer.nextQuestion){
    const copyCurrentScores =cloneDeep(scores)
    Object.keys(selectedAnswer?.ratingIncrease)?.forEach((each)=>{
       copyCurrentScores[each].rating = copyCurrentScores[each].rating + selectedAnswer.ratingIncrease[each]
    })
   setScores(copyCurrentScores)
   setCurrentQuestion(groupedQuestionsById[selectedAnswer.nextQuestion])
 }
 else
    navigate('/quiz-scores',{state: {totalScores :scores }})
 
}

return(<div className='d-flex flex-column p-4'>
    <div className='mt-3 d-flex flex-column mt-5 align-items-center'>
      <Typography variant="subtitle1" className='text-uppercase'>
         Take the quiz
        </Typography>
        <Typography variant="subtitle1" className='text-uppercase'>
         and try your first pair!
         </Typography>
   </div>
   <div className='mt-3 d-flex flex-column mt-5 justify-content-around align-items-center'>
      <Typography variant="subtitle1" >
        {currentQuestion?.copy || ''}
    </Typography>
    <div className='d-flex col-12 flex-row justify-content-between mt-3'>

    {currentQuestion?.answers?.map((eachAnswer)=>{
         
    const {copy}  = eachAnswer
    return (
        <Button variant="outlined" onClick={()=>handleAnswerClick(eachAnswer)} className="col-5 my-2" >{copy}</Button>
     )
})}
    </div>
  
       
   </div>
</div>)

}
export default QuizQuestion