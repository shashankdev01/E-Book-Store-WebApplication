 import React from 'react'
import Hero from '../components/Home/Hero'
import RecentlyAddedBook from '../components/Home/RecentlyAddedBook'
 
 const Homes = () => {
   return (
     <div className='bg-zinc-900 text-white py-8 px-10  '>
        <Hero/>
        <RecentlyAddedBook/>
     </div>
   )
 }
 
 export default Homes
 