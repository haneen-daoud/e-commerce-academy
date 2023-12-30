import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import "./product.mod.css"
import { CartContext } from '../context/Cart'
export default function AllProduct() {
    const {addToCartContext}= useContext(CartContext)

    const getAllProduct =async()=>{
        try{
        const{data}=await axios.get(`${import.meta.env.VITE_API_URL}/products?page=1&limit=10`)
        return data
    }catch(error){
        console.log(error)
    }
    
    }
    const addToCart = async(productId)=>{
        const res =await addToCartContext(productId)
       return res
         }
    const{data,isLoading}=useQuery('product',getAllProduct)
    console.log(data)

if(isLoading){
    return <span class="loader"></span>
}
  return (
    <>
          
            <div className="container">
                    <div className=" row" id="products">

                        {data?.products ? (data.products.map((product) =>
                            <div className="col-md-3 card-product text-center ms-5 mt-5 pt-4  rounded-3 border-3" key={product._id}>
                               
                                    <img src={product.mainImage.secure_url} className='img-fluid w-50 h-50' />
                                   
                                        <h2 className='fs-6 my-4'>{product.name}</h2>
                                        <h2 >{product.quantity}</h2>
                                <div className=" d-flex align-items-end justify-content-around">
                                    <button className="button-48" role="button" onClick={() => addToCart(product._id)} ><span>add product</span></button>
                                    
                                        <Link className="button-48" role="button" to={`review`}><span>add review</span></Link>
                                 

                                </div>
                            </div>
                        )
                        ) : <h2>cart is empty</h2>

                        }

                    </div>
               

          
                    </div>
   </>
 )
}
