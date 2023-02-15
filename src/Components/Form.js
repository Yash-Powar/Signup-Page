import React from 'react'
import bgImg from '../assets/img1.jpg';
import {useForm} from 'react-hook-form';

export default function Form() {

const {register,handleSubmit,watch,formState:{errors}} = useForm()

 const OnSubmit = data => console.log(data);

 console.log(watch("username"));

  return (
   <section>
    <div className='register'>
    <div className='col-1'>
        <h1>Sign in</h1>
        <span>Register and Enjoy the Service</span>

        <form id='form' className='flex flex-col' onSubmit={handleSubmit(OnSubmit)}>
            <input type="text"{...register("username")}placeholder='username'/>
            <input type="text"{...register("password")} placeholder='Password'/>
            <input type="text"{...register("confirmpwd")} placeholder='Confirm Password'/>
            <input type="text"{...register("mobile",{required:true,maxLength:10})} placeholder='Mobile Number'/>
            {errors.mobile?.type== "required" && "Mobile Number is required"}
            {errors.mobile?.type== "maxLength" && "Max Length  Exceed"}

            <button className='btn'>Sign-up</button>
        </form>
    </div>
    <div className='col-2'>
        <img src={bgImg} alt=""/>
    </div>
    </div>
   </section>
  )
}
