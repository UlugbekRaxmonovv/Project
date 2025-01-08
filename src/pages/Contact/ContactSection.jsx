import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { TbClockHour3 } from 'react-icons/tb';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';


const ContactSection = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
  <>
  <Navbar/>
    <div className="max-w-7xl mx-auto p-4 bg-white">
      <h1 className="text-2xl font-semibold text-gray-800 mb-8">Контакты</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="text-xl font-medium text-gray-800">KOKOS+</div>
                        <div className="flex items-start space-x-2">
                        <IoLocationOutline
                        className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0"  />

              <div>
                <div className="text-gray-700">Адрес:</div>
                <div className="text-gray-600">
                  Ташкент массив Ц-2, следж от главного входа на
                  Алайский рынок
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
            <MdOutlineLocalPhone 
            className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />

              <div>
                <div className="text-gray-700">Контакты:</div>
                <a href="tel:+998900891484" className="text-gray-600 hover:text-pink-600">
                  +998900891484
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-2">
            <TbClockHour3 className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0"/>

              <div>
                <div className="text-gray-700">График работы:</div>
                <div className="text-gray-600">Ежедневно с 10:00 до 19:00</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg">
            <h2 className="text-xl font-medium text-gray-800 mb-4">Обратная связь</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Имя"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Тема"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Сообщение"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>

        <div className="h-[400px] lg:h-full min-h-[400px] bg-gray-100 rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-gray-200">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11992.72885232603!2d69.20430054999999!3d41.28313865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1720793633991!5m2!1sru!2s"  width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
     
        </div>
      </div>


    </div>
    <Footer/>
  </>
  );
};

export default ContactSection;