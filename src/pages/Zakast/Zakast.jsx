import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Aksiya from '../../assets/images/pag.png'
import { VscArrowLeft } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
const Zakast = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
<div className="py-8">
      <h1 className="text-4xl font-medium text-gray-700 mb-6">
      Как заказать?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-gray-700">
          <span className='font-bold'>1.</span> Зарегистрируйтесь или выполните вход в имеющийся аккаунт
          </p>

          <p className="text-gray-700">
          <span className='font-bold'>2.</span> <span className="font-medium">Регулярное очищение</span> и правильный домашний уход очень важны при борьбе с комедонами. Механическая чистка может быть эффективным решением, но важно чтобы её делал профессионал.
          </p>

          <p className="text-gray-700">
          <span className='font-bold'>3.</span>Появляются они часто на протяжении какого-то времени, когда поры закупориваются и под кожей формируются белые точки. Каждая белая точка прикрыта тоненьким, почти прозрачным слоем эпидермиса.
          </p>

          <p className="text-gray-700">
          <span className='font-bold'>4.</span>Белые точки чаще всего появляются в области носа и прилегающих зон. На разных этапах развития они могут быть белого, желтоватого или бежевого цвета.
          </p>

          <p className="text-gray-700">
            Чем дольше они просуществуют в коже, тем становится сложнее их удалить из-за густоты содержимого. Также могут возникнуть более серьезные проблемы с кожей.
          </p>

          <div className="mt-8">
            <h2 className="font-medium text-lg mb-4">Вы сможете выяснить причины закрытых комедонов у косметолога и договориться об их профессиональном удалении у специалиста.</h2>
            
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Подбор индивидуального ухода</li>
              <li>Профессиональные процедуры</li>
              <li>Механическая атравматичная чистка</li>
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

export default Zakast