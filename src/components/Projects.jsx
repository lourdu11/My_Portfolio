import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
    {
        title: 'Magizhchi-Garments – E-Commerce Web App',
        description: '  Built a full-stack e-commerce platform with product and category CRUD operations, shopping cart, checkout, and order management features. Developed the frontend using HTML, CSS, and Bootstrap, and implemented the backend using PHP with a MySQL database. Integrated session handling, user authentication, and optimized database structure for better performance.”',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
        tags: ['PHP', 'XAMMP', 'MySQL', 'Bootstrap', 'javascripta'],
        github: 'https://github.com/lourdu11/Magizhchi_Garments',
        live: 'https://magizchigarments.great-site.net/',
    },
    {
        title: 'Grocery Billing System',
        description: 'Built a full-stack Grocery Billing System using PHP and MySQL with product management, invoice generation, and secure billing functionality, featuring a responsive frontend developed with HTML, CSS, and Bootstrap.',
        image: 'https://ik.imagekit.io/Lourdu/sample/grocy.jpeg',
        tags: ['PHP', 'Javascript', 'XAMMP', 'MySQL', 'Bootstrap'],
        github: 'https://github.com/lourdu11/Grocery_Billing_System',
        live: 'https://example.com',
    },
    {
        title: 'Color Palette Generator',
        description: 'Built a full-stack MERN color palette generator that enables users to create, customize, and save color combinations in real time. Implemented responsive UI design and efficient data management for a smooth and scalable user experience.',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop',
        tags: ['MongoDB', 'Express', 'React', 'Node.js', 'OpenAI'],
        github: 'https://github.com/lourdu11/COLER-PALETTE',
        live: 'https://example.com',
    },

];

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card group flex flex-col overflow-hidden p-0"
    >
        <div className="relative overflow-hidden h-48 sm:h-60">
            <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 flex space-x-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white dark:bg-dark-bg text-gray-900 dark:text-white flex items-center justify-center hover:text-primary-500 hover:scale-110 transition-all shadow-lg"
                    aria-label="GitHub Repository"
                >
                    <FaGithub size={20} />
                </a>
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
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Some of the recent projects I've worked on. Hover over the cards to see the links.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-block"
                    >
                        View More on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
