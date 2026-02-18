import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

const Header = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking on cart or theme toggle
  const handleMobileAction = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll to top when clicking logo
  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    // Scroll immediately
    window.scrollTo(0, 0);
    // Or use smooth scroll for modern browsers
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-primary-200 dark:border-gray-700 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center flex-shrink-0 hover:opacity-80 transition-opacity duration-300 no-underline"
          >
            <img src="/logo.png" alt="Ridhi-Sidhi" className="h-12 md:h-16 w-auto object-contain mr-3" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `font-medium transition-colors duration-300 ${isActive ? 'text-accent-600 dark:text-accent-400' : 'text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400'}`
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/shop" 
                className={({ isActive }) => 
                  `font-medium transition-colors duration-300 ${isActive ? 'text-accent-600 dark:text-accent-400' : 'text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400'}`
                }
              >
                Shop
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `font-medium transition-colors duration-300 ${isActive ? 'text-accent-600 dark:text-accent-400' : 'text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400'}`
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `font-medium transition-colors duration-300 ${isActive ? 'text-accent-600 dark:text-accent-400' : 'text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400'}`
                }
              >
                Contact
              </NavLink>
            </nav>

            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
              </button>

              <div 
                className="relative cursor-pointer"
                onClick={() => setIsCartOpen(true)}
              >
                <FaShoppingCart className="text-xl text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-300" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse-soft">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center space-x-3">
            <button 
              onClick={() => {
                toggleTheme();
                handleMobileAction();
              }}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
            </button>

            <div 
              className="relative cursor-pointer"
              onClick={() => {
                setIsCartOpen(true);
                handleMobileAction();
              }}
            >
              <FaShoppingCart className="text-lg text-gray-700 dark:text-gray-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse-soft">
                  {cartCount}
                </span>
              )}
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;