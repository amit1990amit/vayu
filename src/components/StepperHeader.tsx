import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

type StepperHeaderProps = {
  activeStep: number;
  steps: { label: string, id: string }[];
};

const StepperHeader = (props: StepperHeaderProps) => {
  const { activeStep, steps } = props;

  return (
    <Stepper activeStep={activeStep}>
      {steps.map((step) => (
        <Step key={step.id}>
          <StepLabel>{step.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default React.memo(StepperHeader);
