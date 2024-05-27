import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({children, linkto}) => {
  return (
    <Link to={linkto}>
    <div className='text-center text-[15px] px-4 py-2 rounded-full font-normal  bg-white text-richblack-900 
    hover:scale-95 transition-all duration-200 bg-cyan-500 text-gray-900  shadow-lg'  >
      {children}
    </div>
    </Link>
  )
}

export default CTAButton
