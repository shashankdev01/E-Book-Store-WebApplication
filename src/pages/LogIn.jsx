import React from 'react' 
import {authActions} from "../store/auth";
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const LogIn = () => {
  const [Values, setValues] = useState({ 
    username: "",
    password: "",
  }); 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const change = (e) =>{
    const {name,value} = e.target;
    setValues({...Values, [name]: value });
  };
  const submit = async () =>{
    try {
      if( Values.username === "" ||
        Values.password === "" 
        )
        {
        alert("all fields are required");
      
      }else{
        console.log(Values);
        const response = await axios.post("http://localhost:2000/api/v1/sign-in",
        Values
        );

        dispatch(authActions.login());
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data._role);

       // navigate("/Login")
      }
      
    } catch (error) {
      alert(error.response.data.message);
    }

  } 
  return (
    <div className='h-screen bg-zinc-900 flex items-center justify-center'>
      <div className='h-fit mt-12 bg-zinc-800 items-center justify-center rounded px-8 py-5 w-full md:w-3/6  lg:w-2/6'>
      <p className='text-3xl text-zinc-100 mt-3 items-center justify-center'> LogIn</p>
      <div className='mt-4 text-xl'>
         <label htmlFor='' className='text-zinc-400'>
                Username
              </label>
                <input type='text' className=' w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                placeholder=' username'
                name='username'
                required
                value={Values.username}
                onChange={change}
                /></div>
            <div className='mt-4 text-xl'>
            <label htmlFor='' className='text-zinc-400'>
                Password
              </label>
                <input type='password' className=' w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none'
                placeholder=' Password'
                name='password'
                required
                value={Values.password}
                onChange={change}
                />
            </div>
            <div className='mt-8'>
            <button className='mt-2 w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-white transition-all duration-300 mt-2 hover:text-zinc-900 p-2 outline-none'
            onClick={submit}
            >
                    LogIn
                </button> 
               
            </div>
            <p className='flex mt-2 items-center justify-center text-zinc-200 font-semibold'> 
             Or 
             </p>
             <p className=' flex mt-2 items-center justify-center text-zinc-500 font-semibold'>
              Don't have any account? &nbsp;
              <Link to="/SignUp" className='hover:text-blue-500'>
                <u>SignUp</u>
              </Link>
               
            </p>
      </div>
      
      
    </div>
  )
}

export default LogIn
