import React from "react";

import { StepProps } from '../types'



const steps: StepProps[] = [
  {
    id: 'step-1',
    label: "Personal Info",
    fields: [
      {
        id: "firstName",
        fieldType: "text",
        placeholder: "Enter your first name",
        type: "text",
      },
      {
        id: "lastName",
        fieldType: "text",
        placeholder: "Enter your last name",
        type: "text",
      },
    ],
    isValid: (formData) => !!formData.firstName && !!formData.lastName,
  },
  {
    id: 'step-2',
    label: "Age Info",
    fields: [
      {
        id: "age",
        fieldType: "text",
        placeholder: "Enter your age",
        type: "number",
      },
    ],
    isValid: (formData) => !!formData.age && !isNaN(Number(formData.age)),
  },
  {
    id: 'step-3',
    label: "Review",
    fields: [
      {
        id: "firstName",
        fieldType: "text",
        placeholder: "Enter your first name",
        type: "text",
      },
      {
        id: "lastName",
        fieldType: "text",
        placeholder: "Enter your last name",
        type: "text",
      },
      {
        id: "age",
        fieldType: "text",
        placeholder: "Enter your age",
        type: "number",
      },
    ],
    isValid: () => true,
  },
];

export default steps
