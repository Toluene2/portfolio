import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function About() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-orange-600 font-medium tracking-wider text-sm uppercase mb-2 block">Welcome to Tolu's world</span>
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
              Working on various projects, from web3 applications to IoT solutions, has taught me the value of teamwork
              and the power of shared vision. These experiences have been instrumental in shaping my problem-solving abilities
              and creative thinking.
            </p>
            <p>
              Beyond academics, I've learned the importance of resilience and adaptability. Navigating the ups and downs of university life
              has equipped me with the tools to face future challenges with confidence. I am excited to share my story with you
              and to continue growing both professionally and personally.
            </p>
            <p>
              My passion lies in leveraging technology to solve real-world problems. Whether it's blockchain development, IoT systems,
              or full-stack web applications, I approach every project with dedication and a commitment to excellence.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="/projects" className="px-6 py-3 bg-stone-900 text-white rounded-full font-medium hover:bg-stone-800 transition-colors">
              View My Projects
            </a>
            <a href="/gallery" className="px-6 py-3 border border-stone-300 text-stone-900 rounded-full font-medium hover:bg-stone-100 transition-colors">
              See My Gallery
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[1.5/3] rounded-2xl overflow-hidden shadow-2xl bg-stone-200 relative">
            <img
              src="/Main-Portrait.jpg"
              alt="Adeyeye Toluwase Adetunji"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Decorative badge */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-3 mb-1">
                <Heart className="text-orange-600 w-5 h-5" />
                <span className="font-bold text-sm">Adeleke University</span>
              </div>
              <p className="text-xs text-stone-500">Computer Science Student</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-20 pt-20 border-t border-stone-200"
      >
        <h2 className="font-serif text-4xl font-bold text-stone-900 mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { category: "Languages", skills: ["JavaScript/TypeScript", "Python", "Motoko", "HTML/CSS"] },
            { category: "Frontend", skills: ["React", "Tailwind CSS", "Vite", "Framer Motion"] },
            { category: "Backend & Web3", skills: ["Node.js", "Smart Contracts", "Blockchain"] },
            { category: "Tools & Platforms", skills: ["Git", "VS Code", "GitHub", "IoT Platforms"] },
            { category: "Soft Skills", skills: ["Team Collaboration", "Problem Solving", "Communication", "Project Management"] },
            { category: "Other", skills: ["IoT Development", "Network Security", "UI/UX Design", "Documentation"] }
          ].map((skillGroup, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.skills.map((skill, idx) => (
                  <li key={idx} className="text-stone-600 flex items-start">
                    <span className="text-orange-600 mr-3 font-bold">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
