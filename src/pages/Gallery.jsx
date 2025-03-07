import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  
  const getButtonClass = useCallback((buttonFilter) => {
    const baseClass = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden';
    const isActive = filter === buttonFilter;
    return `${baseClass} ${isActive 
      ? 'bg-primary text-white shadow-lg transform scale-105'
      : 'bg-white text-dark-brown hover:bg-primary/10 hover:text-primary hover:shadow-md'}`;
  }, [filter]);

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Renovation",
      category: "residential",
      image: "/images/kitchen-renovation.jpg",
      description: "Complete kitchen remodel with custom cabinets and island"
    },
    {
      id: 2,
      title: "Commercial Office Build-Out",
      category: "commercial",
      image: "/images/office-buildout.jpg",
      description: "Modern office space with open floor plan"
    },
    {
      id: 3,
      title: "Custom Home Build",
      category: "residential",
      image: "/images/custom-home.jpg",
      description: "5,000 sq ft luxury custom home"
    },
    {
      id: 4,
      title: "Restaurant Renovation",
      category: "commercial",
      image: "/images/restaurant.jpg",
      description: "Full-service restaurant renovation"
    },
    {
      id: 5,
      title: "Master Bath Remodel",
      category: "residential",
      image: "/images/master-bath.jpg",
      description: "Luxury master bathroom renovation"
    },
    {
      id: 6,
      title: "Retail Store Design",
      category: "commercial",
      image: "/images/retail-store.jpg",
      description: "Modern retail space with custom displays"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-dark-brown text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="container relative">
          <h1 className="text-5xl font-bold mb-6">Project Gallery</h1>
          <p className="text-xl max-w-3xl">
            Explore our portfolio of completed projects, showcasing our commitment
            to quality and attention to detail.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-cream">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={getButtonClass('all')}
            >
              <span className="relative z-10">All Projects</span>
            </button>
            <button
              onClick={() => setFilter('residential')}
              className={getButtonClass('residential')}
            >
              <span className="relative z-10">Residential</span>
            </button>
            <button
              onClick={() => setFilter('commercial')}
              className={getButtonClass('commercial')}
            >
              <span className="relative z-10">Commercial</span>
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section pt-8 pb-16">
        <div className="container">
          <p className="text-center text-gray-600 mb-12">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
          </p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/800x600/34241d/f8f6e1.jpg?text=' + encodeURIComponent(project.title);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-200 mb-4">{project.description}</p>
                      <span className="inline-block bg-primary px-3 py-1 rounded-full text-sm text-white">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you create your dream space with our expert construction services.
          </p>
          <Link
            to="/consultation"
            className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
