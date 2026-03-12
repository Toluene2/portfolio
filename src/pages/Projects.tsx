import { motion } from 'framer-motion';
import { Briefcase, Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "TokenSwap",
      description: "TokenSwap is a smart contract project used in the web3 space. It swaps tokens from one chain to another chain. Motoko language is the programming language used.",
      image: "https://th.bing.com/th?id=OIF.xtL71bZ9%2b9yClrfGdPBb9g&w=283&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      codeLink: "https://github.com/Toluene2/ICP-HACATHON",
      liveLink: "https://github.com/Toluene2/ICP-HACATHON",
      tags: ["Web3", "Motoko", "Smart Contracts"]
    },
    {
      id: 2,
      title: "Automated IoT Scanner",
      description: "A comprehensive IoT device scanning solution that automatically discovers and monitors connected devices across networks. Features real-time monitoring, device classification, and network visualization.",
      image: "/server-racks.jpg",
      codeLink: "#",
      liveLink: "#",
      tags: ["IoT", "Python", "Network Security"]
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-6">
            <Briefcase className="w-6 h-6 text-orange-600" />
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 mb-6">My Projects</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my time at Adeleke University and beyond.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="h-48 bg-stone-200 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">{project.title}</h3>
              <p className="text-stone-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.codeLink}
                  className="flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.liveLink}
                  className="flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
