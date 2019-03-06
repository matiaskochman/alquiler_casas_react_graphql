import * as yup from "yup";
// import { passwordNotLongEnough } from "./modules/user/register/errorMessages";
import {
  passwordNotLongEnough
 } from "@airbnb/common";

export const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255);
