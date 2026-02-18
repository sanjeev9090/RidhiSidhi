import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCreditCard, FaTruck, FaLeaf } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Footer = () => {
  const year = new Date().getFullYear();
  const footerRef = useScrollAnimation();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
    { name: 'About Us', path: '#' },
  ];

  const categories = [
    { name: 'Fruits', path: '/shop?category=fruits' },
    { name: 'Vegetables', path: '/shop?category=vegetables' },
    { name: 'Dairy', path: '/shop?category=dairy' },
    { name: 'Bakery', path: '/shop?category=bakery' },
  ];

  const policies = [
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms & Conditions', path: '#' },
    { name: 'Return Policy', path: '#' },
    { name: 'Shipping Info', path: '#' },
  ];

  const socialLinks = [
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaTwitter, url: '#', label: 'Twitter' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaLinkedin, url: '#', label: 'LinkedIn' },
  ];

  return (
    <footer ref={footerRef} className="reveal bg-gray-900 dark:bg-gray-950 text-gray-100 border-t border-gray-800">
      {/* Top Section - Features */}
      <div className="bg-primary-700 from-accent-600 to-accent-700 py-8 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 stagger-item">
              <FaTruck className="text-3xl text-white animate-float" />
              <div>
                <h3 className="font-bold text-white">Free Delivery</h3>
                <p className="text-sm text-green-100">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-4 stagger-item">
              <FaCreditCard className="text-3xl text-white animate-float" style={{ animationDelay: '0.3s' }} />
              <div>
                <h3 className="font-bold text-white">Secure Payment</h3>
                <p className="text-sm text-accent-100">100% secure transactions</p>
              </div>
            </div>
            <div className="flex items-center gap-4 stagger-item">
              <FaLeaf className="text-3xl text-white animate-float" style={{ animationDelay: '0.6s' }} />
              <div>
                <h3 className="font-bold text-white">Organic & Fresh</h3>
                <p className="text-sm text-accent-100">Quality guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About Company */}
            <div className="stagger-item">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <FaLeaf className="text-accent-500" />
                FarmFresh
              </h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                We deliver fresh, organic produce directly from farms to your doorstep. Quality and freshness guaranteed.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      className="bg-gray-800 hover:bg-accent-600 text-gray-300 hover:text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="stagger-item">
              <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-accent-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="stagger-item">
              <h4 className="text-lg font-bold mb-4 text-white">Categories</h4>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={category.path}
                      className="text-gray-400 hover:text-accent-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="stagger-item">
              <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
              <div className="space-y-3">
                <a
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-accent-400 transition-colors duration-300 text-sm flex items-start gap-3 group"
                >
                  <FaPhone className="text-accent-500 mt-1 flex-shrink-0" size={16} />
                  <span className="group-hover:translate-x-1 transition-transform block">+1 (555) 123-4567</span>
                </a>
                <a
                  href="mailto:support@groceryapp.com"
                  className="text-gray-400 hover:text-accent-400 transition-colors duration-300 text-sm flex items-start gap-3 group"
                >
                  <FaEnvelope className="text-accent-500 mt-1 flex-shrink-0" size={16} />
                  <span className="group-hover:translate-x-1 transition-transform block">support@groceryapp.com</span>
                </a>
                <div className="text-gray-400 text-sm flex items-start gap-3">
                  <FaMapMarkerAlt className="text-accent-500 mt-1 flex-shrink-0" size={16} />
                  <span>123 Market Street<br />New York, NY 10001</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Policies */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {policies.map((policy, index) => (
                <a
                  key={index}
                  href={policy.path}
                  className="text-gray-400 hover:text-accent-400 transition-colors duration-300 text-xs md:text-sm border-r border-gray-700 pr-4 last:border-r-0 last:pr-0"
                >
                  {policy.name}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-500 text-xs md:text-sm">
                &copy; {year} <span className="text-accent-500 font-bold">FarmFresh</span>. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-2">
                Made with <span className="text-red-500">❤</span> for fresh food lovers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-yellow-400 hover:bg-yellow-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40 opacity-0 hover:opacity-100 focus:opacity-100 hidden md:block"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;