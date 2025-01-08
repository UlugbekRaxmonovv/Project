import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/images/logo.svg";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
const Modal = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={() => onClose()}
    >
      <div
        className={`bg-white rounded-lg w-full max-w-md p-6 relative transition-all duration-500 ease-in-out transform ${
          isAnimating
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0"
        }`}
      >
        <button
          onClick={() => onClose()}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <VscChromeClose />
        </button>

        <div className="flex justify-center mb-8">
          <img
            src={logo}
            alt="Logo"
            className="w-[150px] h-[100px] object-contain"
          />
        </div>
        <div className="mb-6">
          <input
            type="tel"
            placeholder="Введите номер телефона"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
          />
        </div>

        <button className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors">
          Выслать код
        </button>
      </div>
    </div>
  );
};

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
    if (!isOpen) return null;
    const handleDelete = () => {
        localStorage.removeItem('cart');
        onClose(); // Close the modal after deletion
      };
    
      const handleConfirm = () => {
        handleDelete();
        if (onConfirm) {
          onConfirm();
        }
      };
      

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-black/30" 
          onClick={onClose}
        />
        
        <div className="relative bg-white rounded-lg p-6 w-full max-w-md mx-4">
          <div className="flex flex-col items-center mb-6">
            <div className="w-12 h-12 rounded-full border-4 border-sky-400 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-sky-400">i</span>
            </div>
            <h2 className="text-2xl font-medium text-gray-800">{title}</h2>
          </div>
  
          <p className="text-center text-gray-600 mb-8">
            {message}
          </p>
  
          <div className="flex gap-4 justify-center">
            <button
              onClick={handleConfirm}
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Подтвердить
            </button>
            <button
              onClick={handleDelete}
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Отменить
            </button>
          </div>
        </div>
      </div>
    );
  };
const Korzinka = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpens, setIsModalOpens] = useState(false);
    const cartItems = useSelector((state) => state.cart.value);
  let javob1 = cartItems?.reduce((a, b) => a + b.price * b.quantity, 0);
  let javob = Math.floor(javob1);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between mt-8 ">
          <h1 className="text-2xl font-bold mb-6">КОРЗИНА</h1>
          <button onClick={() => setIsModalOpens(true)} className="bg-pink-500 text-white w-[170px] h-[40px] hover:bg-pink-600 transition">
            Очистить корзину
          </button>
        </div>
        <div className="border-t border-gray-300">
          <div className="grid grid-cols-4 gap-4 py-4 text-sm font-semibold text-gray-600">
            <div>ПРОДУКТ</div>
            <div className="text-center">ЦЕНА</div>
            <div className="text-center">КОЛИЧЕСТВО</div>
            <div className="text-center">ИТОГО</div>
          </div>
          <div className="grid grid-cols-4 gap-4 items-center border-t border-gray-300 py-4">
            {cartItems?.map((product) => (
              <>
                <div className="flex items-center space-x-4">
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-16 h-16 object-cover"
                  />
                  <span className="text-sm font-medium">{product.name}</span>
                </div>
                <div className="text-center text-sm">
                  {product.price.toLocaleString()} сумов
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <button
                   
                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="text-sm font-medium">
                 1
                  </span>
                  <button
                   
                    className="bg-gray-200 text-gray-600 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
                <div className="text-center text-sm">{javob} сумов</div>
              </>
            ))}
          </div>

          <div className="mt-6 flex flex-col lg:flex-row justify-between items-center py-4">
          <Link
              to={"/"}
              className="text-sm text-gray-600 flex items-center hover:underline"
            >
              ← Назад к покупкам
            </Link>
            <div className="mt-4 lg:mt-0 flex items-center space-x-6">
              <span className="text-sm font-medium">
                Всего к оплате: <strong>{javob} сумов</strong>
              </span>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-pink-500 text-white px-6 py-2  hover:bg-pink-600 transition"
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </div>
      </div>
 
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ConfirmationModal
        isOpen={isModalOpens}
        onClose={() => setIsModalOpens(false)}
        onConfirm={() => {
          console.log('Confirmed');
          setIsModalOpen(false);
        }}
        title="Внимание!"
        message="Вы действительно хотите очистить корзину?"
      />
           <Footer />
    </>
  );
};

export default Korzinka;
