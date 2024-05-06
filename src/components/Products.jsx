import React from 'react'
import { products } from '../utils/product'
import Card from './home/Card'
import Product from './Product'
import Footer from './Footer'

const Products = () => {
  return (
    <div className='bg-primary pt-20 px-4'>
      <div className='w-full h-full flex flex-wrap gap-4 justify-center pb-4'>
        {products.map((item, index) => (
          <Product item={item} key={index}/>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default Products