import React, { createContext, useState } from 'react'
import App from '../App';

export const stateContext=createContext();

const StepContext = ({submitData}) => {
    const[currentStep,setStep]=useState(1);
    const[data,setData]=useState([])
    const [finalData,setFinalData]=useState([])
    function submitData(){
       setFinalData([...finalData,data])
       setData('');
       setStep(1)
    }
  return (
   <stateContext.Provider value={{currentStep,setStep,data,setData,finalData,setFinalData,submitData}}>
     <App />
   </stateContext.Provider>
  )
}

export default StepContext