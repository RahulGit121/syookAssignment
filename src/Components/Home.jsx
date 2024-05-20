import React from 'react'
import Navbar from './Navbar';
// import Results from './Results';
import Vote from './Vote';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      
      <div className='mt-5 flex justify-center '>
        <ul className='flex cursor-pointer'> 
          <li className='bg-richblue-200 p-3 m-3 rounded '><Link to="/">Votes</Link></li>
          <li className='bg-richblue-200 p-3 m-3 rounded '><Link to="/results">Results</Link></li>

        </ul>
      </div>
      <Vote></Vote>
      {/* <Results></Results> */}
    
    </div>
  )
}

export default Home
