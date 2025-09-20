import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
import PromoCode from './Components/PromoCode'
import RegisterStep from './Components/RegisterStep'
import Bookmarker from './Components/Bookmarker'
import FaQ from './Components/FaQ'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
// Footer



function App() {


  return (
    <>
      <Header/>
      <PromoCode/>
      <RegisterStep/>
      <Bookmarker/>
      <FaQ/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
