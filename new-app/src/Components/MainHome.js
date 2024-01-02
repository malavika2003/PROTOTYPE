import React from 'react'
import Navbar from './Navbar'
import Events from './Events'
import Banner from './Banner'
import Stories from './Stories'
import Quickaccess from './Quickaccess'
const MainHome = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Events/>
      <Stories/>
      <Quickaccess/>
    </>  
  )
}

export default MainHome