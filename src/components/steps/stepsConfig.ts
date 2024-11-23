import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { StepProps } from '../types'



const steps: StepProps[] = [
  {
    id: 'step-1',
    label: "Personal Info",
    component: StepOne,
    isValid: (formData) => !!formData.firstName && !!formData.lastName,
  },
  {
    id: 'step-2',
    label: "Age Info",
    component: StepTwo,
    isValid: (formData) => !!formData.age && !isNaN(Number(formData.age)),
  },
  {
    id: 'step-3',
    label: "Review",
    component: StepThree,
    isValid: () => true,
  },
];

export default steps
