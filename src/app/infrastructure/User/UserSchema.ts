import * as yup from "yup";

export const userSchema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .matches(/^[A-Za-z]+$/, "Enter a valid first name"),

  lastName: yup
    .string()
    .required("Last name is required")
    .matches(/^[A-Za-z]+$/, "Enter a valid last name"),
});
