import React from 'react'
import { Link } from 'react-router-dom'

const Tab = () => {
  return (
    <div>
      <div className='mt-5 flex justify-center '>
        <ul className='flex cursor-pointer'> 
          <li className=' bg-orange-5 p-3 m-3 rounded hover:scale-95 duration-200 transition-all shadow-lg'><Link to="/">Votes</Link></li>
          <li className=' bg-orange-5 p-3 m-3 rounded hover:scale-95 duration-200 transition-all shadow-lg'><Link to="/results">Results</Link></li>

        </ul>
      </div>
    </div>
  )
}

export default Tab
