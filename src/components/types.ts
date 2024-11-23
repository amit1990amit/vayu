type FormData = {
  firstName?: string;
  lastName?: string;
  age?: string;
}

type StepProps = {
  id: string;
  label: string;
  component: React.ComponentType<any>;
  isValid: (formData: FormData) => boolean
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