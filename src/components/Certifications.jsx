import { motion } from 'framer-motion';
import { FaAward, FaCertificate } from 'react-icons/fa';

const certificationsData = [
    {
        title: 'AI Trainer & Curriculum Developer',
        issuer: 'Sprouts Organization (MSME)',
        date: 'Jan–Feb 2026',
        description: [
            'Conducted "AI for ALL – 2026" National Level Student Workshop as AI Trainer for 2 days.',
            'Designed end-to-end AI/ML curriculum covering Supervised & Unsupervised Learning, classification, regression, and hands-on WEKA AI sessions.',
        ],
        icon: <FaAward />,
    },
    {
        title: 'Hackathon & Industry Visit – Full Stack Web Suite',
        issuer: 'VDart Academy',
        date: 'Nov 2025',
        description: [
            'Strengthened full-stack development skills through an industry-level hackathon focused on real-world web practices.',
        ],
        icon: <FaCertificate />,
    },
    {
        title: 'Typewriting English (Senior & Junior Grade)',
        issuer: 'Govt. of Tamil Nadu, Dept. of Technical Education',
        date: '2019 - 2020',
        description: [
            'Senior Grade – First Class (45 WPM) – 2020',
            'Junior Grade – First Class with Distinction (30 WPM) – 2019',
        ],
        icon: <FaCertificate />,
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Achievements & <span className="text-gradient">Certifications</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificationsData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300 overflow-hidden p-0"
                        >
                            {item.image && (
                                <div className="w-full h-48 overflow-hidden border-b border-gray-200 dark:border-gray-700">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                                    />
                                </div>
                            )}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 text-2xl group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                                
                                <div className="flex-grow">
                                    <div className="text-accent-500 font-medium text-sm mb-1">{item.issuer}</div>
                                    <div className="text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-wider mb-4">{item.date}</div>
                                    
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

export default Certifications;
