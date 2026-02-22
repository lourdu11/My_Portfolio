import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground'; // We will create this
import { Link } from 'react-scroll';


const Hero = ({ theme }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Dynamic Particle Background */}
            <ParticlesBackground theme={theme} />

            <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="w-full md:w-3/5 text-center md:text-left mt-10 md:mt-0 xl:pr-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400 mb-2">
                            This is
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                            Lourdu Xavier A
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-[40px] md:h-[48px]"
                    >
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                2000,
                                'React Developer',
                                2000,
                                'Web Developer',
                                2000,
                                'BCA Student',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-gradient"
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto md:mx-0"
                    >
                        I build highly interactive, modern, and responsive web applications.
                        Passionate about learning new technologies and creating sleek user experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10"
                    >
                        <a
  href="/Lourdu_Xavier_A.pdf"
  download="Lourdu_Xavier_A.pdf"
  className="btn-primary w-full sm:w-auto text-center"
>
                            Download Resume
                        </a>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="btn-secondary w-full sm:w-auto text-center cursor-pointer"
                        >
                            Contact Me
                        </Link>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex items-center justify-center md:justify-start space-x-5"
                    >
                        <a href="https://github.com/lourdu11" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transform hover:scale-110 transition-all duration-300">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://linkedin.com/in/lourdu11" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transform hover:scale-110 transition-all duration-300">
                            <FaLinkedin size={28} />
                        </a>
                        <a 
  href="https://www.instagram.com/_l_o_u_r_d_u_/" 
  target="_blank" 
  rel="noreferrer"
  className="text-gray-600 dark:text-gray-400 hover:text-pink-500 transform hover:scale-110 transition-all duration-300"
>
  <FaInstagram size={28} />
</a>
                    </motion.div>
                </div>

                {/* Image/Avatar */}
                <div className="w-full md:w-2/5 mt-16 md:mt-0 flex justify-center">
                    <motion.div
                        className="relative w-72 h-72 md:w-96 md:h-96"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-accent-500 rounded-full animate-blob mix-blend-multiply opacity-70 blur-xl"></div>

                        <motion.div
                            className="relative rounded-full w-full h-full border-4 border-white dark:border-dark-card overflow-hidden glass shadow-2xl flex justify-center items-center bg-gray-100 dark:bg-gray-800"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        >
                            {/* Fallback image if user doesn't have one */}
                           {/*<div className="text-9xl font-bold text-gray-300 dark:text-gray-600">JD</div>*/} 
                            {<img src="https://ik.imagekit.io/Lourdu/sample/lourdu.jpeg" alt="Profile" className="object-cover w-full h-full" /> }
                        </motion.div>

                        {/* Floating Badges */}
                        <motion.div
                            className="absolute -right-4 top-10 glass px-4 py-2 rounded-xl text-primary-600 dark:text-primary-400 font-bold shadow-lg"
                            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 3, delay: 0.5, ease: "easeInOut" }}
                        >
                            {/*React JS*/}
                        </motion.div>
                        <motion.div
                            className="absolute -left-6 bottom-20 glass px-4 py-2 rounded-xl text-accent-500 dark:text-accent-400 font-bold shadow-lg"
                            animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                        >
                            {/*Tailwind*/}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-sm text-gray-500 mb-2 font-medium tracking-widest uppercase">Scroll</span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-gray-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
