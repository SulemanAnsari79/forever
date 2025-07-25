import React, { useContext, useState } from 'react'
import ShopContext from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title'

const Collection = () => {

  // const {products} =useContext(ShopContext);
  const [showFilters,setShowFilters] =useState(false);


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilters(!showFilters)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilters ? 'rotate-90': ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        
        
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters? '':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} />MEN
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} />WOMEN
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} />Kids
            </p>
          </div>
        </div>
        {/* Sub category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters?'':'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Top wear'} />TOP WEAR
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottom wear'} />BOTTOM WEAR 
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winter wear'} />WINTER WEAR
            </p>
          </div>
        </div>
      </div>


      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'}  text2={'COLLECTIONS'}/>

        </div>

      </div>
    </div>
  )
}

export default Collection
