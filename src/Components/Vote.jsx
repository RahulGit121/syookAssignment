import React, { useEffect, useState } from 'react';

const Vote = () => {

  const [data, setData] = useState([]);
  const [selections, setSelections] = useState({1 :null , 2:null, 3:null});

  useEffect( ()=> {
    const fetchData = async () => {
      try{
          const response = await fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json');
           const jsonData = await response.json();
           setData(jsonData);
        }
  
      catch(error){
      console.error("Error fetching data: ", error );
      }
};
    fetchData();
  }, []);


  const handleSelect = (product, rank) => {
    const newSelections = { ...selections };
    for(let key in newSelections){
      if(newSelections[key] === product){
        newSelections[key] =null;
      }
    }
    newSelections[rank] = product;
    setSelections(newSelections);
    localStorage.setItem('selections', JSON.stringify(newSelections));
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900">Our Food Offerings </h2>

        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {data.map((product) => (
            <div key={product.id} className="group relative  rounded">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">

                <img
                  src={product.image}
                  alt="img"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex  flex-col justify-between">
                <div>

                  <h2 className="text-lg font-bold text-gray-700">
                   {product.dishName}
                  </h2>
                  
                </div>
                <p className="text-sm font-normal text-gray-900">{product.description}</p>
              </div>

              {[1, 2, 3].map(rank => (
              <button className='bg-richblue-200 h-3 text-center rounded py-5 w-20   m-1 '
                key={rank}
                onClick={() => handleSelect(product, rank)}
                disabled={selections[rank] === product}
              >
                Rank {rank}
              </button>
            ))}

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Vote