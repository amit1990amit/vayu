import CustomTextField from "./components/fields/CustomTextField";
const isPageValid = () => {

}

const isFieldValid = () => {

}

const getField = (fieldType: string) => {
  const fieldMap: any = {
    text: CustomTextField,
  };

  return fieldMap[fieldType] 
}

export {
  isPageValid,
  isFieldValid,
  getField,
}