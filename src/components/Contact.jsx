import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset success message
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (err) {
            console.error('Error submitting form:', err);
            setError('Failed to send message. Please try again later.');
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Have a project in mind or just want to say hi? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="w-full lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card h-full flex flex-col justify-center space-y-8"
                        >
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 text-xl mr-6">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-400">xavierbritto16@gmail.com</p>
                                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">I usually reply within 24 hours.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 text-xl mr-6">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Phone</h4>
                                    <p className="text-gray-600 dark:text-gray-400">+91 9344881275</p>
                                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">Sat-Sun from 9am to 9pm.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 text-xl mr-6">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Thanjavur | Trichy </p>
                                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">Available for remote work.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full lg:w-2/3">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass p-8 md:p-10 rounded-2xl relative overflow-hidden"
                        >
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

                            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/50 dark:bg-dark-bg/50 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all text-gray-900 dark:text-white"
                                            placeholder="Lourdu Xavier"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/50 dark:bg-dark-bg/50 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all text-gray-900 dark:text-white"
                                            placeholder="xavierbritto16@gmail.com"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/50 dark:bg-dark-bg/50 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all text-gray-900 dark:text-white"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 bg-white/50 dark:bg-dark-bg/50 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all text-gray-900 dark:text-white resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                {error && (
                                    <div className="text-red-500 text-sm mt-2 text-center">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full flex justify-center items-center py-4 mt-4 disabled:opacity-70"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : isSubmitted ? (
                                        <span className="flex items-center text-green-300">
                                            Message Sent Successfully!
                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            Send Message
                                            <FaPaperPlane className="ml-2" />
                                        </span>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
