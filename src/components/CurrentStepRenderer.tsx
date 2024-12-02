import React from "react";
import { Box } from "@mui/material";
import { getField } from '../stepperUtils'
import { FieldProps } from "./types";

type CurrentStepRendererProps = {
  data: any;
  onUpdate: (newData: any) => void;
  fields: any
};

const CurrentStepRenderer = (props: CurrentStepRendererProps) => {
  const { data, onUpdate, fields } = props;

  return (
    <Box my={2}>
      {fields.map((field: FieldProps) => {
        const FieldComponent = getField(field.fieldType);
        return (
          <FieldComponent
            key={field.id}
            {...field}
            value={data[field.id] || ""}
            type={field.type || "text"}
            onChange={(value: string) =>
              onUpdate({ ...data, [field.id]: value })
            }
          />
        );
      })}
    </Box>
  );
};

export default CurrentStepRenderer;
