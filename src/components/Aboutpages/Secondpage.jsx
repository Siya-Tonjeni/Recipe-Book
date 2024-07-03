import React from "react";
import { Link } from 'react-router-dom';
import Kale Salad from '../Assets/kale-salad.jpg';
import Cucumber Salad from '../Assets/cucumber-salad.jpg';
import Salmon from '../Assets/salmon.jpg';
import about2 from '../Assets/about2image.jpg';
import landingimage2 from '../Assets/landingimage2.jpg';

function SecondPage() {
  return (
    <div className='relative h-full bg-bgColor'>
      <div className='absolute bottom-2 right-8 max-w-[11rem] rounded overflow-hidden shadow-lg'>
        <img src={kalesalad} alt="Taste Quest" className='w-52 h-52 object-cover' />
        <div className='px-4 py-4'>
          <div className='font-bold text-lg mb-2'>Filling delicious kale</div>
          <Link to='/app/5' className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
            Go To Recipe
          </Link>
        </div>
      </div>

      <div className='absolute bottom-2 right-[14.5rem] max-w-[11rem] rounded overflow-hidden shadow-lg'>
          <img src={cucumbersalad} alt="Taste Quest" className='w-52 h-52 object-cover' />
          <div className='px-4 py-4'>
            <div className='font-bold text-lg mb-2'>Korean inspired cucumber salad is refreshing, tangy and zesty</div>
            <Link to='/app/3' className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
              Go To Recipe
            </Link>
          </div>
        </div>

        <div className='absolute top-5 right-8 max-w-[11rem] rounded overflow-hidden shadow-lg'>
          <img src={salmon} alt="Taste Quest" className='w-52 h-52 object-cover' />
          <div className='px-4 py-4'>
            <div className='font-bold text-lg mb-2'>Succulent, flakey and fork tender with crispy edges</div>
            <Link to='/recipedetailpage/4' className='bg-blue-500 hover:bg-blue-700 text-white py-0.5 px-2 rounded'>
              Go To Recipe
            </Link>
          </div>
        </div>

        <div className='absolute h-[9rem] flex flex-col items-center justify-center'>
      <p className='text-6xl md:text-9xl ml-[2.5rem] font-devonshire text-secondary/100 text-stroke text-gradient'>Side</p>
      
      <div className='absolute top-[16rem] left-[-0rem] w-[11rem] overflow-hidden rounded'>
        <img src={landingimage2} alt="Landing Page" className='w-full h-full object-cover rounded-tr-[20rem] rounded-br-[20rem]' />
      </div>
      <img
        src={about2}
        alt="Taste Quest"
        className='absolute top-[4rem] left-[17rem] w-[9rem] h-[9rem] rounded overflow-hidden object-cover'
      />  
      
    </div>
    <div className='text-xs md:text-sm pt-[15rem] pl-[12rem] w-[29rem]'>Fresh from the gardens to your plate! Our salads are a celebration of color, texture, and flavour, crafted to nourish your body and delight your taste buds.</div>
    <div className='text-s md:text-md pt-[15rem] pl-[2rem] w-[17rem]'>Weelcome and discover the art of healthy eating with our vibrant salads.</div>
    <div className='text-xs md:text-sm pt-[1rem] pl-[12rem] w-[17rem]'>Our salads are a symmphony of fresh ingredients, carefully combined to tantalize your buds and leave you feeling refreshed and revitalized.</div>

      </div>
  );
};

export default SecondPage,