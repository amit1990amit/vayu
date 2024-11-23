import React from "react";
import { Typography, Box } from "@mui/material";

type StepThreeProps = {
  data: { firstName?: string; lastName?: string; age?: string };
}

const StepThree= (props: StepThreeProps) => {
  const { data } = props
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Review Your Information
      </Typography>
      <Typography>
        <strong>First Name:</strong> {data.firstName || "N/A"}
      </Typography>
      <Typography>
        <strong>Last Name:</strong> {data.lastName || "N/A"}
      </Typography>
      <Typography>
        <strong>Age:</strong> {data.age || "N/A"}
      </Typography>
    </Box>
  );
};

export default StepThree;
