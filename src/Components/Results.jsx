import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Tab from './Tab';


const POINTS = { 1: 30, 2: 20, 3: 10 };

const Results = () => {
  const [dishes, setDishes] = useState([]);
  const [selections, setSelections] = useState({ 1: null, 2: null, 3: null });
  const [points, setPoints] = useState({});

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json');
        const data = await response.json();
       
        setDishes(data);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };

    const savedSelections = JSON.parse(localStorage.getItem('selections')) || { 1: null, 2: null, 3: null };
    setSelections(savedSelections);
    calculatePoints(savedSelections);
    fetchDishes();
  }, []);


  const calculatePoints = (selections) => {
    const pointsMap = {};
    for (let rank in selections) {
      if (selections[rank]) {
        const dish = selections[rank];
        pointsMap[dish.id] = (pointsMap[dish.id] || 0) + POINTS[rank];
      }
    }
    setPoints(pointsMap);
  };

  const sortedDishes = [...dishes].sort((a, b) => (points[b.id] || 0) - (points[a.id] || 0));

  return (
    <>
    <Navbar/>
<Tab></Tab>

<div className="bg-white"> 
<div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
  <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900">Poll Results</h2>

  <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

    {sortedDishes.map((product) => (
      <div key={product.id} className="group relative border-solid border-2 border-richblack-300  rounded">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">

          <img
            src={product.image}
            alt="img"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex px-3 flex-col justify-between">
          <div>

            <h2 className="text-lg font-bold text-gray-700">
             {product.dishName} - {points[product.id] || 0} points
            </h2>
            
          </div>
          <p className="text-sm font-normal text-gray-900">{product.description}</p>
        </div>

      
        {Object.values(selections).includes(product) && '(Your Selection)'}

      </div>
    ))}
  </div>
</div>
</div>
</>
  );
};

export default Results;
