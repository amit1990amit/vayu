import React from "react";
import { TextField } from "@mui/material";

type CustomTextFieldProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
};

const CustomTextField = (props: CustomTextFieldProps) => {
  const { label, value, type = 'text', onChange } = props;

  console.log('props', props)

  return (
    <TextField
      {...props}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      margin="normal"

    />
  );
};

export default CustomTextField;
