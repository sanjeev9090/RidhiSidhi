import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingBag } from 'react-icons/fa';

const MobileMenu = ({ isOpen, onClose }) => {
  const { cartCount, setIsCartOpen } = useCart();

  if (!isOpen) return null;

  const handleCartClick = () => {
    setIsCartOpen(true);
    onClose();
  };

  const handleNavClick = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden transition-opacity duration-300"
        onClick={onClose}
        role="presentation"
      />
      
      {/* Menu */}
      <div className="fixed top-16 right-0 z-40 w-full max-w-xs bg-white dark:bg-gray-800 shadow-xl rounded-l-lg max-h-[calc(100vh-4rem)] overflow-y-auto md:hidden">
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                    isActive
                      ? 'bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                    isActive
                      ? 'bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                    isActive
                      ? 'bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium transition-colors duration-300 ${
                    isActive
                      ? 'bg-accent-100 dark:bg-accent-900 text-accent-600 dark:text-accent-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Cart Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
          <button
            onClick={handleCartClick}
            className="w-full flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
          >
            <FaShoppingBag size={18} />
            <span>View Cart ({cartCount})</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;