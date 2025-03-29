import React from 'react'
import Homes from './pages/Homes'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes,Route } from  "react-router-dom";
import AllBooks from './pages/AllBooks';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails';
 
 
 
 const App = () => {
   return (
     <div>
      
        <Navbar />
         <Routes>
           <Route exact path="/" element={<Homes />} /> 
           <Route path="/all-books" element={<AllBooks />} />
           <Route path="/LogIn" element={<LogIn />} />
           <Route path="/SignUp" element={<SignUp />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/profile" element={<Profile />} />
           <Route path='/view-book-details/:id' element={<ViewBookDetails/>}/>
        </Routes>
       <Footer />
       
     
      
      

     </div>
   )
 }
 
 export default App
 
 
