import React from 'react'

const Katalog = ({isOpen,setIsOpen}) => {
  return (
    <div>{isOpen && (
        <div className="relative">
            <div className="fixed inset-0 z-50 flex items-start justify-center bg-white  top-28 "   onClick={() => setIsOpen(false)}>
             <div className="container bg-white w-full ">
               <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-6 ">
                 <div>
                   <h3 className="font-bold text-gray-700">Аксессуары</h3>
                   <ul className="text-gray-600">
                     <li>Крем</li>
                     <li>Спрей</li>
                     <li>Стик</li>
                   </ul>
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-700">Уход за лицом</h3>
                   <ul className="text-gray-600">
                     <li>Средства от прыщей</li>
                     <li>Очищение лица</li>
                   </ul>
                 </div>
                 <div>
                   <h3 className="font-bold text-gray-700">Уход за телом</h3>
                   <ul className="text-gray-600">
                     <li>Уход за руками</li>
                     <li>Уход за стопами</li>
                     <li>Уход за телом</li>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
        </div>
         )}</div>
  )
}

export default Katalog