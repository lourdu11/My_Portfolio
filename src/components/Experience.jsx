import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaCubes } from 'react-icons/fa';

const experienceData = [
    {
        role: 'MERN Stack Developer Intern (Remote)',
        company: 'NoviTech R&D Private Limited',
        duration: 'Dec 2025 - Mar 2026',
        description: [
            'Completed three-month remote internship in MERN Stack development.',
        'Built full-stack web applications using MongoDB, Express.js, React, and Node.js.',
        'Developed RESTful APIs and integrated frontend with backend services.',
        'Implemented authentication, database operations, and basic deployment practices.',
        ],
        icon: <FaServer />,
    },
    {
        role: 'AI Curriculum Developer & Trainer',
        company: 'Sprouts Orgs, Trichy',
        duration: 'Jan 2026',
        description: [
            'Designed and developed complete Machine Learning curriculum for National Level “AI for ALL” workshop.',
        'Covered supervised and unsupervised learning, classification, regression, and clustering algorithms.',
        'Conducted hands-on training sessions using WEKA AI for practical ML implementation.',
        'Led technical sessions and simplified AI concepts for students from diverse academic backgrounds.',
        ],
        icon: <FaLaptopCode />,
    },
    {
        role: 'Hackathon Participant (Full-Stack Web Suite)',
        company: 'VDart Academy, Trichy',
        duration: 'Nov 2025',
        description: [
            'Participated in a hands-on One-Day Industry Visit and Full-Stack Web Hackathon.',
        'Gained real-time exposure to industry-level full-stack development practices.',
        'Strengthened core skills in frontend and backend integration.',
        'Collaborated with peers to build and present a working web solution.',
        ],
        icon: <FaCubes />,
    },
    {
        role: 'Web Development Trainee (Inplant Training)',
        company: 'CodeBind Technologies, Trichy',
        duration: 'May 2025',
        description: [
            'Completed inplant training focused on Web Development fundamentals.',
        'Worked on front-end development using HTML, CSS, and JavaScript.',
        'Gained hands-on experience in responsive design and basic backend integration.',
        'Improved practical knowledge of real-world web development workflows.',
        ],
        icon: <FaLaptopCode />,
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative bg-gray-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        My <span className="text-gradient">Experience</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 sm:pl-32 py-6 group"
                        >
                            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 dark:before:bg-gray-700 sm:before:ml-[5.5rem] before:self-start before:-translate-x-1/2 before:translate-y-8">
                                <div className="absolute left-2 sm:left-0 w-10 h-10 rounded-full flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border-4 border-white dark:border-dark-bg sm:ml-[5.5rem] -translate-x-1/2 -translate-y-1 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300 shadow-md">
                                    {item.icon}
                                </div>

                                <div className="sm:absolute sm:left-0 sm:w-20 text-xs font-bold text-gray-500 dark:text-gray-400 sm:text-right hidden sm:block uppercase tracking-wider mt-1">
                                    <div className="whitespace-pre-line leading-tight">
                                        {item.duration.replace(' - ', '\n')}
                                    </div>
                                </div>

                                <div className="glass-card w-full mt-4 sm:mt-0 p-6 md:p-8 relative">
                                    <div className="sm:hidden text-xs font-bold text-primary-500 mb-2 uppercase tracking-wider">
                                        {item.duration}
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.role}</h3>
                                        <span className="text-md font-medium text-accent-500 sm:ml-4">{item.company}</span>
                                    </div>

                                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 text-sm leading-relaxed">
                                        {item.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
