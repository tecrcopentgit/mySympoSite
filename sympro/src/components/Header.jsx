
import {useState , useEffect, useRef} from 'react'
import Navbar from './Navbar';
import {Award , Navigation} from 'lucide-react';

export default function Header(){


const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isHeaderFixed,setIsHeaderFixed] = useState(false);
const headerRef = useRef(null);

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  setIsMenuOpen(false);
};

useEffect(() => {
  const handleScroll = () => {
    if (headerRef.current){
      const headerBottom = headerRef.current.offsetHeight;

      if (window.scrollY >= headerBottom){
        setIsHeaderFixed(true);
      }
      else{
        setIsHeaderFixed(false);
      }
    }
  };

  window.addEventListener('scroll',handleScroll);
  return ()=> window.removeEventListener('scroll',handleScroll);
},[]);


    return (
      <>
      <header className='justify-center flex space-x-9 bg-gradient-to-br from-amber-500  to-rose-200 p-2'ref={headerRef}>
        
      <img className='flex mt-4 mx-4 h-10' src='https://nce.ac.in/wp-content/uploads/2022/05/Nellai-1024x309.png'/>
      
        <h1 className="text-3xl font-bold text-stone-900 mt-2" >
          DRIFTIAN 2K`25
          
        </h1>
       
        
        
      </header>
      <div className='flex justify-center font-bold bg-transparent bg-gradient-to-br from-rose-400 to-amber-400 '>
        <img src='https://cdn-icons-png.flaticon.com/128/11152/11152918.png' className=' mt-4 mx-4 h-10'/>
        <p className=''>Department of CSE</p>
        </div>
      <div className='bg-amber-500'>
        <nav className={`w-full bg-gradient-br from-pink-500 to-rose-500 backdrop-blur-sm z-50 border-b border-purple-500/20 ${ isHeaderFixed ? 'fixed top-0 left-0 right-0':''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center h-16">
              <div className="flex items-center space-x-2">
                
              </div>
              <Navbar/>
              
            </div>
          </div>
        </nav>
      </div>
      
    </>
      
    )  
}
      