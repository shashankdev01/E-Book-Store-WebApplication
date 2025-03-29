import React from 'react'
import { Link } from 'react-router-dom';
  

const BookCard = ({data}) => {
     
  return (
    <>
    <Link to={`/view-book-details/${data._id}`}>
        <div className='bg-zinc-800 p-4 rounded flex flex-col'>
            <div className='bg-zinc-900 rounded flex items-center justify-center'>
                <img src={data.url} alt="/" className='h-[25vh]'/> 
             </div> 
                <h2 className='mt-4 text-xl font-semibold text-white'>{data.title}</h2> 

                <p className='text-zinc-200 font-semibold mt-2'>{data.author}</p>
             <p className='text-xl text-zinc-200 font-semibold mt-2'> ₹ {data.price}</p>            
            </div>
             
        </Link>
    </>
  )
}


export default BookCard;