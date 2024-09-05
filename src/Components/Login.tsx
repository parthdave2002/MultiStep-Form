import * as Yup from "yup";
import { useFormik } from "formik";
import {Button, Form, Input, FormFeedback } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

const Login = () => {
    const navigation = useNavigate();
    const dispatch =  useDispatch();

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
          // dispatch(insertlogin(values))
          validation.resetForm();
        },
      });

      const CreateAccountCall = () =>{
        navigation("/signup")
      }


  return (
      <div className="flex min-h-full flex flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10  text-[2rem] font-bold leading-9 tracking-tight text-gray-900"> Login </h2>
          <h2 className="text-[1.5rem] font-semibold  tracking-tight text-gray-900"> Welcome back </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form onSubmit={(e) =>{ e.preventDefault();  validation.handleSubmit();  return false}} className="space-y-6">
            <div>
              <div className="block text-sm font-medium leading-6 text-gray-900 lg:text-[1.2rem]">  Email  </div>
              <div className="mt-2">
                <Input id="email" name="email"  type="email"  onChange={validation.handleChange} onBlur={validation.handleBlur}  value={validation.values.email || ""}  invalid={  validation.touched.email && validation.errors.email  ? true  : false  }  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
                {validation.touched.email && validation.errors.email ? ( <FormFeedback type="invalid" className="text-red-500">   {validation.errors.email}   </FormFeedback> ) : null}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="block text-sm font-medium leading-6 text-gray-900 lg:text-[1.2rem]"> Password  </div>
                <div className="text-sm"> <div  className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"> Forgot password? </div> </div>
              </div>
              <div className="mt-2">
                <Input id="password" name="password"  type="password" onChange={validation.handleChange} onBlur={validation.handleBlur}  value={validation.values.password || ""}  invalid={  validation.touched.password && validation.errors.password  ? true  : false  }  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  />
                {validation.touched.password && validation.errors.password ? ( <FormFeedback type="invalid" className="text-red-500">   {validation.errors.password}   </FormFeedback> ) : null}
              </div>
            </div>

            <div>
              <Button type="submit"  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >  Sign in </Button>
            </div>
          </Form>

          <p className="mt-10 text-center text-sm text-gray-500 lg:flex lg:justify-center lg:text-center ">  <div className='self-center'> I don't have Account?</div>  <div  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer" onClick={() => CreateAccountCall()}> Create a Account  </div> </p>
        </div>
      </div>
  )
}

export default Login