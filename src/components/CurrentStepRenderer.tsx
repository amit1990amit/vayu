import React from "react";
import { Box } from "@mui/material";

type CurrentStepRendererProps = {
  component: React.ComponentType<any>;
  data: any;
  onUpdate: (newData: any) => void;
};

const CurrentStepRenderer = (props: CurrentStepRendererProps) => {
  const { component: StepComponent, data, onUpdate } = props;

  return (
    <Box my={2}>
      <StepComponent data={data} onUpdate={onUpdate} />
    </Box>
  );
};

export default CurrentStepRenderer;
