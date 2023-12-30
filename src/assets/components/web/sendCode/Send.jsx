import { useFormik } from 'formik'
import React from 'react'
import Input from '../../pages/Input'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { sendCode} from '../validation/validate.js';
import '.././sharedCss/sharedDesign.css'

export default function Send() {
  const initialValues = {
    email: '',
  }
  const navigate = useNavigate();

  const onSubmit = async (users) => {
    const email = users.email
    try {
      const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/sendcode`,
        { email })
      if (data.message == 'success') {
        toast.success('Code sent successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });


        navigate('/forget');
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    sendCode,
  });

  return (
    <div className="container">
   <div className="d-flex justify-content-center ">

     
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data"  className="p-4  w-50 form-main ms-5 mt-5  pt-4  rounded-3 border-3">
      <h1>Enter email to sendCode</h1>
        <Input
          type="email"
          id="email"
          name="email"
          title="User Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched}
          errors={formik.errors}
        />
        <button className ='button-48' type="submit" disabled={!formik.isValid}>
         <span>Send Code</span> 
        </button>
        <Link to="/login" className='text-decoration-none text-black ms-5'>
          Back to Login
        </Link>
      </form>
      </div>
    </div>)
}
