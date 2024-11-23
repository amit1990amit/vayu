import { useState, useCallback } from "react";
import { FormData, StepperWorkflowProps } from "../components/types";

const useStepperWorkflow = ({ steps, onFinish }: StepperWorkflowProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleNext = useCallback(() => setActiveStep((prev) => prev + 1), []);
  const handleBack = useCallback(() => setActiveStep((prev) => prev - 1), []);
  const handleFinish = useCallback(() => {
    onFinish(formData);
    alert("Data saved!");
  }, [onFinish, formData]);

  const updateData = (newData: any) => {
    setFormData((prevData: FormData) => ({ ...prevData, ...newData }));
  };

  const currentStep = steps[activeStep];
  const isStepValid = currentStep.isValid(formData);

  return {
    activeStep,
    formData,
    currentStep,
    isStepValid,
    handleNext,
    handleBack,
    handleFinish,
    updateData,
  };
};

export default useStepperWorkflow;
