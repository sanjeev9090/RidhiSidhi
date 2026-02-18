import { FaLeaf, FaTruck, FaShieldAlt, FaUsers, FaAward, FaHeart } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const heroRef = useScrollAnimation();
  const missionRef = useScrollAnimation();

  const values = [
    {
      icon: FaLeaf,
      title: 'Fresh & Organic',
      description: 'We source only the freshest organic produce directly from trusted local farmers.'
    },
    {
      icon: FaTruck,
      title: 'Fast Delivery',
      description: 'Same-day delivery in most areas. Your groceries arrive fresh within hours.'
    },
    {
      icon: FaShieldAlt,
      title: 'Quality Assured',
      description: 'Every product is inspected for quality and freshness before delivery.'
    },
    {
      icon: FaHeart,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We stand behind every product we deliver.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    {
      name: 'Emma Williams',
      role: 'Customer Success Lead',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    {
      name: 'David Martinez',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '500+', label: 'Products' },
    { number: '100+', label: 'Partner Farms' },
    { number: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="reveal w-full bg-gradient-to-r from-accent-600 to-accent-700 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">About FarmFresh</h1>
          <p className="text-xl text-accent-100 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Bringing farm-fresh groceries to your doorstep with a commitment to quality, sustainability, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <div>
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white animate-fade-in-up">
              Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in-left">
                <img
                  src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="Farm"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="animate-fade-in-right space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  FarmFresh was founded in 2020 with a simple mission: to make fresh, organic produce accessible to everyone. We started with a small team and a big dream to revolutionize how people buy groceries.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Today, we work with over 100 local farms across the region, delivering thousands of products to our customers daily. Our commitment to quality, sustainability, and customer service has made us a trusted name in the grocery delivery industry.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We believe in supporting local farmers, reducing food waste, and providing our customers with the freshest produce possible, all delivered to their homes within hours of ordering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">{stat.number}</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white animate-fade-in-up">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg text-center card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <Icon className="text-5xl text-accent-600 dark:text-accent-400 mb-4 mx-auto animate-float" style={{ animationDelay: `${index * 0.15}s` }} />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white animate-fade-in-up">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">{member.name}</h3>
                  <p className="text-accent-600 dark:text-accent-400 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 px-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white animate-fade-in-up">Why Choose FarmFresh?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fade-in-left">
              <div className="flex gap-4 mb-6">
                <FaAward className="text-accent-600 dark:text-accent-400 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Award Winning Service</h3>
                  <p className="text-gray-600 dark:text-gray-400">Recognized for excellence in customer service and product quality.</p>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <FaUsers className="text-accent-600 dark:text-accent-400 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Trusted by Thousands</h3>
                  <p className="text-gray-600 dark:text-gray-400">Join over 50,000 satisfied customers who rely on us for their groceries.</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="flex gap-4 mb-6">
                <FaLeaf className="text-accent-600 dark:text-accent-400 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Sustainable Practices</h3>
                  <p className="text-gray-600 dark:text-gray-400">We're committed to eco-friendly delivery and sustainable sourcing.</p>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <FaShieldAlt className="text-accent-600 dark:text-accent-400 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">100% Guarantee</h3>
                  <p className="text-gray-600 dark:text-gray-400">Not satisfied? We offer a full refund on any product.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">Ready to Experience Fresh?</h2>
          <p className="text-xl text-accent-100 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Start shopping with FarmFresh today and get fresh, organic produce delivered to your doorstep.
          </p>
          <a
            href="/shop"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-primary-900 font-bold py-3 px-8 rounded-full transition duration-300 btn-animate animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
