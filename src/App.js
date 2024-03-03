import { Stepper, Step, StepLabel } from "@mui/material";
import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";
import { stateContext } from "./components/StepContext";
import { useContext } from "react";
import DisplayData from "./components/DisplayData";


function App() {
  const {currentStep,setFinalData,finalData} =useContext(stateContext)
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
    }
  }
  return (
    <div className="App">
      <div>
      <h3 style={{ color: "red", textShadow: "black 1px 1px" }}>
        <b>React Multistep Application</b>
      </h3>
      <div>
       <Stepper style={{ width: "18%",margin:'0 41%'}} activeStep={currentStep-1} orientation="horizontal">
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
      </div>
      {showStep(currentStep)}
      {finalData.length? <DisplayData /> : '' }
      </div>
    </div>
  );
}

export default App;
