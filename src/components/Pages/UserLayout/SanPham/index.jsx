import React from 'react'
import Products from '../../Other/Products'

const SanPham = () => {

  const array = [
    {name: 'PC'},
    {name: 'Laptop'},
    {name: 'Camera'}
  ]
  return (
    <>
    {array.map((item, idx)=>(
      <div key={idx}>
        <h2 className='text-center py-3 bg-warning rounded-3 mt-3 fw-bold text-uppercase'>Sản phẩm bán chạy của {item.name}</h2>
        <Products/>
      </div>
    ))}
    </>
  )
}

export default SanPham