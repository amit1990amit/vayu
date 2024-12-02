type FormData = {
  firstName?: string;
  lastName?: string;
  age?: string;
}

export interface FieldProps {
  id: string;
  fieldType: string;
  placeholder?: string;
  defaultValue?: string;
  type?: string;
  isRequired?: boolean;
}

type StepProps = {
  id: string;
  label: string;
  isValid: (formData: FormData) => boolean;
  fields: FieldProps[];
}

type StepperWorkflowProps = {
  steps: StepProps[];
  onFinish: (data: any) => void;
}

export type {
  StepProps,
  StepperWorkflowProps,
  FormData,
}