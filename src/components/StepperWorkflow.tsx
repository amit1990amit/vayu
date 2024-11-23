import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import { StepperWorkflowProps, FormData } from "./types";

const StepperWorkflow: React.FC<StepperWorkflowProps> = (props) => {
  const { steps, onFinish } = props
  
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleFinish = () => {
    onFinish(formData);
    alert("Data saved!");
  };

  const updateData = (newData: any) => {
    setFormData((prevData: FormData) => ({ ...prevData, ...newData }));
  };

  const currentStep = steps[activeStep];
  const isStepValid = currentStep.isValid(formData);

  return (
    <Box>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box my={2}>
        <currentStep.component data={formData} onUpdate={updateData} />
      </Box>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Button disabled={activeStep === 0} onClick={handleBack}>
          Back
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button variant="contained" onClick={handleFinish}>
            Finish
          </Button>
        ) : (
          <Button variant="contained" disabled={!isStepValid} onClick={handleNext}>
            Next
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default StepperWorkflow;
