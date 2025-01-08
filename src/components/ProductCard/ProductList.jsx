import React, { useState, useEffect } from "react";
import axios from "../../api/index";
import { AiFillHeart, AiOutlineHeart, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import {toggleHeart} from '../../components/context/slices/wishlistSlice'
import { useDispatch, useSelector } from "react-redux";
import {addToCart } from '../../components/context/slices/cartSlice'
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.value);

  return (
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
      <Link to={`/single/${product.id}`}>
      <img
        src={product.url[0]}
        alt={product.title}
        className="w-full  lg:w-full h-48 object-contain overflow-hidden rounded-t-lg mt-4"
      />
      </Link>
      <div className="mt-4">
        <h3 className="par1 text-lg font-semibold">{product.title}</h3>
        <p className="par  lg:text-sm text-gray-600 mt-2">{product.description}</p>
        
        <div className="flex items-center flex-wrap mt-2">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`w-4 h-4 text-yellow-400`}
            />
          ))}
          <span className="opacity-0 lg:ml-2 text-gray-500 text-sm">(0 отзывов)</span>
        </div>
        <div className="flex items-center justify-between flex-wrap ">
          <span className="text-xl font-bold">{product.price} $</span>
          <button   onClick={() =>dispatch(addToCart(product))} className="bg-pink-500 text-white px-4 py-2 rounded-sm hover:bg-pink-600 transition">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({title,titles}) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); 
  const itemsPerPage = 4; 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/cards");        
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (endIndex < products.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-2xl font-bold  text-gray-800 tracking-wide">{title} {titles}</h1>
        <div className="flex space-x-2 ">
          <button
            className="p-2 bg-pink-500 text-white hover:bg-pink-600 transition"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            <AiOutlineLeft size={20} />
          </button>
          <button
            className="p-2 bg-pink-500 text-white hover:bg-pink-600 transition"
            onClick={handleNextPage}
            disabled={endIndex >= products.length}
          >
            <AiOutlineRight size={20} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 ">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
