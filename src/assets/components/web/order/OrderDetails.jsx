import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import './orderDetails.css'
import { Link, useParams } from 'react-router-dom'
export default function OrderDetails() {

  let token = localStorage.getItem("UserToken")
  const getOrder = async ()=>{
  const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/order`,{ headers: { Authorization: `Tariq__${token}` } });
  return data;

  }
  const { orderId } = useParams()

const deleteorder =async(orderId)=>{
  try{
  const{data}=await axios.patch(`${import.meta.env.VITE_API_URL}/order/cancel/${orderId}`,
  {},
  {headers:{Authorization: `Tariq__${token}`}}
  )
  if (data.message == 'success') {
    toast.success('order removed successfuly', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
}
return data
  }catch(error){
    console.log(error)
  }
}
const {data,isLoading} =useQuery("getOrder",getOrder);

  if(isLoading){
    return <div className='container'><span class="loader"></span></div>
  }
  return (
    <div className="container-fluid">
    <div className="row flex-nowrap">
   
    <div className="col py-3">
      
    <table className="table ">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Address</th>
        <th scope="col">Phone Number:</th>
        <th scope="col">Final Price:</th>
        <th scope="col">action</th>
  
  
  
      </tr>
    </thead>
    <tbody>
    {data?.orders
          ? data.orders.map((order, index) => (
      <React.Fragment key={index}>
          <tr>
          <td>{order.address}</td>
                <td>{order.phoneNumber}</td>
                <td> {order.finalPrice}</td>
                <td>{order.paymentType}</td>

              <td className=' btn  text-decoration-none ' onClick={()=>{deleteorder(order._id)}}> delete</td>
  
  
          </tr>
      </React.Fragment>
  
  )
  )
  :<h2>No Data</h2>}
    </tbody>
  </table>
  
  
  
      </div>
    </div>
  </div>
   
  );
}





  