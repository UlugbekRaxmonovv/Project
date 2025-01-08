import React from "react";
import logo from '../../assets/images/logo.svg'
import app from '../../assets/images/app1.png'
import goog from '../../assets/images/googl1.png'
import { FaSquareFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 ">
      <div className="container mx-auto px-4 flex justify-between items-center flex-wrap ">
        <div>
          <ul className="space-y-2 mt-7">
            <li>Бренды</li>
            <li>О компании</li>
            <li>Акции и скидки</li>
            <li>Блог</li>
            <li>Контакты</li>
            <li>Публичная оферта</li>
          </ul>
        </div>

      <div className="">
      <div className="flex justify-center items-center flex-col">
          <img src={logo} alt=""  className="w-[150px] h-[100px] object-contain"/>
          <div className="flex justify-center space-x-2 mt-4">
          <img src={app} alt="" className="w-[150px] h-[100px] object-contain" />
          <img src={goog} alt="" className="w-[150px] h-[100px] object-contain" />

          </div>
        </div>
      </div>

        <div className="">
          <ul className="space-y-2 ">
            <li>Условия доставки и оплаты</li>
            <li>Возврат товаров</li>
            <li>Как заказать?</li>
            <li>Подарки при покупке</li>
            <li>Как получить Кэшбэк?</li>
          </ul>
        </div>
      </div>

      <div className="bg-black text-white text-center py-4 mt-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© 2025 KOKOS+ Все права защищены.</p>
         <div className="">
          <div className="flex gap-3 items-center">
          <FaSquareFacebook  size={25}/>
          <RiInstagramFill size={25} />
          <FaTelegram  size={25}/>


          </div>
         </div>
          <p className="mt-2 sm:mt-0">Сайт разработан в Exord Soft</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
