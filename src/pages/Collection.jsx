import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';


const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
    <div className='min-w-60'>
      <p className='my-2 text-x1 flex items-center cursor-pointer gap-2'>FILTER
      <img className={`h-3 sm:hidden ${showFilter} ? 'rotate-90' : ''`} src={assets.dropdown_icon} alt='d'></img></p>
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Men'}></input>Men
          </p>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Women'}></input>Women
          </p>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Kids'}></input>Kids
          </p>
        </div>
      </div>
      <div className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? '':'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Topwear'}></input>Topwear
          </p>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Bottomwear'}></input>Bottomwear
          </p>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Winterwear'}></input>Winterwear
          </p>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Collection