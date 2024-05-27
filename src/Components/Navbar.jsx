import React, { useState } from 'react';
import CTAButton from './CTAButton';
import { Link } from 'react-router-dom';


const Navbar = ({isLogin , handleLogin, handleLogout}) => {
  
  return (
    <div className='w-full flex justify-around bg-rich bg-orange-10 text-white' >
      <Link to="/">
       <div className='my-3 mx-7'> 
            <p className='text-orange-500 font-thin text-2xl cursor-pointer' >Food Poll</p>
       </div>
       </Link>
       <div className='flex gap-2 font-normal rounded-full mt-2'>
        {
          isLogin ? ( <CTAButton linkto={"/Login"} >Log Out</CTAButton>) : ( <CTAButton linkto={"/Login"} >Log IN</CTAButton> )
        }
       </div>
     </div>
    
  )
}

export default Navbar
