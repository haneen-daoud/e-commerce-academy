import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import "./CategoriesDetails.css"
export default function CategoriesDetails() {
  //لحتى اجيب العنوان من الرابط
  const { categoryId } = useParams()
  //اجيب البيانات من الباك اند
  const getCategoriesDetails = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryId}`);
    return data.products

  }
  const { data, isLoading } = useQuery('category-details', getCategoriesDetails);
  if (isLoading) {
    return <span class="loader"></span>
  }
  return (
<div className="container">
    <div className="row">
    {data?.length?data.map((product)=>
        <div className=" col-md-4 text-center my-5 product-box">
          <div className={" contentPro"}>
            <div className="imagePro h-75 margin-auto">
            <img src={product.mainImage.secure_url} className="pb-3 img-fluid"/></div>
            <h2 className='fs-6'>{product.name}</h2>
          <div className="create_Review d-flex justify-content-around">
          <Link to={`/products/${product._id}`} className={"button-48 text-decoration-none py-3 px-2 mb-2"}><span>Details</span></Link>

            <Link className={` button-48 text-decoration-none  py-3 px-2 mb-2`} to={`review`}><span>Add Review</span></Link>
          </div>
        </div>
      </div>
  ) : <h2> product not found</h2>}
    </div>
  </div>
  )
}
