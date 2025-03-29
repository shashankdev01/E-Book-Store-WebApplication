import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='h-[80vh] flex flex-col md:flex-row items-center justify-center'>
      <div className='w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items:center lg:items-start justify-center '>
        <h1 className='text-4xl lg:text-6xl font-semibold text-yellow-150 text-center lg:text-left hover:text-yellow-200'> Welcome to Online Book Store.... <br/> Discover New Books with your passion..<br/> Get your New Books Collections </h1>
        <p className='mt-4 text-xl text-zinc-250 text-center lg:text-left hover:text-yellow-200'>
           Uncover captivting stories, enriching knowledge,
           and endless inspiration in our curated collection of books</p> 
         <div className='mt-8'>
          <Link 
           to ='/all-books'
           className='flex flex-col md:flex-row  items-center justify-between text-yellow-120 bg-zinc-120 border border-white-100
           rounded-full text-xl lg:text-2xl font-semibold px-10 py-2 hover:bg-zinc-800 hover:text-yellow-200'>
             Discover Books
          </Link>
         </div>
      </div>
      <div className=' w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center'>
        <img src='./hero.png' alt='hero'/>
      </div>
      
    </div>
  )
}

export default Hero  
