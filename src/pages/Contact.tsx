import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Using EmailJS or similar service for sending emails
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again or email directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-6">
            <Mail className="w-6 h-6 text-orange-600" />
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Contact Info Cards */}
        {[
          {
            icon: Mail,
            title: 'Email',
            content: 'joshuaoladele17@gmail.com',
            link: 'mailto:joshuaoladele17@gmail.com'
          },
          {
            icon: Phone,
            title: 'Phone',
            content: '+2349075656587',
            link: 'tel:+2349075656587'
          },
          {
            icon: MapPin,
            title: 'Location',
            content: 'Ede, Osun State, Nigeria',
            link: '#'
          }
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-600 transition-colors">
                <item.icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">{item.title}</h3>
            </div>
            <p className="text-stone-600 group-hover:text-stone-900 transition-colors">{item.content}</p>
          </motion.a>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-stone-100">
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
              <div className="w-5 h-5 bg-green-500 rounded-full flex-shrink-0 mt-0.5"></div>
              <div>
                <h3 className="font-semibold text-green-900">Message sent successfully!</h3>
                <p className="text-sm text-green-700">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                placeholder="What is this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-stone-200">
            <p className="text-center text-stone-600 mb-4">
              Prefer direct contact? You can also reach me at:
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="mailto:joshuaoladele17@gmail.com"
                className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
              >
                joshuaoladele17@gmail.com
              </a>
              <span className="hidden sm:block text-stone-300">•</span>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 font-medium hover:text-orange-700 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl mx-auto mt-16"
      >
        <h2 className="font-serif text-3xl font-bold text-stone-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How long will it take to receive a response?",
              a: "I try to respond to all messages within 24-48 hours. However, during busy periods, it may take up to a week."
            },
            {
              q: "Are you open to freelance projects?",
              a: "Yes! I'm interested in freelance projects that align with my skills and interests. Feel free to discuss your project details."
            },
            {
              q: "Do you offer consulting services?",
              a: "I'm open to discussing consulting opportunities. Let's connect and talk about how I can help with your project."
            },
            {
              q: "What's the best way to reach you?",
              a: "Email is the most reliable way to reach me. I check my email regularly and will respond as soon as possible."
            }
          ].map((item, index) => (
            <details key={index} className="bg-white p-6 rounded-lg border border-stone-200 hover:border-orange-300 transition-colors cursor-pointer group">
              <summary className="font-semibold text-stone-900 flex justify-between items-center group-open:text-orange-600 transition-colors">
                {item.q}
                <span className="ml-4">+</span>
              </summary>
              <p className="text-stone-600 mt-4">{item.a}</p>
            </details>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
