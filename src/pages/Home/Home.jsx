import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProductList from '../../components/ProductCard/ProductList'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import Aksiya from '../../components/Aksiya/Aksiya'
import Main from '../../components/Main/Main'

const Home = () => {
  return (
    <>
    <Main/>
    <ProductList title={"Новинки"}/>
    <Banner/>
    <ProductList titles={"Рекомендуем"}/>
    <Aksiya/>
    <Footer/>
    </>
  )
}

export default Home