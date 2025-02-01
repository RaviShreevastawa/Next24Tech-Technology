import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async (data) =>  {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try{
            await axios.post("https://getform.io/f/pbygmzlb", userInfo);
            toast.success("Your message has been sent");
        }catch(error){
            console.log(error);
            toast.error("Something Went wrong");
        }
      }
  return (
     <>
        <hr/>
        <div 
            name="Contact"
            className='max-w-screen-2xl text-white container mx-auto px-4 md:px-20 my-20'>
            <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
            <span>Please fill out the form below to contact me</span>
            <div className='flex flex-col items-center justify-center mt-5'>
                <form
                    onSubmit={handleSubmit(onSubmit)} 
                    //action="https://getform.io/f/pbygmzlb"
                    //method='POST' 
                    className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                    <h1 className='text-xl font-semibold mb-4 text-black'>Send Your Message</h1>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-black'>FullName</label>
                        <input 
                            {...register("name", { required: true })}
                            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight font-bold'
                            id='name'
                            name='name'
                            type="text"
                            placeholder='Enter Your FullName' 
                        />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div name="Contact" className='flex flex-col mb-4'>
                        <label className='block text-black'>Email</label>
                        <input 
                            {...register("email", { required: true })}
                            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight font-bold'
                            id='email'
                            name='email'
                            type="text"
                            placeholder='Enter Your Email'
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className='flex flex-col mb-4'>
                        <label className='block text-black'>Message</label>
                        <textarea 
                            {...register("message", { required: true })}
                            className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight font-bold'
                            id='message'
                            name='message'
                            type="text"
                            placeholder='Enter Your Message' 
                        />
                        {errors.message && <span>This field is required</span>}
                    </div>
                    <button className='bg-black text-white rounded-xl px-3 py-2 hover:slate-700 duration-300'>Send</button>
                </form>
            </div>
        </div>
     </>
  )
}
