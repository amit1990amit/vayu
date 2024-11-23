import React, {useState} from 'react';
import { Button } from "@mui/material";
import ModalContainer from '../components/ModalContainer'
import StepperWorkflow from '../components/StepperWorkflow'
import steps from '../components/steps/stepsConfig'

const Home = () => {
  const [open, setOpen] = useState(false)


  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Stepper
      </Button>
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
