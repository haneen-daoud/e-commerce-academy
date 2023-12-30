import React from 'react'
import Input from '../../pages/Input'
import { useFormik } from 'formik'
import { registerSchema } from '../validation/validate.js'
import axios from 'axios'
import { toast } from 'react-toastify';
import '.././sharedCss/sharedDesign.css'
export default function Register() {
  const initialValues = {
    name: '',
    email: '',
    passsword: '',
    image: '',
  }
  const handleFieldChange = (event) => {
    formik.setFieldValue('image', event.target.files[0])
  }

  const onSubmit = async (users) => {
    const formData = new FormData();
    formData.append("userName", users.userName);
    formData.append("email", users.email);
    formData.append("password", users.password);
    formData.append("image", users.image);
    const { data } = await axios.post("https://ecommerce-node4.vercel.app/auth/signup",
      formData
    );
    if ((data.message = "success")) {
      toast.success(
        "acount created succesfully , plz verify your email to login",
        {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
  };
  const formik = useFormik({

    initialValues,
    onSubmit,
    validationSchema: registerSchema
  })
  const inputs = [
    {
      id: 'useername',
      type: 'text',
      name: 'userName',
      title: 'user name',
      value: formik.values.userName,
    }
    ,
    {
      id: 'email',
      type: 'email',
      name: 'email',
      title: 'user email',
      value: formik.values.email,
    },
    {
      id: 'password',
      type: 'password',
      name: 'password',
      title: 'user password',
      value: formik.values.password,
    },
    {
      id: 'image',
      type: 'file',
      name: 'image',
      title: 'user image',
      onChange: handleFieldChange
    }

  ]
  const renderInputs = inputs.map((input, index) =>
    <Input id={input.id}
      type={input.type}
      name={input.name}
      title={input.title}
      value={input.value}
      onChange={input.onChange || formik.handleChange}
      errors={formik.errors}
      onBulr={formik.handleBlur}
      touched={formik.touched}
      key={index} />
  )
  return (
    <>
    <div className="container">
      <div className="d-flex justify-content-center ">

      <form onSubmit={formik.handleSubmit} encType='multipart/form-data'  className="h-50 w-50 form-main ms-5 mt-5  pt-4  rounded-3 border-3">
      <h2 className='text-center pb-3'>create account</h2>

        {renderInputs}
        <div className='d-flex justify-content-center'>
        <button type='submit' className ='button-48' disabled={!formik.isValid}><span>Register</span></button></div>
      </form>
    </div>
    </div>
    </>
  )
}
