import React from 'react'
import { useFormik } from 'formik';
import Input from '../../pages/Input';
import { LoginSchema, registerSchema } from '../validation/validate.js';
import axios from "axios";
import { toast } from 'react-toastify';
import {  Link, useNavigate } from 'react-router-dom';
import '.././sharedCss/sharedDesign.css'

export default function Login({saveCurrentUser}) {
const navigate=useNavigate()

    const initialValues= {
        email:'',
        password:'',
    };


    const onSubmit = async (users) => {
         const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`,users);
         if (data.message == 'success'){
            localStorage.setItem("UserToken",data.token)
            
            saveCurrentUser();
            toast.success('login successfuly', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                navigate('/')
         }

    }
    const formik = useFormik ({
        initialValues,
        onSubmit,
        validationSchema:LoginSchema
        
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
            id:'password',
            type:'password',
            name:'password',
            title:'user password',
            value:formik.values.password,
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