import React from 'react'
import Banner from './container/Banner/Banner'
import Banks from './container/Banks/Banks'
import Products from './container/Products/Products'
import Customers from './container/Customers/Customers'

function Home() {
  return (
    <>
    <Banner></Banner>
    <Banks></Banks>
    <Products></Products>
    <Customers></Customers> 
    </>
  )
}

export default Home