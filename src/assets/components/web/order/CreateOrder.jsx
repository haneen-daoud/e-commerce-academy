import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { CartContext } from '../context/Cart'
import { useFormik } from 'formik';
import Input from '../../pages/Input';
import {Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function CreateOrder() {
    const navigate=useNavigate()

    const initialValues= {
        couponName:'',
        address:'',
        phone:'',
    };

const { getCartContext } = useContext(CartContext)

const onSubmit = async (users) => {
try{
  const token = localStorage.getItem("UserToken")
  const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/order`,
    users,
    { headers: { Authorization: `Tariq__${token}` } }
    );
    console.log(data)
    if (data.message == 'success'){
       toast.success('order complete successfully', {
           position: "top-right",
           autoClose: 3000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
           });
           navigate('/profile')
    }
    return data
  }catch(error){
    console.log(error)
  }

}

  const getCart = async () => {
    const res = await getCartContext()

    return res
  }
  const { data, isLoading } = useQuery("cart", getCart)

  const formik = useFormik ({
    initialValues,
    onSubmit,
   
  
});
const inputs = [

        
    {
        id:'couponName',
        type:'couponName',
        name:'couponName',
        title:'couponName',
        value:formik.values.couponName,
    },
    {
        id: 'address',
        type: 'address',
        name: 'address',
        title: 'Enter address',
        value: formik.values.address,
      },
      {
        id: 'phone',
        type: 'phone',
        name: 'phone',
        title: ' phone',
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

if (isLoading) {
  return <span class="loader"></span>
}
  return (
<div className="cart">
      <div className="container">
        <div className="d-flex">
      
            <div className="products " id="products">
              
              {data?.products ? (data.products.map((product) =>
                <div className=" col-md-6 card-product text-center ms-5 mt-5 pt-4  rounded-3 border-3" key={product._id}>
                 
                    <img src={product.details.mainImage.secure_url} className='img-fluid w-50 h-50'/>
                    <div className="product-details">
                      <h2>{product.details.name}</h2>
                    </div>
                    <div className="product-quantity rounded-3 text-black  text-center">
                    <h2 >{product.quantity}</h2></div>
                  </div>
                  
             
              )
            
              ) : <h2>cart is empty</h2>
              
              }

          </div>
     
        <form onSubmit={formik.handleSubmit} encType='multipart/form-data' className='form-main col-md-7 h-50 margin-auto' >
        <h2 className='text-center'>create order</h2>
        {renderInputs}
        <div className=' text-center'>
        <button type='submit' disabled={!formik.isValid} className="button-48 text-black"><span>order to install</span></button>
        </div>
        </form>
    </div>



      </div>
    </div>

  )
}
