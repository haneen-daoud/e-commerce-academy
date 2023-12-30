import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import Input from "../../pages/Input";
import axios from "axios";
import { toast } from "react-toastify";
import ".././sharedCss/sharedDesign.css"
export default function Review() {
  const { id } = useParams();
  let navigate = useNavigate();
  let token = localStorage.getItem("UserToken");
  const initialValues = {
    comment: "",
    rating: "",
  };

  const onSubmit = async (comment) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/products/${id}/review`,
        comment,
        { headers: { Authorization: `Tariq__${token}` } }
      );
      console.log(data);

      if (data.message == "success") {
        toast.success("your comment is puplished successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate(`/products/${id}/productreview`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validateOnBlur: true,
    validateOnChange: false,
  });
  const inputs = [
    {
      id: "comment",
      type: "text",
      name: "comment",
      title: "Comment",
      value: formik.values.comment,
    },
    {
      id: "rating",
      type: "number",
      name: "rating",
      title: "Rating",
      value: formik.values.rating,
    },
  ];
  const renderInputs = inputs.map((input, index) => (
    <Input
      type={input.type}
      name={input.name}
      id={input.id}
      title={input.title}
      value={input.value}
      key={index}
      errors={formik.errors}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      touched={formik.touched}
    />
  ));
  return (
    <>
      <div className="container m-auto w-50 pt-5">
        <h2 className="text-center">Send Review</h2>
        <form
          onSubmit={formik.handleSubmit}
          className="p-4 form-main ms-5 mt-5 text-center pt-4  rounded-3 border-3"
          encType="multipart/form-data"
        >
          {renderInputs}
          <div className=" my-4 d-block m-auto w-50 ">
            <button
              type="submit"
              className=" button-48 text-center text-black"
             role="button"
            ><span>Post Review</span></button>
          </div>
        </form>
      </div>
    </>
  );
}
