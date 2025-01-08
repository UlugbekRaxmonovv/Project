import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Aksiay from '../../assets/images/aksiya.png'
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
const Promotion = () => {
  return (
    <>
    <section className="bg-white  py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl mt-6 mb-8 text-center">Акции и скидки</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md overflow-hidden  w-[320px] h-[350px]">
            <img
              src={Aksiay}
              alt="Komodony"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">ВНИМАНИЕ, СКИДКИ!</h3>
              <p className="text-gray-600 text-sm mb-4">
              Скидки на ваши любимые тканевые маски!
              </p>
              <Link to={'/actions/masks-sale'}
                className="text-red-500 text-sm font-semibold hover:underline"
              >
                ПОДРОБНЕЕ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>

  );
};

export default Promotion;
