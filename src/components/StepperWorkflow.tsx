import React from "react";
import { Box } from "@mui/material";
import { StepperWorkflowProps } from "./types";
import StepperNavigation from './StepperNavigation'
import CurrentStepRenderer from './CurrentStepRenderer'
import StepperHeader from './StepperHeader'
import useStepperWorkflow from '../hooks/useStepperWorkflow'

const StepperWorkflow = (props: StepperWorkflowProps) => {
  const { steps } = props
  const {
    activeStep,
    formData,
    currentStep,
    isStepValid,
    handleNext,
    handleBack,
    handleFinish,
    updateData,
  } = useStepperWorkflow(props);

  return (
    <Box>
      <StepperHeader activeStep={activeStep} steps={steps} />
      <CurrentStepRenderer
        data={formData}
        onUpdate={updateData}
        fields={currentStep.fields}
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
