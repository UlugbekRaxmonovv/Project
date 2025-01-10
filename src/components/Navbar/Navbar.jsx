import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CiSearch,
  CiHeart,
  CiUser,
  CiShoppingCart,
  CiMenuFries,
  CiHome,
} from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
import { VscChromeClose, VscClose, VscDebugBreakpointFunction } from "react-icons/vsc";
import { useSelector } from "react-redux";
import Katalog from "../Katalog/Katalog";
import { MdLocalPhone } from "react-icons/md";

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
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.value);
  const [isOpen, setIsOpen] = useState(false);
  const setIsModalOpens = () => {
    setIsModalOpen(true);
    setIsOpen(false);
  };
  
  cartItems.length;
  return (
    <>
      <header className="dark  ">
        <div className="hidden md:flex bg-black p-2">
          <div className="container text-white flex items-center justify-between">
            <ul className="hidden md:flex items-center  gap-4">
              <li>
                <Link to={"pages/how-to-order"} className="text-sm font-poppins hover:underline">Как заказать?</Link>
              </li>
              <li>
                <Link to={"pages/gifts-on-buy"} className="text-sm font-poppins hover:underline">
                  Подарки при покупке
                </Link>
              </li>
              <li>
                <Link  to={"/pages/loyalty"} className="text-sm font-poppins hover:underline">
                  Как получить Кэшбэк?
                </Link>
              </li>
            </ul>

            <div className="hidden md:flex items-center gap-2">
              <MdLocalPhone />

              <Link className="text-sm font-poppins hover:underline">+998909891484</Link>
            </div>
          </div>
        </div>
        <nav className="container  flex items-center h-[80px] justify-between px-4  ">
          <Link to={"/"}>
            {" "}
            <img
              src={logo}
              alt="Logo"
              className="w-[150px] h-[100px] object-contain"
            />
          </Link>
          <ul className="hidden md:flex items-center gap-6 font-poppins">
            <li onClick={() => setIsOpen(!isOpen)} className="flex items-center">
              <Link>Каталог</Link> <VscDebugBreakpointFunction className="transform rotate-180" size={10} />

            </li>
            <li>
              <Link to={"brands"}>Бренды</Link>
            </li>
            <li>
              <Link to={"actions"}>Акции и скидки</Link>
            </li>
            <li>
              <Link to={"blog"}>Блог</Link>
            </li>
            <li>
              <Link to={"contacts"}>Контакты</Link>
            </li>
          </ul>

          <div className="flex gap-8">
            <Link
              to={"search"}
              className="flex items-center  font-poppins md:hidden"
            >
              <CiSearch size={25} />
            </Link>
            <div
              className="md:hidden cursor-pointer z-50"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <VscClose size={35} /> : <CiMenuFries size={25} />}
            </div>
          </div>

          <div
            className={`absolute top-[0px] left-0 w-full bg-white shadow-md transition-transform duration-300 z-50  ${
              menuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="container flex items-center h-[80px] justify-between px-4 relative border-b border-gray-300">
              <img
                src={logo}
                alt="Logo"
                className="w-[150px] h-[100px] object-contain"
              />
              <div
                className="md:hidden cursor-pointer z-50"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <VscClose size={35} /> : <CiMenuFries size={25} />}
              </div>
            </div>

            <ul className="flex flex-col items-center gap-4 py-6 font-poppins">
              <li>
                <Link onClick={() => setIsOpen(true)}>Каталог</Link>
              </li>
              <li>
                <Link to={"brands"} onClick={() => setMenuOpen(false)}>Бренды</Link>
              </li>
              <li>
                <Link to={"actions"} onClick={() => setMenuOpen(false)}>
                  Акции и скидки
                </Link>
              </li>
              <li>
                <Link to={"blog"} onClick={() => setMenuOpen(false)}>
                  Блог
                </Link>
              </li>
              <li>
                <Link to={"contacts"} onClick={() => setMenuOpen(false)}>
                  Контакты
                </Link>
              </li>
              <li>
                <Link to={"pages/how-to-order"} >Как заказать?</Link>
              </li>
              <li>
                <Link to={"pages/gifts-on-buy"}>
                  Подарки при покупке
                </Link>
              </li>
              <li>
                <Link  to={"/pages/loyalty"}>
                  Как получить Кэшбэк?
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to={"search"}
              className="flex items-center gap-2 font-poppins"
            >
              <CiSearch size={25} />
              <p>Поиск</p>
            </Link>
            <Link
              to={"wishlist"}
              className="flex items-center gap-2 font-poppins"
            >
              <CiHeart size={25} />
              <p>Избранное</p>
            </Link>
            <Link
              onClick={setIsModalOpens}
              className="flex items-center gap-2 font-poppins"
            >
              <CiUser size={25} />
              <p>Профиль</p>
            </Link>
            <Link
              to={"korzinka"}
              className="relative flex items-center gap-2 font-poppins"
            >
              <CiShoppingCart size={25} />
              <p>Корзина</p>
              <span className=" w-[18px] h-[22px] rounded-sm bg-red-500 text-white text-center text-sm">
                {cartItems.length}
              </span>
            </Link>
          </div>

          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md flex justify-around items-center py-2 md:hidden z-50">
            <Link to={'/'} className="flex flex-col items-center">
              <CiHome size={30} className="text-gray-700" />
              <span className="text-sm font-poppins">Главная</span>
            </Link>
            <Link to={"wishlist"} className="flex flex-col items-center">
              <CiHeart size={30} className="text-gray-700" />
              <span className="text-sm font-poppins">Избранное</span>
            </Link>
            <Link
              className="flex flex-col items-center"
              onClick={() => setIsModalOpen(true)}
            >
              <CiUser size={30} className="text-gray-700" />
              <span className="text-sm font-poppins">Профиль</span>
            </Link>
            <Link
              to={"korzinka"}
              className="relative flex flex-col items-center"
            >
              <CiShoppingCart size={30} className="text-gray-700" />
              <span className="absolute -top-2 right-2 w-[18px] h-[18px] rounded-full bg-red-500 text-white text-xs text-center">
                {cartItems.length}
              </span>
              <span className="text-sm font-poppins">Корзина</span>
            </Link>
          </div>
        </nav>
      </header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Katalog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
