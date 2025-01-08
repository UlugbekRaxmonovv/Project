import './App.css'
import {Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Blog from './pages/Blog/Blog'
import Wishlist from './pages/Wishlist/Wishlist'
import Korzinka from './pages/Korzinka/Korzinka'
import CoconutInfoPage from './pages/CoconutInfoPage/CoconutInfoPage'
import Promotions from './pages/Aksiya/Promotions'
import Promotion from './pages/Aksiya1/Promotion'
import ContactSection from './pages/Contact/ContactSection'
import SearchSection from './pages/SearchSection/SearchSection'
import Zakast from './pages/Zakast/Zakast'
import Gift from './pages/Gift/Gift'
import Loyalty from './pages/Loyalty/Loyalty'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/actions' element={<Promotion/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/korzinka' element={<Korzinka/>}/>
    <Route path='/contacts' element={<ContactSection/>}/>
    <Route path='/search' element={<SearchSection/>}/>
    <Route path='/pages/how-to-order' element={<Zakast/>}/>
    <Route path='/pages/loyalty' element={<Loyalty/>}/>
    <Route path='/pages/gifts-on-buy' element={<Gift/>}/>
    <Route path='/actions/masks-sale' element={<Promotions/>}/>
    <Route path='/blog/first-article' element={<CoconutInfoPage/>}/>

    </Routes>

    </>
  )
}

export default App
