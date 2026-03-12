import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function University() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full mb-6">
            <BookOpen className="w-6 h-6 text-orange-600" />
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 mb-6">Adeleke University</h1>
          <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="prose prose-lg prose-stone max-w-none space-y-8"
      >
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl">
          <p className="text-lg text-stone-700 italic font-serif mb-0">
            "Adeleke University: Where Excellence Meets Integrity and Service"
          </p>
        </div>

        <section>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mt-12 mb-4">History and Foundation</h2>
          <p className="text-stone-700 leading-relaxed">
            Adeleke University, located in Ede, Osun State, Nigeria, was founded in 2011 by the Adeleke family.
            The university was established with a vision to provide quality education and develop graduates who would
            contribute meaningfully to society. Named after the Adeleke family, a prominent business and political family
            in Nigeria, the institution has grown from its modest beginnings to become one of Nigeria's leading private universities.
          </p>
          <p className="text-stone-700 leading-relaxed">
            The university operates under the motto "To provide high-quality education based on Seventh-day Adventist philosophy" and is committed to providing an enabling
            environment for teaching, learning, and research. Over the decades, Adeleke University has established itself as
            a beacon of academic excellence, known for its state-of-the-art facilities, dedicated faculty, and vibrant student community.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mt-12 mb-4">The Department of Computer Science</h2>
          <p className="text-stone-700 leading-relaxed">
            The Department of Computer Science at Adeleke University stands as a flagship department, offering cutting-edge
            education in information technology and computer science. Established to address the growing demand for skilled
            technology professionals in Nigeria and beyond, the department has consistently produced graduates who excel
            in various sectors of the technology industry.
          </p>

          <h3 className="font-serif text-2xl font-bold text-stone-900 mt-8 mb-3">Vision and Mission</h3>
          <p className="text-stone-700 leading-relaxed">
            The Department of Computer Science is committed to providing world-class education that equips students with
            the knowledge, skills, and values necessary to solve complex technological challenges. The department's mission
            is to develop competent, ethical, and innovative computer scientists who can adapt to the ever-evolving technology landscape.
          </p>

          <h3 className="font-serif text-2xl font-bold text-stone-900 mt-8 mb-3">Curriculum and Programs</h3>
          <p className="text-stone-700 leading-relaxed">
            The Computer Science program at Adeleke University offers a comprehensive curriculum that covers fundamental
            and advanced topics in computing. Students learn programming languages such as Python, Java, C++, and JavaScript,
            and gain hands-on experience with modern development frameworks and technologies.
          </p>
          <p className="text-stone-700 leading-relaxed">
            The curriculum includes courses in:
          </p>
          <ul className="list-disc list-inside text-stone-700 space-y-2 my-4">
            <li><strong>Core Computer Science:</strong> Data structures, algorithms, computer architecture, operating systems</li>
            <li><strong>Software Engineering:</strong> Software design patterns, web development, mobile app development</li>
            <li><strong>Artificial Intelligence & Machine Learning:</strong> Introduction to AI, machine learning algorithms, neural networks</li>
            <li><strong>Database Management:</strong> SQL, database design, distributed databases</li>
            <li><strong>Networking & Security:</strong> Computer networks, cybersecurity, ethical hacking</li>
            <li><strong>Web Technologies:</strong> Frontend and backend development, cloud computing, DevOps</li>
          </ul>

          <h3 className="font-serif text-2xl font-bold text-stone-900 mt-8 mb-3">Faculty and Resources</h3>
          <p className="text-stone-700 leading-relaxed">
            The department boasts a team of experienced and passionate faculty members, many of whom hold advanced degrees
            from prestigious institutions and have industry experience. The faculty are committed to mentoring students and
            conducting research that addresses real-world problems.
          </p>
          <p className="text-stone-700 leading-relaxed">
            Students have access to well-equipped computer labs, high-speed internet, modern programming IDEs, and a range
            of software tools and technologies. The university also provides access to online learning platforms and resources
            for continuous learning and professional development.
          </p>

          <h3 className="font-serif text-2xl font-bold text-stone-900 mt-8 mb-3">Student Projects and Innovations</h3>
          <p className="text-stone-700 leading-relaxed">
            The department encourages students to engage in practical projects and research. Students have worked on innovative
            solutions including mobile applications, web platforms, IoT systems, smart contracts on blockchain, and AI-powered
            applications. These projects not only enhance their learning experience but also showcase their creativity and
            problem-solving abilities.
          </p>

          <h3 className="font-serif text-2xl font-bold text-stone-900 mt-8 mb-3">Internships and Industry Connections</h3>
          <p className="text-stone-700 leading-relaxed">
            Adeleke University maintains strong connections with leading technology companies and organizations. Students have
            opportunities to participate in internships and work-study programs, gaining practical experience and building professional
            networks. These partnerships ensure that the curriculum remains relevant and that students are well-prepared for the job market.
          </p>

          <h3 className="font-serif text-2xl font-bold text-stone-900 mt-8 mb-3">Graduate Outcomes</h3>
          <p className="text-stone-700 leading-relaxed">
            Graduates of the Computer Science program at Adeleke University have gone on to successful careers in various sectors,
            including software development, data science, cybersecurity, AI/ML engineering, and entrepreneurship. Many have established
            themselves as leaders in their respective fields, contributing to innovation and digital transformation in Nigeria and globally.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mt-12 mb-4">Campus Life and Community</h2>
          <p className="text-stone-700 leading-relaxed">
            Beyond academics, Adeleke University provides a vibrant campus environment with numerous clubs, societies, and recreational
            facilities. The university hosts annual events, tech conferences, hackathons, and departmental competitions that foster
            collaboration, creativity, and leadership development among students.
          </p>
          <p className="text-stone-700 leading-relaxed">
            The student community is diverse, welcoming students from different parts of Nigeria and the African continent. This diversity
            enriches the learning experience and creates opportunities for cultural exchange and global perspectives.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mt-12 mb-4">My Journey at Adeleke University</h2>
          <p className="text-stone-700 leading-relaxed">
            My time at Adeleke University has been transformative. The Computer Science Department has equipped me with solid foundations
            in programming, software engineering, and emerging technologies. The supportive environment, coupled with hands-on learning
            opportunities, has enabled me to grow both academically and personally.
          </p>
          <p className="text-stone-700 leading-relaxed">
            Through various projects and collaborations, I have learned the importance of teamwork, innovation, and continuous learning.
            The knowledge and experiences gained at Adeleke University have prepared me well for the challenges and opportunities
            that lie ahead in the technology industry.
          </p>
        </section>

        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 mt-12">
          <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">Quick Facts</h3>
          <ul className="space-y-2 text-stone-700">
            <li><strong>Location:</strong> Ede, Osun State, Nigeria</li>
            <li><strong>Founded:</strong> 2011</li>
            <li><strong>Motto:</strong> To provide high-quality education based on Seventh-day Adventist philosophy</li>
            <li><strong>Type:</strong> Private University</li>
            <li><strong>Website:</strong> <a href="https://www.adelekeuniversity.edu.ng" className="text-orange-600 hover:underline">adelekeuniversity.edu.ng</a></li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
