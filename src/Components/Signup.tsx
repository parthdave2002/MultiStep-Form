import React  from 'react';
import * as Yup from "yup";
import { useFormik } from "formik";
import {Button, Form, Input, FormFeedback } from "reactstrap";
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const navigation = useNavigate();

    const PricingPlan =[
        {
            title: "Gold",
            monthlyprice: "15",
            yearlyprice: "144"
        },
        {
            title: "Titanium",
            monthlyprice: "30",
            yearlyprice: "288"
        }
    ]


    const [SelectedStatueOption, setSelectedStatueOption] = useState(null);
    const [SelectedStatueid, setSelectedStatueid] = useState(null);
  
    const Statueoptions = [
      { value: 'Gujarat', label: 'Gujarat' },
      { value: 'Maharastra', label: 'Maharastra' },
      { value: 'Delhi', label: 'Delhi' },
      { value: 'Rajsthan', label: 'Rajsthan' },
      { value: 'Kerala', label: 'Kerala' },
    ]

    const Statuedata = (data: any) => {
        if (!data) {
          setSelectedStatueid(null);
          setSelectedStatueOption(null);
        } else {
          setSelectedStatueid(data.value);
          setSelectedStatueOption(data);
        }
      };


    const validation = useFormik({


        enableReinitialize: true,
    
        initialValues: {
          firstname: "",
          lastname: "",
          email: "",
          companyname: "",
          companywebiste:"",
          zipcode:"",
        },
    
        validationSchema: Yup.object({
          firstname: Yup.string().required("Please Enter firstname"),
          lastname: Yup.string().required("Please Enter lastname"),
          email:Yup.string().required("Please Enter Email").email("Please Enter Valid Email id"),
          companyname : Yup.string().required("Please Enter Company Name"),
          companywebiste: Yup.string().required("Please Enter Company Website"),
          zipcode: Yup.string().required("Please Enter Zipcode"),
        }),



        onSubmit: (values) => {
            if(currentStep == 1 ||  currentStep == 2){
                setCurrentStep((prev) => prev +1);
            }

          if(currentStep == 3){
            setComplete(true);
            toast.success("Thank you for Signup ");
            setTimeout(() => {
                navigation("/")
              }, 4000);
          }
        },
      });

    const steps = ["Personal ", "Company ", "Plan Selection"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);

    // datepicker code
    const [NextFollowupDate, setNextFollowupDate] = useState(null);
    const NextDate = (e:any) =>{
      setNextFollowupDate(e.target.value);
    }
    
    // Annual plan code 
    const [isChecked, setIsChecked] = useState(false)
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked)
    }

    const [isSelectedPlan, setIsSelectedPlan] = useState("")
    const SelectedPlanCall = (name:any) =>{
        setIsSelectedPlan(name)
    }

    const ResetPlan = () =>{
        setIsSelectedPlan("");
    }

    //  radio button code 
    const [selectedWFHOption, setSelectedWFHOption] = useState('');
    const handleradioChange = (e:any) => {
      setSelectedWFHOption(e.target.value);
    }

    // Checkbox code
    const handlelangcheck = (e:any) => {
        console.log(e.target.value)
    };


    return (
    <div  className="flex min-h-full flex flex-col justify-center px-6 py-12 lg:px-8 ">

        <div className="flex justify-center ">
                {steps?.map((step, i) => (
                <div key={i}  className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete" } `} >
                    <div className="step">  {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1} </div>
                    <p className="text-gray-500">{step}</p>
                </div>
                ))}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
          <Form onSubmit={(e) =>{ e.preventDefault();  validation.handleSubmit();  return false}} className="space-y-6">
                <>
                    {currentStep && currentStep == 1 ?
                        <>
                            <div className='lg:flex lg:justify-between'>
                            <div>
                            <div className="block text-sm font-medium leading-6 text-gray-900 lg:text-[1rem]">  First Name  </div>
                            <div className="mt-2">
                                <Input id="firstname" name="firstname"  type="text"  onChange={validation.handleChange} onBlur={validation.handleBlur}  value={validation.values.firstname || ""}  invalid={  validation.touched.firstname && validation.errors.firstname  ? true  : false  }  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 lg:text-[1rem] font-semibold"  />
                                {validation.touched.firstname && validation.errors.firstname ? ( <FormFeedback type="invalid" className="text-red-500">   {validation.errors.firstname}   </FormFeedback> ) : null}
                            </div>
                            </div>
        
                            <div>
                            <div className="flex items-center justify-between">  <div className="block text-sm font-medium leading-6 text-gray-900 lg:text-[1rem]"> Last Name  </div> </div>
                            <div className="mt-2">
                                <Input id="lastname" name="lastname"  type="text" onChange={validation.handleChange} onBlur={validation.handleBlur}  value={validation.values.lastname || ""}  invalid={  validation.touched.lastname && validation.errors.lastname  ? true  : false  }  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 lg:text-[1rem] font-semibold"  />
                                {validation.touched.lastname && validation.errors.lastname ? ( <FormFeedback type="invalid" className="text-red-500">   {validation.errors.lastname}   </FormFeedback> ) : null}
                            </div>
                            </div>
                            </div>

                            <div>
                                <Select
                                    classNames={{ control: (state) => state.isFocused ? 'border-0 shadow-inner shadow-indigo-500/50 hover:shadow-indigo-500/40  rounded-xl' : 'border-0 shadow-inner shadow-indigo-500/50 hover:shadow-indigo-500/40  rounded-md ' }}
                                    value={SelectedStatueOption}
                                    onChange={(e) => { Statuedata(e); }}
                                    options={Statueoptions}
                                    isClearable={true}
                                /> 
                            </div>

                            <div>
                                <div className="block text-sm font-medium leading-6 text-gray-900 lg:text-[1rem]">  Email  </div>
                                <div className="mt-2">
                                    <Input id="email" name="email"  type="text"  onChange={validation.handleChange} onBlur={validation.handleBlur}  value={validation.values.email || ""}  invalid={  validation.touched.email && validation.errors.email  ? true  : false  }  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 lg:text-[1rem] font-semibold"  />
                                    {validation.touched.email && validation.errors.email ? ( <FormFeedback type="invalid" className="text-red-500">   {validation.errors.email}   </FormFeedback> ) : null}
                                </div>
                            </div>

                            <div>
                            <div className="flex items-center justify-between">  <div className="block text-sm font-medium leading-6 text-gray-900 lg:text-[1rem]"> Zipcode  </div> </div>
                            <div className="mt-2">
                                <Input id="zipcode" name="zipcode"  type="number" onChange={validation.handleChange} onBlur={validation.handleBlur}  value={validation.values.zipcode || ""}  invalid={  validation.touched.zipcode && validation.errors.zipcode  ? true  : false  }  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 lg:text-[1rem] font-semibold"  />
                                {validation.touched.zipcode && validation.errors.zipcode ? ( <FormFeedback type="invalid" className="text-red-500">   {validation.errors.zipcode}   </FormFeedback> ) : null}
                            </div>
                            </div>
                
                            <div>
                                <div className="block text-sm font-medium leading-6 text-gray-900 lg:text-[1rem]">  Company Name  </div>
                                <div className="mt-2">
                                    <Input id="companyname" name="companyname"  type="text"  onChange={validation.handleChange} onBlur={validation.handleBlur}  value={validation.values.companyname || ""}  invalid={  validation.touched.companyname && validation.errors.companyname  ? true  : false  }  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 lg:text-[1rem] font-semibold"  />
                                    {validation.touched.companyname && validation.errors.companyname ? ( <FormFeedback type="invalid" className="text-red-500">   {validation.errors.companyname}   </FormFeedback> ) : null}
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">  <div className="block text-sm font-medium leading-6 text-gray-900 lg:text-[1rem]">  Company Website  </div> </div>
                                <div className="mt-2">
                                    <Input id="companywebiste" name="companywebiste"  type="text" onChange={validation.handleChange} onBlur={validation.handleBlur}  value={validation.values.companywebiste || ""}  invalid={  validation.touched.companywebiste && validation.errors.companywebiste  ? true  : false  }  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 lg:text-[1rem] font-semibold"  />
                                    {validation.touched.companywebiste && validation.errors.companywebiste ? ( <FormFeedback type="invalid" className="text-red-500">   {validation.errors.companywebiste}   </FormFeedback> ) : null}
                                </div>
                            </div>

                        </>
                    : currentStep && currentStep == 2 ?  
                        <>
                            <div>
                                <div className="flex items-center justify-between">  <div className="block text-sm font-medium leading-6 text-gray-900 lg:text-[1rem]">   Your company is working on which languages ?  </div> </div>
                                <div className="mt-2  lg:grid grid-cols-2 text-[1rem] text-semibold lg:text-[1.2rem]">
                                    <div className='flex  gap-x-3 '>  <Input id="react" name="react"  type="checkbox" value="React"   />  <div>React  </div>  </div>
                                    <div className='flex  gap-x-3 '>  <Input id="react native" name="react native"  type="checkbox" value="React Native"   />  <div>React Native  </div>  </div>
                                    <div className='flex  gap-x-3 '>  <Input id="node" name="node"  type="checkbox" value="Node"   />  <div>Node  </div>  </div>
                                    <div className='flex  gap-x-3 '>  <Input id="python" name="python"  type="checkbox" value="Python"   />  <div>Python  </div>  </div>
                                    <div className='flex  gap-x-3 '>  <Input id="laravel" name="laravel"  type="checkbox" value="Laravel"   />  <div>Laravel  </div>  </div>
                                </div>
                            </div>

                            <div>
                            <div className="flex items-center justify-between">  <div className="block text-sm font-medium leading-6 text-gray-900 lg:text-[1rem]">  How many employees are in your company ?   </div> </div>
                            <div className="mt-2  lg:grid grid-cols-2 text-[1rem] text-semibold lg:text-[1.2rem]">
                                <div className='flex  gap-x-3 '>  <Input id="languages" name="languages" onChange={ (e) => handlelangcheck(e)} value="1-10"  type="checkbox"   />  <div>1-10  </div>  </div>
                                <div className='flex  gap-x-3 '>  <Input id="languages" name="languages" onChange={ (e) => handlelangcheck(e)} value="10-20"  type="checkbox"   />  <div> 10-20  </div>  </div>
                                <div className='flex  gap-x-3 '>  <Input id="languages" name="languages" onChange={ (e) => handlelangcheck(e)} value="20-30"  type="checkbox"  />  <div>20-30  </div>  </div>
                                <div className='flex  gap-x-3 '>  <Input id="languages" name="languages" onChange={ (e) => handlelangcheck(e)} value="4+0"  type="checkbox"  />  <div>40+  </div>  </div>
                            </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">  <div className="block text-sm font-medium leading-6 text-gray-900 lg:text-[1rem]">  Does the company have a WFH policy ?   </div> </div>
                                <div className="mt-2  lg:flex gap-x-[5rem] text-[1rem] text-semibold lg:text-[1.2rem]">
                                    <div className='flex  gap-x-3 '>  <Input id="Yes" name="radioselection"  type="radio" value="Yes" onChange={(e) => handleradioChange(e) }/>  <div>Yes  </div>  </div>
                                    <div className='flex  gap-x-3 '>  <Input id="No" name="radioselection"  type="radio" value="No"  onChange={(e) => handleradioChange(e) }/>  <div> No  </div>  </div>
                                </div>
                            </div>
                        </>
                    :  
                        <>
                            <div className='flex my-[2rem] lg:my-[3rem] gap-x-5'>
                                <div className="flex items-center justify-between">  <div className="block text-sm font-medium leading-6 text-gray-900 lg:text-[1rem]">  Start Plan Date : </div> </div>
                                <div className="mt-2">   <input type="date" className="border border-gray-500 rounded-md p-1 lg:p-2 text-black" onChange={(e) => {NextDate(e)}}/>    </div>
                            </div>

                            <div className='flex flex-col gap-y-3'>
                                <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center flex justify-center'>
                                    <Input type='checkbox' checked={isChecked}  onChange={handleCheckboxChange}  className='sr-only'  />
                                    <span className='label flex items-center text-sm font-medium text-black'> Monthly  </span>
                                    <span  className={`slider mx-4 flex h-6 w-[60px] items-center rounded-full p-1 duration-200 ${ isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]' }`}>
                                    <span className={`dot h-6 w-6 rounded-full bg-white duration-200 ${isChecked ? 'translate-x-[28px]' : ''}`} ></span>
                                    </span>
                                    <span className='label flex items-center text-sm font-medium text-black'> Annually </span>
                                </label>
                                
                                {isSelectedPlan && isSelectedPlan.length> 0 ?
                                    <Button className='flex justify-center p-2  w-[6rem] text-white rounded-md  bg-blue-500 hover:bg-blue-600' onClick={() => ResetPlan()}>  Reset</Button >
                                : null}

                                <div className='lg:flex justify-between gap-x-3'>
                                    {PricingPlan && PricingPlan.map((item:any, k:any) =>{
                                        return(
                                            <div className={`border  rounded-md p-4  w-full ${item.title === isSelectedPlan ? 'bg-green-200' : ''}`}  onClick={() => SelectedPlanCall(item.title)}>
                                                <div className='text-[1.2rem] font-semibold'>{item.title}  </div>
                                                <div>
                                                    {isChecked ? 
                                                       <div className='text-[1.2rem] font-semibold'> $ {item.yearlyprice} /year </div>
                                                    : 
                                                    <div  className='text-[1.2rem] font-semibold'> $ {item.monthlyprice} /month  </div>
                                                    } 
                                                 </div>
                                            </div> 
                                        )})
                                    }
                                </div>
                            </div>
                        </>
                    }
                </>
                
                    <div className='flex  justify-between '>
                        {currentStep && currentStep == 2 || currentStep == 3  ?<Button type='submit' className="flex justify-end rounded-md bg-indigo-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"  onClick={() => { setCurrentStep((prev) => prev - 1);}}> Previous </Button>  : null}
                        {currentStep && currentStep == 1 || currentStep == 2  ?<Button type='submit' className="flex justify-end rounded-md bg-indigo-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Next </Button>  : null}
                        {currentStep == 3  ?<Button type='submit' className=" rounded-md bg-indigo-600 px-3 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >  Finish </Button>  : null}
                    </div>
               
          </Form>
        </div>

        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    </div>
  )
}

export default Signup;