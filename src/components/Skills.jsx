import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiFirebase, SiPython,SiPhp,SiXampp,SiExpress,SiMongodb,SiPostman,SiVercel,SiBootstrap } from 'react-icons/si';
const skillsData = [
    {
        category: "Frontend",
        skills: [
            { name: 'React JS', icon: <FaReact className="text-[#61DAFB]" />, level: 70 },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38B2AC]" />, level: 60 },
            {name: 'Bootstrap', icon: <SiBootstrap className="text-[#563D7C]" />, level: 60},
            { name: 'JavaScript (ES6+)', icon: <FaJs className="text-[#F7DF1E]" />, level: 80 },
            { name: 'HTML5/CSS3', icon: <FaHtml5 className="text-[#E34F26]" />, level: 95 },
        ]
    },
    {
        category: "Backend & DB",
        skills: [
            { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, level: 40 },
            { name: 'Express.js', icon: <SiExpress className="text-black dark:text-white" />, level: 40 },
            { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 85 },
            { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" />, level: 80 },
            { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, level: 75 },
            { name: 'PHP', icon: <SiPhp className="text-[#777BB4]" />, level: 70 },
        ]
    },
    {
        category: "Tools & Others",
        skills: [
            { name: 'Git / GitHub', icon: <FaGitAlt className="text-[#F05032]" />, level: 85 },
            { name: 'XAMPP', icon: <SiXampp className="text-[#FB7A24]" />, level: 70 },
            { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" />, level: 65 },
            { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" />, level: 55 },
            
           
         
            // other tools if needed
        ]
    }
];

const SkillBar = ({ name, icon, level, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="mb-6"
    >
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-3">
                <div className="text-2xl">{icon}</div>
                <span className="font-medium text-gray-800 dark:text-gray-200">{name}</span>
            </div>
            <span className="text-sm font-bold text-gray-500">{level}%</span>
        </div>
        <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full relative"
            >
                <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 blur-sm"></div>
            </motion.div>
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative bg-gray-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        My <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-accent-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Technologies, frameworks, and tools I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, catIdx) => (
                        <motion.div
                            key={catIdx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIdx * 0.2 }}
                            className="glass-card flex flex-col h-full"
                        >
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
                                {category.category}
                            </h3>
                            <div className="flex-grow">
                                {category.skills.map((skill, index) => (
                                    <SkillBar
                                        key={index}
                                        name={skill.name}
                                        icon={skill.icon}
                                        level={skill.level}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating tech stack logos for background effect */}
                <div className="absolute top-1/2 left-10 text-9xl text-gray-300 dark:text-gray-800 opacity-20 pointer-events-none blur-sm animate-pulse">
                    <FaReact />
                </div>
                <div className="absolute bottom-20 right-10 text-9xl text-gray-300 dark:text-gray-800 opacity-20 pointer-events-none blur-sm animate-pulse animation-delay-2000">
                    <SiTailwindcss />
                </div>
            </div>
        </section>
    );
};

export default Skills;
