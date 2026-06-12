import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const projectsData = [
    {
        title: 'Magizhchi-Garments – E-Commerce Web App',
        description: 'Built a full-stack e-commerce platform with product and category CRUD operations, shopping cart, checkout, and order management features. Developed the frontend using HTML, CSS, and Bootstrap, and implemented the backend using PHP with a MySQL database. Integrated session handling, user authentication, and optimized database structure for better performance.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
        tags: ['PHP', 'XAMMP', 'MySQL', 'Bootstrap', 'JavaScript'],
        category: 'Full Stack',
        github: 'https://github.com/lourdu11/Magizhchi_Garments',
        live: 'https://magizchigarments.great-site.net/',
    },
    {
        title: 'Grocery Billing System',
        description: 'Built a full-stack Grocery Billing System using PHP and MySQL with product management, invoice generation, and secure billing functionality, featuring a responsive frontend developed with HTML, CSS, and Bootstrap.',
        image: 'https://ik.imagekit.io/Lourdu/sample/grocy.jpeg',
        tags: ['PHP', 'Javascript', 'XAMMP', 'MySQL', 'Bootstrap'],
        category: 'Full Stack',
        github: 'https://github.com/lourdu11/Grocery_Billing_System',
        live: 'https://example.com',
    },
    {
        title: 'Color Palette Generator',
        description: 'Built a full-stack MERN color palette generator that enables users to create, customize, and save color combinations in real time. Implemented responsive UI design and efficient data management for a smooth and scalable user experience.',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop',
        tags: ['MongoDB', 'Express', 'React', 'Node.js', 'OpenAI'],
        category: 'Full Stack',
        github: 'https://github.com/lourdu11/COLER-PALETTE',
        live: 'https://example.com',
    },
    {
        title: 'CodeRise',
        description: 'Developed CodeRise, a professional web development agency platform offering website creation, SEO services, and digital solutions for startups and businesses in Trichy.',
        image: 'https://ik.imagekit.io/Lourdu/CodeRise/WhatsApp%20Image%202026-03-16%20at%2014.33.07%20(1).jpeg',
        tags: ['React', 'Web Development', 'SEO', 'Full Stack'],
        category: 'Full Stack',
        github: '',
        live: 'https://coderisetech.vercel.app/',
    },
    {
        title: 'Magizhchi Garments',
        description: 'Developed a responsive, user-friendly frontend for a garments business. Built with modern web technologies to ensure smooth navigation, fast loading times, and a visually appealing product showcase.',
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'Tailwind CSS', 'Frontend'],
        category: 'Client',
        github: '',
        live: 'https://magizhchigarments.vercel.app/',
    },
    {
        title: 'Sprouts Organizations',
        description: 'Designed and developed a complete web presence for Sprouts Organizations. Features a clean, nature-inspired UI to effectively communicate their mission, dynamic content sections, and an engaging user experience.',
        image: 'https://images.unsplash.com/photo-1466692476877-04f0709fd0bc?q=80&w=1000&auto=format&fit=crop',
        tags: ['Web Development', 'UI/UX', 'Responsive'],
        category: 'Client',
        github: '',
        live: 'https://sproutsorgs.com/',
    },
];

const ProjectCard = ({ project, index, onClick }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card group flex flex-col overflow-hidden p-0 cursor-pointer"
        onClick={onClick}
    >
        <div className="relative overflow-hidden h-48 sm:h-60">
            <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 flex space-x-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white dark:bg-dark-bg text-gray-900 dark:text-white flex items-center justify-center hover:text-primary-500 hover:scale-110 transition-all shadow-lg"
                        aria-label="GitHub Repository"
                    >
                        <FaGithub size={20} />
                    </a>
                )}
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white dark:bg-dark-bg text-gray-900 dark:text-white flex items-center justify-center hover:text-accent-500 hover:scale-110 transition-all shadow-lg"
                    aria-label="Live Demo"
                >
                    <FaExternalLinkAlt size={16} />
                </a>
            </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                    <span
                        key={tagIndex}
                        className="text-xs font-semibold px-2.5 py-1 rounded-md bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const categories = ['All', 'Frontend', 'Full Stack', 'Client'];

    const filteredProjects = activeTab === 'All' 
        ? projectsData 
        : projectsData.filter(project => project.category === activeTab);

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Some of the recent projects I've worked on. Hover over the cards to see the links.
                    </p>
                </motion.div>

                {/* Project Filters */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeTab === category 
                                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30' 
                                    : 'bg-white/50 dark:bg-dark-bg/50 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 border border-gray-200 dark:border-gray-800'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <ProjectCard 
                                key={index} 
                                project={project} 
                                index={index} 
                                onClick={() => setSelectedProject(project)}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-500 dark:text-gray-400 text-lg">More {activeTab} projects coming soon!</p>
                        </div>
                    )}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="https://github.com/lourdu11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-block"
                    >
                        View More on GitHub
                    </a>
                </motion.div>

                {/* Project Details Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative h-64 sm:h-96 w-full">
                                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                    <button 
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md z-10"
                                    >
                                        <FaTimes size={20} />
                                    </button>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{selectedProject.title}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary-500/80 text-white backdrop-blur-sm border border-white/20">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 sm:p-8">
                                    <div className="prose prose-lg dark:prose-invert max-w-none">
                                        <h4 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">Project Overview</h4>
                                        <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">{selectedProject.description}</p>
                                        
                                        <h4 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">Full Use Case & Implementation</h4>
                                        <div className="bg-primary-50 dark:bg-primary-900/10 p-6 rounded-xl border border-primary-100 dark:border-primary-900/30">
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                {selectedProject.useCase || "This project demonstrates the ability to architect, build, and deploy a full-scale web application addressing real-world requirements. Key features were implemented to ensure a robust, scalable, and user-friendly experience. Detailed technical implementation and specific problem-solving metrics will be updated shortly."}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                                        {selectedProject.live && (
                                            <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
                                                View Live Site <FaExternalLinkAlt size={14} />
                                            </a>
                                        )}
                                        {selectedProject.github && (
                                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
                                                View Source <FaGithub size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
