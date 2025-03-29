import React, { useEffect, useState } from 'react'
import axios from "axios";
import BookCard from '../BookCards/BookCard';
import Loader from '../Loader/Loader';

const RecentlyAddedBook = () => {
    const [Data, setData] = useState();
    useEffect(() => {
         const fetch = async () =>{
         const response = await axios.get(
            "http://localhost:2000/api/v1/get-recently-added-book"
        );
        setData(response.data.data);
    };
    fetch();
}, []);
    
  return (
    <div className='mt-8 px-4 '>
      <h4 className='text-4xl text-semibold text-yellow-120  hover:text-yellow-200 transition-all duration-300'>Recently added Books</h4>

        {!Data &&
         <div className='flex items-center justify-center my-8'>  <Loader/> </div>}       
      <div className='my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-12'>
        {Data && 
            Data.map((items, i) => (
            <div key={i}>
                 <BookCard data={items}/>  {" "} 
        </div>
    ))}
      </div>
    </div>
  );
};

export default RecentlyAddedBook;
