import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const CustomerFeedback = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const sectionRef = useScrollAnimation();

  const feedbacks = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      feedback: 'Absolutely love the quality of fruits and vegetables! Delivery was fast and everything arrived fresh. Highly recommended!',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      feedback: 'Great selection of organic produce. The prices are very competitive and the customer service is excellent. Will order again!',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    {
      id: 3,
      name: 'Emma Williams',
      rating: 4,
      feedback: 'Very satisfied with my purchase. The vegetables were fresh and delivery was on time. Minor packaging issue but overall great!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    {
      id: 4,
      name: 'David Martinez',
      rating: 5,
      feedback: 'Amazing service! The app is user-friendly and the products are always fresh. Best grocery delivery service I have used.',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      rating: 5,
      feedback: 'Impressed with the quality and freshness of dairy products. Great deals and consistent service. Definitely my go-to grocery app!',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2'
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, feedbacks.length]);

  const nextSlide = () => {
    setAutoPlay(false);
    setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
  };

  const prevSlide = () => {
    setAutoPlay(false);
    setCurrentSlide((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  const goToSlide = (index) => {
    setAutoPlay(false);
    setCurrentSlide(index);
  };

  const currentFeedback = feedbacks[currentSlide];

  return (
    <section ref={sectionRef} className="reveal w-full py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800 dark:text-white animate-fade-in-up">
          Customer Testimonials
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-sm md:text-base animate-fade-in-up px-4" style={{ animationDelay: '0.1s' }}>
          See what our happy customers have to say about us
        </p>

        {/* Slider Container */}
        <div className="relative w-full px-0 md:px-16">
          {/* Feedback Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-12 min-h-auto md:min-h-96 animate-scale-in mx-auto max-w-4xl">
            <div className="flex flex-col items-center text-center">
              {/* Customer Image */}
              <img
                src={currentFeedback.image}
                alt={currentFeedback.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4 md:mb-6 border-4 border-accent-500 animate-fade-in flex-shrink-0"
              />

              {/* Star Rating */}
              <div className="flex gap-1 mb-4 md:mb-6 justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < currentFeedback.rating ? 'text-yellow-400' : 'text-gray-300'}
                    size={16}
                  />
                ))}
              </div>

              {/* Feedback Text */}
              <p className="text-sm md:text-lg text-gray-700 dark:text-gray-300 mb-4 md:mb-6 italic animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
                "{currentFeedback.feedback}"
              </p>

              {/* Customer Name */}
              <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white animate-fade-in" style={{ animationDelay: '0.3s' }}>
                {currentFeedback.name}
              </h3>
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 md:-translate-x-16 bg-yellow-400 hover:bg-yellow-500 text-white p-2 md:p-3 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 z-10"
            aria-label="Previous feedback"
          >
            <FaChevronLeft size={16} className="md:w-5 md:h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 md:translate-x-16 bg-yellow-400 hover:bg-yellow-500 text-white p-2 md:p-3 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 z-10"
            aria-label="Next feedback"
          >
            <FaChevronRight size={16} className="md:w-5 md:h-5" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8 flex-wrap">
            {feedbacks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-400 w-6 md:w-8 animate-pulse-soft'
                    : 'bg-gray-300 dark:bg-gray-600 w-2 md:w-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to feedback ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
