import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';



const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterproducts,setFilterProducts] = useState([]);
  const [category,SetCategory] = useState([]);
  const [subcategory,setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)){
      SetCategory(prev=>prev.filter(item => item != e.target.value))
    }
    else{
      SetCategory(prev => [...prev,e.target.value])
    }
  }

  useEffect(()=>{
    setFilterProducts(products);
  },[])

  useEffect(()=>{
    console.log(category);
  },[category])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
    <div className='min-w-60'>
      <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-x1 flex items-center cursor-pointer gap-2'>FILTER
      <img className={`h-3 sm:hidden ${showFilter} ? 'rotate-90' : ''`} src={assets.dropdown_icon} alt='d'></img></p>
      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Men'} onChange={toggleCategory}></input>Men
          </p>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Women'} onChange={toggleCategory}></input>Women
          </p>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Kids'} onChange={toggleCategory}></input>Kids
          </p>
        </div>
      </div>
      <div className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? '':'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Topwear'} ></input>Topwear
          </p>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Bottomwear'} ></input>Bottomwear
          </p>
          <p className='flex gap-2'>
            <input type='checkbox' className='w-3' value={'Winterwear'} ></input>Winterwear
          </p>
        </div>
      </div>
      
    </div>
    <div className='flex-1'>
      <div className='flex justify-between text-base sm:text-2xl mb-4'>
      <Title text1={'ALL'} text2={'COLLECTIONS'}></Title>
      
      <select className='border-2 border-gray-300 text-sm px-2'>
        <option value="relavent">Sort by: Relavent</option>
        <option value="low-high">Sort by: Low to High</option>
        <option value="high-low">Sort by: Hight to Low</option>
      </select>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterproducts.map((item,index)=>(
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Collection