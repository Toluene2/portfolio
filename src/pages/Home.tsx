import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Heart, Mail, FileText, Briefcase, ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (This is a demo)');
  };

  return (
    <>
      {/* HERO SECTION (ABOUT ME) */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-orange-600 font-medium tracking-wider text-sm uppercase mb-2 block">Welcome to Tolu's world</span>
            {/* TODO: Replace with your name */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 leading-tight">
              Hi, I'm <span className="text-orange-600">Adeyeye Toluwase Adetunji</span>.
            </h1>
            
            {/* Expanded Narrative */}
            <div className="text-lg text-stone-600 mb-8 leading-relaxed space-y-4">
              <p>
                My journey at Adeleke University has been nothing short of transformative. From the moment I stepped onto the campus, 
                I knew I was embarking on an adventure that would shape not just my career, but my character. 
                Surrounded by a community that values excellence, integrity, and service, I have grown in ways I never imagined.
              </p>
              <p>
                Throughout my time here, I've had the privilege of diving deep into my studies, exploring new ideas, and challenging myself 
                to think critically. Whether it was late nights in the library or engaging discussions in the lecture halls, every experience 
                has contributed to my academic and personal growth.
              </p>
              <p>
                One of the most significant aspects of my journey has been the opportunity to collaborate with brilliant minds. 
                {/* Describe a memorable project or event from your time at Adeleke University */}. This experience taught me the value of teamwork 
                and the power of shared vision.
              </p>
              <p>
                Beyond academics, I've learned the importance of resilience and adaptability. Navigating the ups and downs of university life 
                has equipped me with the tools to face future challenges with confidence. I am excited to share my story with you.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#school" className="px-6 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors">
                Read My Story
              </a>
              <a href="#contact" className="px-6 py-3 border border-stone-300 text-stone-900 rounded-full font-medium hover:bg-stone-100 transition-colors">
                Get in Touch
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full font-medium hover:bg-orange-200 transition-colors">
                <FileText size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[1.5/5] rounded-2xl overflow-hidden shadow-2xl bg-stone-200 relative">
              {/* TODO: Replace the src below with your own profile picture URL */}
              <img 
                src="/Main-Portrait.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Decorative badge */}
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-1">
                  <GraduationCap className="text-orange-600 w-5 h-5" />
                  <span className="font-bold text-sm">Adeleke University</span>
                </div>
                <p className="text-xs text-stone-500">Student</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SCHOOL STORY SECTION */}
      <section id="school" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full mb-4">
              <BookOpen className="w-5 h-5 text-orange-600" />
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">My Journey at Adeleke University</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg prose-stone mx-auto">
            {/* TODO: START WRITING YOUR SCHOOL STORY HERE */}
            
            <p className="lead text-xl text-stone-600 font-serif italic">
              "Every journey begins with a single step, and my step into Adeleke University was one that changed my life forever..."
            </p>

            <h3>The Beginning</h3>
            <p>
              {/* TODO: Write about your first day or year here */}
              I still remember my first day on campus. The atmosphere was vibrant, filled with students from all walks of life.
              Adeleke University isn't just a school; it's a community where I found my footing and started to build my future.
              [Replace this text with your own story about how you started at the university.]
            </p>

            <div className="my-12 p-6 bg-stone-50 border-l-4 border-orange-500 rounded-r-xl italic text-stone-700">
              {/* TODO: Add a favorite quote or a highlight moment */}
              "The best way to predict the future is to create it." - A quote that inspires me during my studies.
            </div>

            <h3>Campus Life & Academics</h3>
            <p>
              {/* TODO: Write about your classes, friends, and activities */}
              Balancing academics and social life has been a rewarding challenge. From late-night study sessions at the library
              to weekend hangouts with friends, every moment has contributed to my growth.
              [Describe your favorite classes, professors, or campus spots here.]
            </p>

            <h3>Looking Forward</h3>
            <p>
              {/* TODO: Write about your future goals */}
              As I continue my journey, I am excited about what the future holds. The skills and values I am learning at
              Adeleke University are preparing me for the world ahead.
              [Share your dreams and aspirations for after graduation.]
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full mb-4">
              <Briefcase className="w-5 h-5 text-orange-600" />
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">Selected Projects</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on during my time at university.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-48 bg-stone-200 overflow-hidden">
                <img 
                  src="https://th.bing.com/th?id=OIF.xtL71bZ9%2b9yClrfGdPBb9g&w=283&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" 
                  alt="TokenSwap" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">TokenSwap</h3>
                <p className="text-stone-600 mb-4">
                  TokenSwap is a smartcontract project used in the web3 space. It swaps tokens from a chain to another chain, Motoko language is the programming language used.
                </p>
                <div className="flex gap-3">
                  <a href="https://github.com/Toluene2/ICP-HACATHON" className="flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700">
                    <Github size={16} /> Code
                  </a>
                  <a href="https://github.com/Toluene2/ICP-HACATHON" className="flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-48 bg-stone-200 overflow-hidden">
                <img 
                  src="/server-racks.jpg" 
                  alt="Project 2" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">Automated IoT Scanner</h3>
                <p className="text-stone-600 mb-4">
                  A brief description of the project goes here. Explain what it does, the technologies used, and your role in it.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700">
                    <Github size={16} /> Code
                  </a>
                  <a href="#" className="flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (FORM) */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center justify-center p-2 bg-orange-100 rounded-full mb-4">
              <Mail className="w-5 h-5 text-orange-600" />
            </span>
            <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">Get in Touch</h2>
            <p className="text-stone-600">I'd love to hear from you. Send me a message below!</p>
          </div>

          <div className="bg-stone-50 rounded-2xl shadow-lg p-8 md:p-12 border border-stone-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-stone-200 text-center">
              <p className="text-stone-600">
                You can also reach me at <a href="mailto:joshuaoladele17@gmail.com" className="text-orange-600 font-medium hover:underline">joshuaoladel7@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
