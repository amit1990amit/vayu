import React, { useCallback, useState } from "react";
import { Stepper, Step, StepLabel, Box } from "@mui/material";
import { StepperWorkflowProps, FormData } from "./types";
import StepperNavigation from './StepperNavigation'

const StepperWorkflow = (props: StepperWorkflowProps) => {
  const { steps, onFinish } = props
  
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleNext = useCallback(() => setActiveStep((prev) => prev + 1), []);
  const handleBack = useCallback(() => setActiveStep((prev) => prev - 1),[]);
  const handleFinish = useCallback(() => {
    onFinish(formData);
    alert("Data saved!");
  }, [onFinish, formData]);

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
      <StepperNavigation
        activeStep={activeStep}
        totalSteps={steps.length}
        isStepValid={isStepValid}
        onBack={handleBack}
        onNext={handleNext}
        onFinish={handleFinish}
      />
    </Box>
  );
};

export default StepperWorkflow;
