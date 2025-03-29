import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
 


 
const SignUp = () => {
  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  }); 
  const navigate = useNavigate();
  const change = (e) =>{
    const {name,value} = e.target;
    setValues({...Values, [name]: value });
  };
  const submit = async () =>{
    try {
      if( Values.username === ""||
          Values.email === "" ||
          Values.password === ""||
          Values.address === ""
        )
        {
        alert("all fields are required");
      
      }else{
        console.log(Values);
        const response = await axios.post("http://localhost:2000/api/v1/sign-up",
        Values
        );
        alert(response.data.message);
        navigate("/Login")
      }
      
    } catch (error) {
      alert(error.response.data.message);
    }

  } 

  
  return (
    <div className='h-[100vh] md:h-[120vh] bg-zinc-900 flex itmes-center justify-center px-8 '>
        <div className='h-[70vh] md:h-[90vh] mt-12 bg-zinc-800 rounded-lg px-8 py-5 w-full md:w-3/6 lg:w-2/6'>
          <p className='text-3xl text-zinc-100 items-center justify-center'>Sign Up</p>
          <div className='mt-4'>
            <div>
              <label htmlFor='' className='text-zinc-400'>
                Username
              </label>
                <input type='text' className=' w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                placeholder=' username'
                name='username'
                required
                value={Values.username}
                onChange={change}
                />
            </div>
            <div className='mt-4'>
              <label htmlFor='' className='text-zinc-400'>
               Email
              </label>
                <input type='text' 
                className=' w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                placeholder=' abc@example.com '
                name='email'
                required
                value={Values.email}
                onChange={change}
                />
            </div>
            <div className='mt-4'>
              <label htmlFor='' className='text-zinc-400'>
                Password
              </label>
                <input type='password' className=' w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                placeholder='password'
                name='password'
                required
                value={Values.password}
                onChange={change}
                                />
            </div>
            <div className='mt-4'>
              <label htmlFor='' className='text-zinc-400'>
                Address
              </label>
                <textarea  className=' w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                rows='4'
                placeholder='address'
                name='address'
                required
                value={Values.address}
                onChange={change}
                />
            </div>
            
              <div className='text-zinc-400'>
                <button className='mt-2 w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-white 
                transition-all duration-300 mt-2 hover:text-zinc-900 p-2 outline-none' onClick={submit}
                 
                 >
                    SignUp
                </button>           
            </div>
            <p className='flex mt-2 items-center justify-center text-zinc-200 font-semibold'> 
              or
            </p>
            <p className=' flex mt-2 items-center justify-center text-zinc-500 font-semibold'>
              Already have an account? &nbsp;
              <Link to="/login" className='hover:text-blue-500'>
                <u>LogIn</u>
              </Link>
               
            </p>
          </div>
        </div>
    </div>
  )
}

export default SignUp
