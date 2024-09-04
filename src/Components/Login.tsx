import React from 'react';
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {Button, Form, Input, FormFeedback } from "reactstrap";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigation = useNavigate();

    const validation = useFormik({
        enableReinitialize: true,
    
        initialValues: {
          email: "",
          password: "",
        },
    
        validationSchema: Yup.object({
          email: Yup.string().email("Enter Valid Email id").required("Please Enter Email"),
          password: Yup.string().required("Please Enter Password"),
        }),
        onSubmit: (values) => {
            navigation("/kanban")
          validation.resetForm();
        },
      });


  return (
    <div className='h-screen w-screen flex flex-col justify-center p-3' >
        <div className='flex justify-center text-[1.2rem] lg:text-[2rem] '>Login</div>

        <div className='flex justify-center  '>
            <Form  onSubmit={(e) => {   e.preventDefault();  validation.handleSubmit();   return false;  }}>
            <div className='flex flex-col gap-y-[1.5rem]'>
                <div className="flex flex-col gap-y-1">
                    <div className='text-[1em] lg:text-[1.2rem] font-semibold'> Email</div>
                    <Input   name="email"
                    className="bg-gray-50 border border-gray-300  p-2.5 rounded-lg text-gray-900 text-md w-full"
                    placeholder="Email"   type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.email || ""}
                    invalid={  validation.touched.email && validation.errors.email  ? true  : false  }/>
                    {validation.touched.email && validation.errors.email ? ( <FormFeedback type="invalid" className="text-red-500">   {validation.errors.email}   </FormFeedback> ) : null}
                </div>

                <div className=" flex flex-col gap-y-3">
                    <div className='text-[1em] lg:text-[1.2rem] font-semibold'>Password</div>
                    <Input   name="password" 
                    className="bg-gray-50 border border-gray-300  p-2.5 rounded-lg text-gray-900 text-md w-full"
                    placeholder="password"   type="password"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.password || ""}
                    invalid={  validation.touched.password && validation.errors.password  ? true  : false  }
                    />
                    {validation.touched.password && validation.errors.password ? ( <FormFeedback type="invalid" className="text-red-500">   {validation.errors.password}   </FormFeedback> ) : null}
                </div>

                <Button className='bg-blue-600 hover:bg-blue-700 p-2 w-[24rem] rounded-md text-white '> Login </Button>
            </div>
            </Form>
        </div>
    </div>
  )
}

export default Login