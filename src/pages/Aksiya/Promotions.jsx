import React from 'react';
import Aksiya from '../../assets/images/aksiya.png'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { VscArrowLeft } from 'react-icons/vsc';
const Promotions = () => {
  const discounts = [
    { percent: 25, description: "Regular treatments" },
    { percent: 30, description: "Special care procedures" },
    { percent: 20, description: "Face masks and treatments" },
    { percent: 30, description: "Natural skin products" },
    { percent: 20, description: "Premium facial care" }
  ];
  return (
<>
<Navbar/>
    <div className="container">
<div className="py-8">

      <div className="flex flex-col lg:flex-row gap-8 p-4 bg-gray-50 rounded-lg ">
<div className="">
<div className="">
        <Link
              to={"/actions"}
              className="text-sm text-gray-600 flex gap-3 items-center hover:underline"
            >
           <div className="p-2 bg-rose-500 text-white hover:bg-pink-500 transition">
           <VscArrowLeft  />
           </div>
           <p> Назад</p>
            </Link>
        </div>
     
</div>
      <div className="lg:w-1/2 space-y-4">
        <div className="flex items-center gap-2">
        <h1 className="text-2xl font-medium text-gray-700 mb-6">
      ВНИМАНИЕ, СКИДКИ!
      </h1>
        </div>
        
        <div className="space-y-3">
          {discounts.map((discount, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-pink-500 font-bold w-40">
                {discount.percent}% скидка 
              </span>
              <span className="text-gray-700">
                {discount.description}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <p>* Valid until 07.01.2025</p>
          <p>* Terms and conditions apply</p>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="relative h-64 lg:h-full rounded-lg overflow-hidden ">
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-4xl font-bold text-pink-500 text-center px-4">
              UP TO 30% OFF
            </h3>
          </div>
          <img
            src={Aksiya}
            alt="Beauty treatment promotion"
            className="w-full h-full object-contain rounded-sm opacity-40"
          />
        </div>
      </div>
    </div>
</div>

    </div>
    <Footer/>
</>
  );
};

export default Promotions;