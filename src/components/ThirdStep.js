import React, { useContext } from 'react'
import {TextField,Button} from '@mui/material'
import { stateContext } from './StepContext'

const ThirdStep = () => {
    const{currentStep,setStep,data,fullData,submitData,setData}=useContext(stateContext)
  return (
    <div>
         <div>
        <TextField label="City" margin="normal" variant='outlined' color="secondary" value={data["city"] || ''} onChange={(e)=>setData({...data,city:e.target.value})} />
        </div>
        <div>
        <TextField label="Land Mark" margin="normal" variant='outlined' color="secondary"
        value={data["landmark"] || ''} onChange={(e)=>setData({...data,landmark:e.target.value})} />
        </div>
        <div>
        <TextField label="Postal Code" margin="normal" variant='outlined' color="secondary"
        value={data["postalcode"] || ''} onChange={(e)=>setData({...data,postalcode:e.target.value})} />
        </div>
        <div>
        <Button variant="contained" color="secondary" onClick={()=>setStep(2)}>
          Back
        </Button>  <span></span>
       <Button variant='contained' color='primary' onClick={submitData} >Submit</Button>
        </div>
    </div>
  )
}

export default ThirdStep