import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import {FaStar } from 'react-icons/fa';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Wishlist = () => {
    const wishlistItems = useSelector((state) => state.wishlist.value);
    const wishlist = useSelector(state => state.wishlist.value);
    wishlist.length
    "".length
    const dispatch = useDispatch();

  return (
   <>
   <Navbar/>

   <div className="container">
    <h2 className="text-4xl text-center py-8">Избранное</h2>
    {
          wishlist?.length > 0  ? (   <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 ">
            {
                wishlistItems.map((product)=>(
                    <div className="max-w-sm py-4 px-4 bg-white border shadow-md relative">
                    <div className="absolute top-[2px] left-0">
                      <span className="bg-orange-500 text-white text-xs font-bold px-4 py-2">new</span>
                    </div>
                    <div
                      className="absolute top-2 right-2 cursor-pointer"
                      onClick={() => dispatch(toggleHeart(product))}
                    >
              {
                      wishlist?.some(item => item.id === product.id) ? <AiFillHeart className="text-pink-500 text-xl" /> 
                      : <AiOutlineHeart className="text-gray-400 text-xl" />
                    }
            
                    </div>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full  lg:w-full h-48 object-contain overflow-hidden rounded-t-lg mt-4"
                    />
                    <div className="mt-4">
                      <h3 className="par1 text-lg font-semibold">{product.title}</h3>
                      <p className="par  lg:text-sm text-gray-600 mt-2">{product.description}</p>
                      <div className="flex items-center flex-wrap mt-2">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className={`w-4 h-4 ${
                              index < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="opacity-0 lg:ml-2 text-gray-500 text-sm">({product.rating || 0} отзывов)</span>
                      </div>
                      <div className="flex items-center justify-between flex-wrap ">
                        <span className="text-xl font-bold">{product.price} $</span>
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-sm hover:bg-pink-600 transition">
                          В корзину
                        </button>
                      </div>
                    </div>
                  </div>
                ))
            }
            </div>)
            :
           <>
           <div className="flex justify-center items-center flex-col h-full  py-8 ">
            <p className="text-4xl text-center">Ничего не найдено
            </p>
            <p>Попробуйте еще раз
            </p>
            <Link
              to={"/"}
              className="text-lg text-gray-600 flex items-center hover:underline"
            >
              ← на главную
            </Link>
           </div>
           </>
            
    }

   </div>
   <Footer/>
   </>
  )
}

export default Wishlist