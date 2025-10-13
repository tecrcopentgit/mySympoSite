

import {useState} from 'react'

import {Menu, X ,Award } from 'lucide-react';


export default function Navbar(){

const [isMenuOpen, setIsMenuOpen] = useState(false);

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  setIsMenuOpen(false);
  
     
};



const navContent = ['About', 'Events','Schedule','Registration', 'Guests', 'Chief Guests']

return (
    
            <>
            <div className="hidden md:flex  space-x-8">
              {navContent.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-white font-bold hover:text-purple-400 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
{isMenuOpen && ( <div className="fixed mt-10 w-full md:hidden bg-slate-800 border-t border-purple-500/20">
            {navContent.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:bg-slate-700 capitalize"
              >
                {item}
              </button>
            ))}
          </div>)}
            

          </>
       
        
);

}