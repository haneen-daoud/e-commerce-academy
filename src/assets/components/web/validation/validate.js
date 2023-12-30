import * as yup from 'yup'
export const registerSchema=yup.object({
    userName:yup.string().required().min(3,"must be at least 3 char").max(30,"max is 30 char"),
    email:yup.string().required().email(),
    password:yup.string().required().min(3,"must be at least 3 char").max(30,"max is 30 char")
})

export const LoginSchema=yup.object({
    email:yup.string().required().email(),
    password:yup.string().required().min(3,"must be at least 3 char").max(30,"max is 30 char")
})
export const forgetPassword = yup.object({
    email: yup.string().email().required("email is Required "),
    password: yup
      .string()
      .required("password is Required ")
      .min(6, "password must be at least 6 characters")
      .max(16, "password musn't exceed 16 characters"),
    code: yup.string().required("code is Required ").min(4, "code must be 4 characters").max(4,"code must be 4 characters")
  });
  export const sendCode = yup.object({
    email: yup.string().email().required("email is Required "),
  });
  export const createOrder =yup.object({
    phone:yup.string().required("phone is Required"),
    address:yup.string().required("address is Required"),
  });