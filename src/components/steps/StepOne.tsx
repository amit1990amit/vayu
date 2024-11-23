import React from "react";
import { TextField, Box } from "@mui/material";

type StepOneProps = {
  data: { firstName: string; lastName: string };
  onUpdate: (data: { firstName: string; lastName: string }) => void;
}

const StepOne = (props: StepOneProps) => {
  const { data, onUpdate } = props
  return (
    <Box>
      <TextField
        label="First Name"
        value={data.firstName}
        onChange={(e) => onUpdate({ ...data, firstName: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        value={data.lastName}
        onChange={(e) => onUpdate({ ...data, lastName: e.target.value })}
        fullWidth
        margin="normal"
      />
    </Box>
  );
};

export default StepOne;
