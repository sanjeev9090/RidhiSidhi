import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import CustomerFeedback from '../components/CustomerFeedback';
import ContactForm from '../components/ContactForm';
import TypingText from '../components/TypingText';
import ProfessionalSection from '../components/ProfessionalSection';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { bestsellerIds, products } from '../Data/products';

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const titleRef = useScrollAnimation();
  const promoRef = useScrollAnimation();
  const bestsellersTitleRef = useScrollAnimation();

  const categories = [
    { name: 'Men’s', image: 'https://i5.walmartimages.com/seo/Marino-Mens-Dress-Socks-Fun-Colorful-Socks-for-Men-Cotton-Funky-Socks-6-Pack_49796c3a-c1f5-4013-b1be-bdb2cb2e5428_3.a8bff7300604eac0f50b88ea50aa8f01.jpeg', slug: 'sox' },
    { name: 'Women’s', image: 'https://img.joomcdn.net/145a70de5c59e27788e0bb534af8b6eca0321a43_original.jpeg', slug: 'sox' },
    { name: 'Kids’ Comfort', image: 'https://cdn.shopify.com/s/files/1/0853/4098/files/sp-kids-sixpair-opt.jpg?12069282061839315951', slug: 'sox' },
    { name: 'Trendy', image: 'https://re-sox.com/cdn/shop/files/resox-katya-vilchyk_0029_dc93f015-452b-4b74-b6e1-1574db3aea6f.jpg?v=1717339220', slug: 'sox' },
  ];

  useEffect(() => {
    const bestsellerProducts = bestsellerIds.map(id => 
      products.find(product => product.id === id)
    ).filter(Boolean);
    setBestsellers(bestsellerProducts);
  }, []);

  return (
    <div>
      {/* Hero Section (video background) */}
      <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">
        {/* Background video: place your video in `public/videos/hero.mp4` or change the src to a hosted file */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://i.ibb.co/FbtwPjTM/iuliia-pilipeichenko-MX320-XB5o-R8-unsplash.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay to ensure foreground text is readable */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <TypingText 
            text="Walk Bold. Wear Better."
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          />
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Discover socks designed for everyday comfort, style, and durability
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 btn-animate animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 
            ref={titleRef}
            className="reveal text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          >
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard 
                key={index}
                name={category.name}
                image={category.image}
                slug={category.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Section */}
      <section 
        ref={promoRef}
        className="reveal py-12 bg-primary-700  text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in-up">Special Offers!</h2>
          <p className="text-xl mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Get up to 20% off on selected items on this week.</p>
          <Link 
            to="/shop" 
            className="inline-block bg-primary-100 hover:bg-primary-200 text-primary-900 font-bold py-2 px-6 rounded-full transition duration-300 btn-animate animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            View Deals
          </Link>
        </div>
      </section>

      {/* Professional Highlights Section */}
      <ProfessionalSection />

      {/* Bestsellers Section */}
      <section className="py-12 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 
            ref={bestsellersTitleRef}
            className="reveal text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          >
            Our Bestsellers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {bestsellers.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Customer Feedback Section */}
      <CustomerFeedback />

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
};

export default Home;