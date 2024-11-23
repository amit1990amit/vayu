import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

type StepperHeaderProps = {
  activeStep: number;
  steps: { label: string }[];
};

const StepperHeader = (props: StepperHeaderProps) => {
  const { activeStep, steps } = props;

  return (
    <Stepper activeStep={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel>{step.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default React.memo(StepperHeader);
