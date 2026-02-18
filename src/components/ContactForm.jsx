import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const sectionRef = useScrollAnimation();
  const cardRef = useScrollAnimation();
  const inputRef1 = useScrollAnimation();
  const inputRef2 = useScrollAnimation();
  const inputRef3 = useScrollAnimation();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.phone && !/^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\d{3}\s\d{3}\s\d{4}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            We'd love to hear from you. Send us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information Cards */}
          <div ref={inputRef1} className="reveal stagger-item bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center card-hover">
            <div className="flex justify-center mb-4">
              <FaPhone className="text-accent-500 text-4xl animate-float" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              Phone
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              +1 (555) 123-4567
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Mon-Fri, 9:00 AM - 6:00 PM
            </p>
          </div>

          <div ref={inputRef2} className="reveal stagger-item bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center card-hover">
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-accent-500 text-4xl animate-float" style={{ animationDelay: '0.3s' }} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              Email
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              support@groceryapp.com
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              We'll respond within 24 hours
            </p>
          </div>

          <div ref={inputRef3} className="reveal stagger-item bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center card-hover">
            <div className="flex justify-center mb-4">
              <FaMapMarkerAlt className="text-accent-500 text-4xl animate-float" style={{ animationDelay: '0.6s' }} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
              Address
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              123 Market Street
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              New York, NY 10001
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div ref={cardRef} className="reveal bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 animate-slide-in-up">
          {submitted && (
            <div className="mb-6 p-4 bg-accent-100 dark:bg-accent-900 border border-accent-300 dark:border-accent-700 rounded-lg flex items-center gap-3">
              <FaCheckCircle className="text-accent-600 dark:text-accent-400 text-xl" />
              <div>
                <p className="font-bold text-accent-800 dark:text-accent-200">
                  Success!
                </p>
                <p className="text-accent-700 dark:text-accent-300 text-sm">
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition duration-300 focus:outline-none ${
                    errors.name
                      ? 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900'
                      : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-accent-500'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition duration-300 focus:outline-none ${
                    errors.email
                      ? 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900'
                      : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-accent-500'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition duration-300 focus:outline-none ${
                    errors.phone
                      ? 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900'
                      : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-accent-500'
                  }`}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition duration-300 focus:outline-none ${
                    errors.subject
                      ? 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900'
                      : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-accent-500'
                  }`}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="delivery">Delivery Issue</option>
                  <option value="product">Product Quality</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className={`w-full px-4 py-3 rounded-lg border-2 transition duration-300 focus:outline-none resize-none ${
                  errors.message
                    ? 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900'
                    : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-accent-500'
                }`}
                placeholder="Tell us how we can help..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                {formData.message.length}/500 characters
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-3 rounded-lg font-bold text-white transition duration-300 ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-yellow-400 hover:bg-yellow-500 active:scale-95'
                }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
