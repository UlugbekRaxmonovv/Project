import React, { useState } from 'react'
import { VscChevronRight } from 'react-icons/vsc'
import { Link } from 'react-router-dom';

const Katalog = ({isOpen,setIsOpen}) => {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const mainItems = ["Аксессуары",'Крем', 'Спрей', 'Стик',"Средства от прыщей",];
  const subItems = [
    [
      { text: 'Trimmer', link: '/' },
      { text: 'Paxtali tayoqchalar', link: '/' },
      { text: 'Paket', link: '/' },
    ],
    [
      { text: 'Banochkalar', link: '/' },
      { text: 'Paxtali tayoqchalar', link: '/' },
      { text: 'Kosmetichka', link: '/' },
    ],
    [
      { text: 'Terdagi yogʻlikka qarshi salfetkalar', link: '/' },
      { text: 'Koʻz qovoqi stikerlari', link: '/' },
      { text: 'Penal', link: '/' },
    ],
    [
      { text: 'Soch tasmasi', link: '/' },
      { text: 'Trimmer', link: '/' },
      { text: 'Paket', link: '/' },
    ],
    [
      { text: 'Soch tasmasi', link: '/' },
      { text: 'Paxtali tayoqchalar', link: '/' },
      { text: 'Paket', link: '/' },
      { text: 'Banochkalar', link: '/' },
      { text: 'Trimmer', link: '/' },
      { text: 'Paket', link: '/' },
    ],
  ];
  return (
    <div>
      {isOpen && (
        <div className="relative">
          <div
            className="fixed inset-0 z-40 flex items-start justify-center bg-white top-28 "
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="container bg-white w-full max-w-6xl mx-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 cursor-pointer">
                <div>
                  <div className="flex items-start gap-8">
                    <div className="flex flex-col ">
                      {mainItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between w-[200px] cursor-pointer border-b pb-2"
                          onMouseEnter={() => setHoveredIndex(index)}
                        >
                          <ul className="text-gray-600">
                            <li>{item}</li>
                          </ul>
                          <VscChevronRight />
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {hoveredIndex !== null && (
                        <ul className="w-full">
                          {subItems[hoveredIndex]?.map((subItem, subIndex) => (
                            <li
                              key={subIndex}
                              className="p-2 hover:bg-gray-200 rounded-md whitespace-nowrap"
                            >
                              <Link
                                to={subItem.link}
                                className="hover:text-blue-500 block"
                              >
                                {subItem.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Katalog