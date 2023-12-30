import axios from 'axios';
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'
import { CartContext } from '../context/Cart';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import './product.mod.css'
export default function Product() {
const {productId}=useParams();
const {addToCartContext}= useContext(CartContext)
const getProduct = async()=>{
const{data}=await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
return data.product
}
const addToCart = async(productId)=>{
 const res =await addToCartContext(productId)
return res
  }
const getStars=(rating)=>{
    let stars = [];
    for(let i=0;i<rating;i++){
       stars.push(<FaStar color="yellow"/>);
    }
    while(stars.length<5){
      stars.push(<FaRegStar/>);
    }
    return stars;
  }
const{data,isLoading}=useQuery('product',getProduct)
if(isLoading)
  return <span class="loader"></span>
  return (
    <>
   <div className="container">
    <div className="row">
   <div className="col-md-7 react-freg">
   {data?.subImages?.map((image, index) => (
     <React.Fragment key={index}>
       <img
         src={image.secure_url}
         alt={`Image ${index}`}
       />
     </React.Fragment>
   ))}

        </div>
        <div className="col-md-5" id="products">
   
          
            <div className="  text-center ms-5   rounded-3 border-3" key={data._id}>


              <h2 className='fs-6 my-4'>{data.name}</h2>
              <p  >{data.description}</p>
              <div className=" d-flex align-items-end justify-content-around">
                <button className="button-48" role="button" onClick={() => addToCart(data._id)} ><span>add product</span></button>

                <Link className="button-48" role="button" to={`review`}><span>Add review</span></Link>


              </div>
            </div>
         

        </div>
        </div>



        <div className='py-5'>


          <h2 className='py-5 mt-5 rev text-center'>Reviews</h2>

          <div className=" row  mt-5 d-flex">
            {data?.reviews.map((review) => (
              <div className="card col-md-3 mb-3 py-4">
                <img src={review.createdBy.image.secure_url} className={` img-fluid rounded-3 `} width={'70px'} />
                <div className="card-body text-center">
                  <h5 className="card-title">{review.createdBy.userName}</h5>
                  <p className="card-text text-dark">
                    {getStars(review.rating)}
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {review.comment}
                    </small>
                  </p>
                </div>
              </div>
          ))
          }:<h2>no review</h2>
        </div>
        
       
      </div>
   </div>
   </>
  )
  }

 