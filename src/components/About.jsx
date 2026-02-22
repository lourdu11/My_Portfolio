import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

const About = () => {
    const education = [
        {
            year: '2023 - 2026',
            degree: 'Bachelor of Computer Applications (BCA)',
            institution: 'St. Joseph\'s College Trichy',
            description: '"MERN Stack developer with strong foundation in modern web technologies. Grade: 7.58 CGPA (Current)',
        },
        {
            year: '2022 - 2023',
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Sir Sivaswami Balavidhyalaya Matriculation Higher Secondary School',
            description: 'Science Stream with Computer Science focus. Grade: 61%',
        },
          {
            year: '2020 - 2021',
            degree: 'Secondary School Leaving Certificate (SSLC)',
            institution: 'Sir Sivaswami Balavidhyalaya Matriculation Higher Secondary School',
            description: 'Completed SSLC with strong academic performance and foundational knowledge in Mathematics and Science. Grade: All Pass',
        },
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Bio Cards */}
                    <div className="w-full lg:w-1/2">
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed"
                        >
                            I am a passionate computer science student with a strong foundation in modern web technologies.
                            My journey in tech started with a curiosity about how things work on the internet, which quickly
                            escalated into a deep dive into frontend and full-stack development. I enjoy building pixel-perfect,
                            engaging, and accessible digital experiences.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: <FaBriefcase />, title: 'Experience', desc: '3+ Years coding' },
                                { icon: <FaGraduationCap />, title: 'Education', desc: 'BCA ' },
                                { icon: <FaAward />, title: 'Projects', desc: '10+ Completed' },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-card flex flex-col items-center text-center group"
                                >
                                    <div className="text-primary-500 text-3xl mb-4 group-hover:scale-110 group-hover:text-accent-500 transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Timeline */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <FaGraduationCap className="text-primary-500 mr-3" />
                            Education Timeline
                        </h3>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-dark-bg bg-primary-500 text-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-accent-500 transition-colors z-10">
                                        <FaGraduationCap size={16} />
                                    </div>

                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card ml-4 md:ml-0 md:group-odd:text-right p-5">
                                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-2 md:group-odd:flex-row-reverse">
                                            <span className="text-primary-600 dark:text-primary-400 font-bold bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full text-xs mb-2 md:mb-0">
                                                {item.year}
                                            </span>
                                            <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                                                {item.degree}
                                            </h4>
                                        </div>
                                        <div className="text-gray-700 dark:text-gray-300 font-medium mb-2 md:group-odd:text-right">
                                            {item.institution}
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed md:group-odd:text-right">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
