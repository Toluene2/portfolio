import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export default function Gallery() {
  // Placeholder data for gallery images
  const images = [
    { id: 1, alt: "A few of the Networking tools used in the Network department during my IT at Babcock University", src: "/network-tools.jpg", caption: "Networking tools" },
    { id: 2, alt: "Picture during a wedding party I attended", src: "/traditional-attire.jpg", caption: "Wedding Day" },
    { id: 3, alt: "Picture of me crimping a UTP cable with a RJ45 connector", src: "/working.jpg", caption: "Server-Rack" },
    { id: 4, alt: "Picture from Library Study Session at Adeleke University", src: "https://th.bing.com/th/id/OIP.OGjjQ5rWUJvPwoVwiQcqGAHaEK?w=257&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", caption: "Library Study" },
    { id: 5, alt: "Picture of Adeleke University Clock tower", src: "https://th.bing.com/th/id/OIP.yYeGH6BMZqaCwygEerP7MwHaD-?w=294&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", caption: "Clock Tower" },
    { id: 6, alt: "My Faculty, Faculty of Science, it contains 15 departments", src: "https://th.bing.com/th/id/OIP.2txrYbDCyBrKdhj3_eySUQHaHj?w=137&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", caption: "Faculty of Science" },
    { id: 7, alt: "Picture from SIWES Project Defense", src: "/blue-suit.jpg", caption: "SIWES Defense" },
    { id: 8, alt: "Class excursion to Osun Osogbo Sacred grove, at Osogbo. It was a memorable experience", src: "https://th.bing.com/th/id/OIP.mVI3zakJjODhzVjcD8GsKwHaE7?w=291&h=194&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", caption: "Osun Osogbo Grove" },
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
            <Camera className="w-6 h-6 text-orange-600" />
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-stone-900 mb-6">My Adeleke University Memories</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            A visual journey through my time on campus. From academic milestones to unforgettable moments with friends.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-stone-200 shadow-md hover:shadow-xl transition-all"
          >
            {/* TODO: Replace src with your actual image URL */}
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay with Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <p className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {image.caption}
              </p>
              <p className="text-white/80 text-sm mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center p-8 bg-stone-100 rounded-2xl border border-stone-200 border-dashed">
        <p className="text-stone-500 italic">
          More photos to be added soon! Check back later to see more of my adventures.
        </p>
      </div>
    </div>
  );
}
