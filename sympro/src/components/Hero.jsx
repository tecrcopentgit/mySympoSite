

import { Calendar, MapPin, Users, Award, ArrowRight, Clock } from 'lucide-react';


const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
export default function Hero(){


    return (

        <>
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-amber-500 to-pink-500">
        <div className="max-w-7xl mx-auto text-center animate-[fadeIn_1s_ease-out_1]" style={{ animationFillMode: 'forwards' }} >
            
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
           <br></br>
            <strong>DRIFTIAN</strong>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-pink-900">
              2025
            </span>
          </h1>
          <p> Welcome All! With our Full Excitment!!</p>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us for Technical and Non Technical Symposium
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-200 mb-10">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-purple-900" />
              <span> date will be announced..soon, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-purple-900" />
              <span> Nellai College Auditorium</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-900" />
              <span>Anybody can Participate</span>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('Registration')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
          >
            Register Now <ArrowRight className="w-5 h-5 " />
          </button>
        </div>
      </section>


      
        
        </>
    )
}