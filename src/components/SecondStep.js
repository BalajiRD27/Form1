import React, { useContext } from "react";
import {TextField,Button} from '@mui/material'
import { stateContext } from "./StepContext";

const SecondStep = () => {
    const {setStep,data,fullData,setData} = useContext(stateContext)
  return (
    <div>
      <div>
        <TextField
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={data["email"] || ''} onChange={(e)=>setData({...data,email:e.target.value})}
        />
      </div>
      <div>
        <TextField
          label="Country"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={data["country"] || ''} onChange={(e)=>setData({...data,country:e.target.value})}
        />
      </div>
      <div>
        <TextField
          label="District"
          margin="normal"
          variant="outlined"
          color="secondary"
          value={data["district"] || ''} onChange={(e)=>setData({...data,district:e.target.value})}
        />
      </div>
      <div>
      <Button variant="contained" color="secondary" onClick={()=>setStep(1)}>
          Back
        </Button> <span></span>
        <Button variant="contained" color="primary" onClick={()=>setStep(3)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default SecondStep;
