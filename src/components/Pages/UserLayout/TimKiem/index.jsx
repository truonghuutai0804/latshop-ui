import React from 'react'
import { useLocation } from 'react-router-dom';
import Products from '../../Other/Products';

const TimKiem = () => {
const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchParamP = searchParams.get('p');

  return (
    <>
        <h1><span className='text-uppercase fw-bold'>Từ khóa tìm kiếm:</span> {searchParamP}</h1>
        <Products/>
    </>
  )
}

export default TimKiem