import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import ProductItem from './ProductItem';
import { ShopContext } from '../context/ShopContext';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSellers,setBestSeller] = useState([]);

    console.log(bestSellers)
    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestSeller));
        setBestSeller(products.slice(0,5))
    },[])
    console.log(bestSellers)

  return (
    <div className='my-10'>
    <div className='text-center text-3xl py-8'>
    <Title text1={'BEST'} text2={'SELLERS'}></Title>
    <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
    </p>
    </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSellers.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller