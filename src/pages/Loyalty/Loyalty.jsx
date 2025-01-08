import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Aksiya from '../../assets/images/pag2.png'
const Loyalty = () => {
  return (
    <>
    <div className="container">
<div className="py-8">
      <h1 className="text-4xl font-medium text-gray-700 mb-6">
      Как получить Кэшбэк?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-700">
          Шопинг с нами не только приятный, но и выгодный. 
          </p>

          <p className="text-gray-700">
          В нашем магазине предусмотрена кешбэк-система. То есть мы возвращаем вам часть денег от суммы покупки. Накапливая баллы на внутреннем счету, вы можете потратить их на новые покупки. 
          </p>

        
          <div className="mt-8">            
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>При покупке на сумму 300.000 сумов — 3% </li>
              <li>При покупке на сумму 1.000.000 сумов — 5% </li>
              <li>При покупке на сумму 5.000.000 сумов — 7%</li>
            </ul>
          </div>
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

export default Loyalty