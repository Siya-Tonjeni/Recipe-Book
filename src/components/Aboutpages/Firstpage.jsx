import React from "react";
import { Link } from "react-router-dom";
import Fudge from "../Assets/fudge.jpg";
import Churros from "../Assets/churros'jpg";
import Lemon loaf from "../Assets/lemon-loaf.jpg";
import landingimage from "../Assets/landingimage.jpg";



function FirstPage()  {
  
  return (
    
    <div className='relative h-full bg-bgColor'>      
      <div className='absolute bottom-2 left-20 max-w-[13rem] rounded overflow-hidden shadow-lg'>
        <img src={fudge} alt="Taste Quest" className='w-52 h-52 object-cover' />
        <div className='px-4 py-4'>
          <div className='font-bold text-lg mb-2'>Delicious fudge in a favourite flavour</div>
          <Link to='/app/1' className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
            Go To Recipe
          </Link>
        </div>
      </div>

      <div className='absolute bottom-2 left-[20rem] max-w-[13rem] rounded overflow-hidden shadow-lg'>
          <img src={churros} alt="Taste Quest" className='w-52 h-52 object-cover' />
          <div className='px-4 py-4'>
            <div className='font-bold text-lg mb-2'>Crispy outside and airy inside super easy recipe and such a fun party dessert!</div>
            <Link to='/app/2' className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
              Go To Recipe
            </Link>
          </div>
        </div>

        <div className='absolute top-5 left-14 max-w-[14rem] rounded overflow-hidden shadow-lg'>
          <img src={lemonloaf} alt="Taste Quest" className='w-52 h-52 object-cover' />
          <div className='px-4 py-4'>
            <div className='font-bold text-lg mb-2'>Tender buttery crumb and full of bright citrus flavor cake</div>
            <Link to='/app/6'className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
              Go To Recipe
            </Link>
          </div>
        </div>

  <div className='relative h-[15rem] ml-[18rem] flex flex-col items-center justify-center'>
  <div className="absolute top-2 left-[8rem]">
    <p className='text-6xl md:text-9xl font-devonshire text-secondary text-stroke text-gradient'>Choose</p>
  </div>
  <div className="absolute top-[3.5rem] left-[21.5rem]">
    <p className='text-3xl md:text-8xl h-[5rem] font-devonshire text-secondary text-stroke text-gradient'> A</p>
  </div>
  <div className='text-xs md:text-sm pt-[18rem] pr-[11rem] w-[24rem]'>Classic desserts to innovate twists, our sweet recipes are sure to bring joy and happiness to your taste buds.</div>

  <div className='absolute top-[10.5rem] right-[-0rem] w-[12rem] rounded overflow-hidden'>
    <img src={landingimage} alt="Landing Page" className='w-52 h-50 object-cover rounded-tl-[22rem] rounded-bl-[22rem]' />
  </div>
</div>


</div>     
  );
};

export default FirstPage;