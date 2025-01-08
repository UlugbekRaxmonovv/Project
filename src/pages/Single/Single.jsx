import axios from '../../api/index';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { toggleHeart } from '../../components/context/slices/wishlistSlice';
import { addToCart } from '../../components/context/slices/cartSlice';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';

const Single = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState({});
  const wishlist = useSelector((state) => state.wishlist.value);

  useEffect(() => {
    axios
      .get(`/cards/${id}`)
      .then((res) => {
        setData(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8 py-8">
          <div className="w-full md:w-[400px] bg-white border shadow-md p-4 relative">
            <div className="absolute top-2 left-2">
              <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded">
                New
              </span>
            </div>
            <div
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => dispatch(toggleHeart(data))}
            >
              {wishlist?.some((item) => item.id === data.id) ? (
                <AiFillHeart className="text-pink-500 text-2xl" />
              ) : (
                <AiOutlineHeart className="text-gray-400 text-2xl" />
              )}
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
              {data?.url?.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Product ${index + 1}`}
                    className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[300px] mt-8  object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl font-bold mb-4">{data?.title}</h3>
            <p className="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi reprehenderit, vero blanditiis consequuntur quae quidem dicta eligendi dolorum ab maiores nostrum eum laborum. Accusamus quod placeat pariatur in excepturi.</p>

            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`w-5 h-5 ${
                    index < Math.round(data?.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-500 text-sm">
                ({data?.rating || 0} отзывов)
              </span>
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold">{data?.price} $</span>
              <button
                onClick={() => dispatch(addToCart(data))}
                className="bg-pink-500 text-white px-6 py-3 hover:bg-pink-600 transition duration-300"
              >
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Single;
