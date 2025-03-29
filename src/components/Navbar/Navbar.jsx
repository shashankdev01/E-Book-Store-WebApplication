import React from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const links = [
        {
            title: "Home",
            link: "/",
        },
        
        {
            title: "All Books",
            link: "/all-books",
        },
        
        {
            title: "Cart",
            link: "/cart",
        },
        {
            title: "Profile",
            link: "/profile",
        },
        
    ];
    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
     if(isLoggedIn === false){
        links.splice(2,2);
     }
    const [mobileNav, setmobileNav] = useState("hidden");
  return (
    <>
    <nav className='z-50 relative px-4 flex bg-zinc-800 text-white px-8 py-4 items-center justify-between'>
       <Link to="/" className='flex items-center'>
        <img
         className= 'h-10 me-4'
         src='https://cdn-icons-png.flaticon.com/128/10433/10433049.png'
         alt='logo' /> 
        
        <h1 className='text-2xl font-semibold'>HellBooks</h1>
        </Link>

       <div className='nav-links-hellbooks block md:flex items-center gap-4'>
       <div className='hidden md:flex gap-4'>
         {links.map((items, i)=>(
            <Link
                to={items.link}            
            className='hover:text-blue-500 transition-all duration-300'
             key={i}
            >
             {items.title}
            </Link>
        ))}
        </div>
       <div className='hidden md:flex gap-4'>
        <Link to="LogIn" className='px-2 py-1 border border-blue-500 rounded hover:text-zinc-800 hover:bg-white transition-all duration-300'>LogIn</Link>
        <Link to= "SignUp" className='px-2 py-1 bg-blue-500 text-zinc-800 rounded hover:bg-white transition-all duration-300'>SignUp</Link>
       </div>
       <button className=' block md:hidden text:white text-2xl hover:text-420'
        onClick={()=> 
        mobileNav === "hidden"
        ? setmobileNav("block") 
        : setmobileNav("hidden")
        }> 
       
       <IoReorderThreeOutline />
        </button>

       </div>
    </nav>
    <div className={`${mobileNav} absolute top-0 left-0 z-40 bg-zinc-800 h-screen w-full flex flex-col items-center justify-center`}>
    {links.map((items, i)=>(
            <Link
                to={items.link}            
            className={` ${mobileNav} font-semibold text-white text-4xl mb-8 hover:text-blue-500 transition-all duration-300`}
             key={i}
             onClick={()=> 
                mobileNav === "hidden"
                ? setmobileNav("block") 
                : setmobileNav("hidden")
                }
                > 
             {items.title}
             
            </Link>
        ))}
         <Link to="LogIn" className={ `${mobileNav} text-semibold text-3xl px-8 mb-8 py-2 border border-blue-500 rounded text-white hover:text-zinc-800 hover:bg-white transition-all duration-300`}>LogIn</Link>
        <Link to= "SignUp" className={ `${mobileNav} text-semibold text-3xl px-6 mb-8 py-2 bg-blue-500 text-zinc-800 rounded hover:bg-white transition-all duration-300`}>SignUp</Link>
    
    </div>
    </>
  );
};

export default Navbar;
 