import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { LuSearchX } from "react-icons/lu";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (searchQuery.trim()) {
      axios
        .get(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then((res) => {
          setData(res?.data?.products || []);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setData([]);
    }
  }, [searchQuery]);

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-14">
        <h1 className="text-2xl font-medium text-center text-gray-800 mb-8">
          ПОИСК
        </h1>
        <div className="relative mb-12">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск товаров"
            className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent outline-none text-gray-700 placeholder-gray-500"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <IoSearchOutline className="w-5 h-5" />
          </button>
        </div>
        {searchQuery.trim() && (
          <div>
            {data.length > 0 ? (
              <div className="shadow-md p-6 rounded-md">
                {data.map((el, index) => (
                  <div
                    key={index}
                   
                  >
                     <Link to={`/single/${el.id}`} >
                    <div  className="bg-white border-b-[1px]  flex p-2 items-center justify-between mb-3">
                    <div className="flex gap-2 items-center justify-between">
                        <div className="">
                          <IoIosSearch size={20} />
                        </div>

                     
                        <div className="">
                          <h3 className="font-medium ">{el.title}</h3>
                        </div>
                      </div>
                      <img
                        src={el.thumbnail}
                        alt={el.title}
                        className="w-10 h-10 object-cover rounded-md"
                      />
                    </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center mt-10">
                <LuSearchX className="w-16 h-16 text-gray-400 mx-auto" />
                <h2 className="text-xl font-medium text-gray-800 mt-4">
                  Ничего не найдено
                </h2>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-blue-600 hover:text-blue-700 hover:underline mt-2"
                >
                  Попробуйте еще раз
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchSection;
