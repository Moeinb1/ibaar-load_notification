import * as Yup from "yup";
import validationRules from "./validationRules";

export const getValidationListByAnArray = (input) => {
  let shapes = {};
  Object.entries(validationRules).forEach(([key, value]) => {
    if (input.includes(key)) {
      shapes[key] = value;
    }
  });
  return Yup.object().shape(shapes);
};
