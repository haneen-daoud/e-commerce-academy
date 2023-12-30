import React from 'react'
import { useFormik } from 'formik';
import Input from '../../pages/Input';
import axios from "axios";
import {  toast } from 'react-toastify';
import {  Link, useNavigate } from 'react-router-dom';
import { forgetPassword} from '../validation/validate.js';
import '.././sharedCss/sharedDesign.css'


export default function Forget() {
const navigate = useNavigate()

    const initialValues= {
        code:'',
        password:'',
        email:'',
    };

    const onSubmit = async (users) => {

         const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/forgotPassword`,
         users
         );
         if (data.message == 'success'){
            toast.success('Password reset successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                navigate('/home')
         }

    }
    const formik = useFormik ({
        initialValues,
        onSubmit,
        forgetPassword,
      
    });

    const inputs = [

        
        {
            id:'email',
            type:'email',
            name:'email',
            title:'user email',
            value:formik.values.email,
        },
        {
            id: 'code',
            type: 'text',
            name: 'code',
            title: 'Enter Code',
            value: formik.values.code,
          },
          {
            id: 'password',
            type: 'password',
            name: 'password',
            title: 'New Password',
            value: formik.values.Password,
          },
    ]

    
    const renderInputs = inputs.map ((input,index)=>
    <Input type={input.type}
           id={input.id}
           name={input.name} 
           title={input.title}
           value={input.value}  
           key={index}
           onChange={input.onChange||formik.handleChange} 
           errors={formik.errors}
           onBlur={formik.handleBlur} 
           touched={formik.touched}/>
    )
    
  return (
    
    <div className=' container'>
        <div className="d-flex justify-content-center ">
        <form onSubmit={formik.handleSubmit} encType='multipart/form-data' className="p-4  w-50 form-main ms-5 mt-5  pt-4  rounded-3 border-3">
        <h1 className='text-black'>Log in</h1>

        {renderInputs}
        <button type='submit' className ='button-48' disabled={!formik.isValid}><span>Login</span></button>
        <Link to="/send" className='text-decoration-none text-black ms-5'>forget password?</Link>
      
        </form>
    </div>
    </div>

  )
}