import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-dark-border py-12">
            <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="text-3xl font-bold cursor-pointer text-gradient mb-6"
                >
                    Portfolio
                </Link>

                <div className="flex space-x-6 mb-8">
                    <a
                        href="https://github.com/lourdu11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-card flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:text-primary-400 dark:hover:bg-primary-900/30 transition-all duration-300"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://linkedin.com/in/lourdu11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-card flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:text-primary-400 dark:hover:bg-primary-900/30 transition-all duration-300"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/_l_o_u_r_d_u_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-card flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:text-primary-400 dark:hover:bg-primary-900/30 transition-all duration-300"
                    >
                        <FaInstagram size={20} />
                    </a>
                    <a
                        href="mailto:xavierbritto16@gmail.com"
                        className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-card flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:text-primary-400 dark:hover:bg-primary-900/30 transition-all duration-300"
                    >
                        <FaEnvelope size={20} />
                    </a>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
                    &copy; {currentYear} Lourdu Xavier A. All rights reserved. <br className="md:hidden" />
                   
                </p>

                <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="mt-8 p-3 rounded-full bg-primary-100 dark:bg-dark-card text-primary-600 dark:text-primary-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all duration-300 cursor-pointer animate-bounce"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                    </svg>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
