import React from "react";
import { Box, Button } from "@mui/material";

type StepperNavigationProps = {
  activeStep: number;
  totalSteps: number;
  isStepValid: boolean;
  onBack: () => void;
  onNext: () => void;
  onFinish: () => void;
};

const StepperNavigation = (props: StepperNavigationProps) => {
  const { activeStep, totalSteps, isStepValid, onBack, onNext, onFinish } = props;

  return (
    <Box display="flex" justifyContent="space-between" mt={2}>
      <Button disabled={activeStep === 0} onClick={onBack}>
        Back
      </Button>
      {activeStep === totalSteps - 1 ? (
        <Button variant="contained" onClick={onFinish}>
          Finish
        </Button>
      ) : (
        <Button variant="contained" disabled={!isStepValid} onClick={onNext}>
          Next
        </Button>
      )}
    </Box>
  );
};

export default React.memo(StepperNavigation);
