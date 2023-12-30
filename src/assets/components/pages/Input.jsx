import React from 'react'
import './input.css'
export default function Input({ id, type = 'text', name, title, value, onChange, errors, onBulr, touched }) {
  return (
    <>
      <form className=" mb-3 ">
        <label htmlFor={id} >{title}</label>
        <input type={type} name={name} className="form-control" id={id} value={value} onChange={onChange} onBulr={onBulr} />
        {touched[name] && errors[name] && <p className='text text-danger'>{errors[name]}</p>}
      </form>
    </>
  )
}
