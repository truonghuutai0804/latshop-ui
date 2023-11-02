import React from 'react'
import Header from './Header'
import Footer from './Footer'
function UserLayout({children}) {
  return (
    <>
      <Header/>
      <div className="container">
        <div className='m-auto'>{children}</div>
      </div>
      <Footer/>
    </>
  )
}

export default UserLayout