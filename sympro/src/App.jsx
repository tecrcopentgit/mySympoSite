import { useState } from 'react'
import { Calendar, MapPin, Users, Award, ArrowRight, Clock } from 'lucide-react';
import Header from './components/Header.jsx';
import Guests from './components/Guests.jsx';
import SpecialGuests from './components/SpecialGuests.jsx';
import SymposiumSite from './components/SymposiumSite.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Shedule from './components/Shedule.jsx';
import Registration from './components/Registration.jsx';
import Events from './components/Events.jsx';
import Footer from './components/Footer.jsx'


import './index.css'


function App() {
  return (
    <>

<Header/>
<Hero/>
<About/>
<Shedule/>
<Events/>
<Registration/>
<Guests/>
<SpecialGuests/>
<Footer/>

   
    </>
  )
}


export default App
