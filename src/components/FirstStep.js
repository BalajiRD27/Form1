import React, { useContext } from 'react'
import {TextField,Button} from '@mui/material'
import { stateContext } from './StepContext'



const FirstStep = () => {
    const{currentStep,setStep,data,fullData,setData}=useContext(stateContext)
  return (
    <div>
        <div>
        <TextField label="First Name" value={data["firstName"] || ''} onChange={(e)=>setData({...data,firstName:e.target.value})} margin="normal" variant='outlined' color="secondary" />
        </div>
        <div>
        <TextField label="Last Name" value={data["lastName"] || ''} onChange={(e)=>setData({...data,lastName:e.target.value})} margin="normal" variant='outlined' color="secondary" />
        </div>
        <div>
        <TextField label="Contact Number" value={data["contact"] || ''} onChange={(e)=>setData({...data,contact:e.target.value})} margin="normal" variant='outlined' color="secondary" />
        </div>
        <div>
        <Button variant='contained' color='primary' onClick={()=>setStep(2)} >Next</Button>
        {console.log(`step is: ${currentStep}`)}
        </div>
    </div>
  )
}

export default FirstStep