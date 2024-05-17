import React from 'react';
import CTAButton from './CTAButton';



const Navbar = () => {
  return (
    <div className='w-full flex justify-around bg-rich bg-richblack-800 text-white' >
       <div className='my-3 mx-7'> 
            <p className='text-orange-500 font-thin font-bold text-2xl cursor-pointer' >Food Poll</p>
       </div>
       <div className='flex gap-2 font-normal rounded-full mt-2'>
        <CTAButton linkto={"/Login"} >Log In</CTAButton>
        <CTAButton linkto={"/signup"}>Sign Up</CTAButton>
       </div>
     </div>
    
  )
}

export default Navbar
