import React, {useState} from 'react';
import { Button } from "@mui/material";
import ModalContainer from '../components/ModalContainer'
import StepperWorkflow from '../components/StepperWorkflow'
import steps from '../components/steps/stepsConfig'

const Home = () => {
  const [open, setOpen] = useState(false)


  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height:100,
          }
      }>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Stepper
        </Button>
      </div>

      <ModalContainer open={open} onClose={() => setOpen(false)}>
       <StepperWorkflow
        steps={steps}
        onFinish={(data) => {
          localStorage.setItem("userData", JSON.stringify(data));
        }}
      />
      </ModalContainer>
    </div>
  );
};

export default Home;
