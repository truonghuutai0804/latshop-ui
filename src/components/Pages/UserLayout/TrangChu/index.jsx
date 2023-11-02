import React from 'react'
import Slides from '../../Other/Slides'
import './TrangChu.scss'
import Products from '../../Other/Products'


const TrangChu = () => {


  return (
    <>
    <div className='pb-3 mt-5 pt-5'>
        <Slides/>
    </div>

    <h2 className='text-center py-3 bg-warning rounded-3 mt-3 fw-bold text-uppercase'>Sản phẩm bán chạy</h2>
    <div className="product-home">
      <Products name='Laptop Lenovo Legion 5 15IAH7-82RC0036VN' price='28.990.000₫'/>
    </div>

    <h2 className='text-center py-3 bg-warning rounded-3 mt-3 fw-bold text-uppercase'>Sản phẩm Camera</h2>
    <div className="product-home">
      <Products name='Laptop Lenovo Legion 5 15IAH7-82RC0036VN' price='28.990.000₫'/>
    </div>

    <h2 className='text-center py-3 bg-warning rounded-3 mt-3 fw-bold text-uppercase'>Sản phẩm PC</h2>
    <div className="product-home">
      <Products name='Laptop Lenovo Legion 5 15IAH7-82RC0036VN' price='28.990.000₫'/>
    </div>
    
    <h2 className='text-center py-3 bg-warning rounded-3 mt-3 fw-bold text-uppercase'>Sản phẩm Laptop</h2>
    <div className="product-home">
      <Products name='Laptop Lenovo Legion 5 15IAH7-82RC0036VN' price='28.990.000₫'/>
    </div>
    </>
  )
}

export default TrangChu