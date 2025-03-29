import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader'
import BookCard from '../components/BookCards/BookCard'
import axios from 'axios'
 

const AllBooks = () => {
  const [Data, setData] = useState();
 
  useEffect(() => {
       const fetch = async () =>{
       const response = await axios.get(
          "http://localhost:2000/api/v1/get-book-data"
      );
      setData(response.data.data);
  };
  fetch();
}, []);
  
  return (

    <div className='py-8   px-12 bg-zinc-900'>
      {" "}
      <h4 className='text-4xl text-semibold text-yellow-200 '> All Books</h4>
        {!Data &&
         <div className='flex items-center justify-center my-8'> <Loader/>
         {" "} 
         </div>}       
      <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-12'>
            
        {Data && 
            Data.map((items, i) => (
            <div key={i}>
                 <BookCard data={items} />  {" "} 
         </div>
    ))}
      </div>
    </div>
  )
};

export default AllBooks;
