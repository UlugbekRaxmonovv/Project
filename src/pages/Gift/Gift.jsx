import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Aksiya from '../../assets/images/pag1.png'
const Gift = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
<div className="py-8">
      <h1 className="text-4xl font-medium text-gray-700 mb-6">
      Подарки при покупке
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-700">
          <span className='font-bold'>1.</span> Зарегистрируйтесь или выполните вход в имеющийся аккаунт
          </p>

        </div>

        <div className="relative">
          <img
            src={Aksiya}
            alt="Coconut halves"
            className="w-full h-auto rounded-sm"
          />
        </div>
      </div>
</div>
    </div>
    <Footer/>
    </>
  )
}

export default Gift