import * as yup from "yup";

export const emailNotLongEnough = "email must be at least 3 characters";
export const passwordNotLongEnough = "password must be at least 3 characters";
export const invalidEmail = "email must be a valid email";

export const registerPasswordValidation = yup
  .string()
  .min(4, passwordNotLongEnough)
  .required()
  .max(8);

export const validUserSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(20)
    .required()
    .email(invalidEmail),
  password: registerPasswordValidation
});
