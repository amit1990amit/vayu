import React from "react";
import { TextField, Box } from "@mui/material";

interface StepTwoProps {
  data: { age?: string };
  onUpdate: (data: { age: string }) => void;
}

const StepTwo = (props: StepTwoProps) => {
  const { data, onUpdate } = props
  return (
    <Box>
      <TextField
        label="Age"
        value={data.age || ""}
        type="number"
        onChange={(e) => onUpdate({ age: e.target.value })}
        fullWidth
        margin="normal"
      />
    </Box>
  );
};

export default StepTwo;
