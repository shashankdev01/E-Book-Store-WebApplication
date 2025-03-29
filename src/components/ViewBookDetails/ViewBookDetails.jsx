import React from 'react'
import { useParams } from 'react-router-dom'; 
import {GrLanguage} from "react-icons/gr";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';



const ViewBookDetails = () => {
const  { id } = useParams();
const [Data, setData] = useState();
  useEffect(() => {
       const fetch = async () =>{
       const response = await axios.get(
          `http://localhost:2000/api/v1/get-book-by-id/${id}`
      );
      setData(response.data.data);
  };
  fetch();
}, []);

return (
        <>
            { Data && (
            <div className='px-4 md:px-12 py-8 bg-zinc-900   flex gap-8 flex-col md:flex-row  md:h-1/2   '> 
         <div className='bg-zinc-800 rounded p-4 h-60vh] lg:h-[88vh] w-full lg:w-3/6 w-full flex items-center justify-center text white'>
             {" "}
                 <img src={Data.url} alt='/' className='h-[50vh] lg:h-[70vh] rounded ' />
        </div>
         <div className='p-4 md:w-3/6 w-full flex:col'>
            <h1 className='text-zinc-300 text-4xl font-semibold'>{Data.title}</h1>
            <p className='mt-1 text-zinc-400'>By {Data.author}</p>
            <p className='mt-4 text-zinc-500 text-xl'>By {Data.desc}</p>
            <p className='flex mt-4 items-center justify-start text-zinc-400'> 
                <GrLanguage className='me-3'/> {Data.language}
            </p>
            <p className='mt-4 text-zinc-100 text-3xl font-semibold'> Price: ₹ {Data.price}
             {" "}
             </p> 
         </div>
    </div>
        )}

        {!Data &&
         <div className=' h-screen bg-zinc-900 flex items-center justify-center my-8'> <Loader/>
         {" "} 
         </div>} 

        </>
  );
};

export default ViewBookDetails;