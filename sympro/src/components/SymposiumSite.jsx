import React, { useState, useEffect, useRef } from 'react';

export default function StickyNavApp() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerBottom = headerRef.current.offsetHeight;
        
        if (window.scrollY >= headerBottom) {
          setIsNavFixed(true);
        } else {
          setIsNavFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header 
        ref={headerRef}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-6">
            Discover amazing content and services tailored just for you
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">🚀 Fast</h3>
              <p>Lightning-fast performance for the best user experience</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">🎨 Beautiful</h3>
              <p>Stunning design that catches the eye</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">💪 Powerful</h3>
              <p>Robust features to meet all your needs</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav 
        className={`bg-white shadow-md transition-all duration-300 z-50 ${
          isNavFixed ? 'fixed top-0 left-0 right-0' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <ul className="flex space-x-8 py-4">
            <li>
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <section className="mb-16" id="home">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Home Section</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Welcome to our home section. Scroll down and watch the navigation bar become fixed at the top once the header disappears from view. This makes navigation always accessible to users as they browse through the content.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </section>

        <section className="mb-16" id="about">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 leading-relaxed mb-4">
              We are a team of passionate individuals dedicated to creating amazing experiences. Our mission is to deliver high-quality solutions that exceed expectations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              With years of experience in the industry, we have helped countless clients achieve their goals through innovation and dedication.
            </p>
          </div>
        </section>

        <section className="mb-16" id="services">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Web Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Building responsive and modern websites using the latest technologies and best practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">UI/UX Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating beautiful and intuitive user interfaces that provide exceptional user experiences.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Mobile Apps</h3>
              <p className="text-gray-600 leading-relaxed">
                Developing native and cross-platform mobile applications for iOS and Android.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Consulting</h3>
              <p className="text-gray-600 leading-relaxed">
                Providing expert advice and guidance to help your business succeed in the digital world.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16" id="portfolio">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Portfolio</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 leading-relaxed mb-4">
              Check out some of our recent projects and success stories. We take pride in the work we deliver and the relationships we build with our clients.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Each project is unique and tailored to meet specific business needs and goals.
            </p>
          </div>
        </section>

        <section className="mb-16" id="testimonials">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Testimonials</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <p className="text-gray-600 italic mb-4">
                "Working with this team was an absolute pleasure. They delivered exactly what we needed and more!"
              </p>
              <p className="text-gray-800 font-semibold">- John Doe, CEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
              <p className="text-gray-600 italic mb-4">
                "Professional, efficient, and creative. Highly recommend their services!"
              </p>
              <p className="text-gray-800 font-semibold">- Jane Smith, Marketing Director</p>
            </div>
          </div>
        </section>

        <section className="mb-16" id="contact">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 leading-relaxed mb-6">
              Ready to start your next project? Get in touch with us today and let's discuss how we can help you achieve your goals.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}