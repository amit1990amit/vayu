import React, { useCallback, useState } from "react";
import { Box } from "@mui/material";
import { StepperWorkflowProps, FormData } from "./types";
import StepperNavigation from './StepperNavigation'
import CurrentStepRenderer from './CurrentStepRenderer'
import StepperHeader from './StepperHeader'

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
      <StepperHeader activeStep={activeStep} steps={steps} />
      <CurrentStepRenderer
        component={currentStep.component}
        data={formData}
        onUpdate={updateData}
      />
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
