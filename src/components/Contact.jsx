import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Placeholder - integrate with EmailJS or backend
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setForm({
                name: "",
                email: "",
                message: "",
            });

            setTimeout(() => setSuccess(false), 3000);
        }, 1000);
    };

    return (
        <div className="flex flex-col gap-16">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center"
            >
                <p className={`${styles.sectionSubText} text-accent uppercase tracking-widest`}>
                    Get in touch
                </p>
                <h2 className={`${styles.sectionHeadText} text-black dark:text-white`}>
                    CONTACT.
                </h2>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column - Form */}
                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className="relative"
                >
                    {/* Glassmorphic Container */}
                    <div className="relative p-8 md:p-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800">
                        {/* Floating shapes background */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -z-10" />

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className='flex flex-col gap-6'
                        >
                            {/* Name Input */}
                            <label className='flex flex-col group'>
                                <span className='text-black dark:text-white font-bold mb-3 uppercase tracking-wider text-sm flex items-center gap-2'>
                                    Your Name
                                    <span className="text-accent">*</span>
                                </span>
                                <input
                                    type='text'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className='bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl py-4 px-6 placeholder:text-gray-400 text-black dark:text-white outline-none font-medium focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all'
                                />
                            </label>

                            {/* Email Input */}
                            <label className='flex flex-col group'>
                                <span className='text-black dark:text-white font-bold mb-3 uppercase tracking-wider text-sm flex items-center gap-2'>
                                    Your Email
                                    <span className="text-accent">*</span>
                                </span>
                                <input
                                    type='email'
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className='bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl py-4 px-6 placeholder:text-gray-400 text-black dark:text-white outline-none font-medium focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all'
                                />
                            </label>

                            {/* Message Input */}
                            <label className='flex flex-col group'>
                                <span className='text-black dark:text-white font-bold mb-3 uppercase tracking-wider text-sm flex items-center gap-2'>
                                    Your Message
                                    <span className="text-accent">*</span>
                                </span>
                                <textarea
                                    rows={6}
                                    name='message'
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    placeholder='Tell me about your project...'
                                    className='bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl py-4 px-6 placeholder:text-gray-400 text-black dark:text-white outline-none font-medium focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none'
                                />
                            </label>

                            {/* Submit Button */}
                            <motion.button
                                type='submit'
                                disabled={loading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className='bg-accent hover:bg-yellow-500 py-4 px-8 rounded-xl w-full text-black font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                            {/* Success Message */}
                            {success && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded-xl text-green-700 dark:text-green-300 font-semibold text-center"
                                >
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}
                        </form>
                    </div>
                </motion.div>

                {/* Right Column - Contact Info & Social */}
                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className="flex flex-col gap-8"
                >
                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        <motion.div
                            whileHover={{ x: 10 }}
                            className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 group"
                        >
                            <div className="p-3 bg-accent rounded-xl group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h4 className="font-bold text-black dark:text-white mb-1">Email</h4>
                                <a href="mailto:m.usidamen@gmail.com" className="text-secondary dark:text-gray-400 hover:text-accent transition-colors">
                                    m.usidamen@gmail.com
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 10 }}
                            className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 group"
                        >
                            <div className="p-3 bg-accent rounded-xl group-hover:scale-110 transition-transform">
                                <Phone className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h4 className="font-bold text-black dark:text-white mb-1">Phone</h4>
                                <a href="tel:+2349034448700" className="text-secondary dark:text-gray-400 hover:text-accent transition-colors">
                                    +234 903 444 8700
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ x: 10 }}
                            className="flex items-start gap-4 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 group"
                        >
                            <div className="p-3 bg-accent rounded-xl group-hover:scale-110 transition-transform">
                                <MapPin className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <h4 className="font-bold text-black dark:text-white mb-1">Location</h4>
                                <p className="text-secondary dark:text-gray-400">
                                    Abuja, Nigeria
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Social Media Links */}
                    <div className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border-2 border-accent/20">
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Connect With Me</h3>
                        <div className="flex gap-4">
                            <motion.a
                                href="https://github.com/Mheek-frosh"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800 group"
                            >
                                <Github className="w-6 h-6 text-black dark:text-white group-hover:text-accent transition-colors" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/michaelusidamen?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800 group"
                            >
                                <Linkedin className="w-6 h-6 text-black dark:text-white group-hover:text-accent transition-colors" />
                            </motion.a>
                            <motion.a
                                href="https://www.tiktok.com/@mheek_frosh?_r=1&_t=ZS-93YxuZamMr6"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-800 group"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 fill-black dark:fill-white group-hover:fill-[#00f2ea] transition-colors"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.03-2.86-.31-4.13-1.03-2.28-1.3-3.06-4.04-2.35-6.44.25-.85.71-1.64 1.31-2.29 1.54-1.68 4.12-2.31 6.2-1.49v4.14c-.91-.34-1.92-.17-2.73.39-.51.36-.81.93-.88 1.54-.15.91.34 1.83 1.1 2.29.47.28 1.05.35 1.6.32 1.39-.08 2.31-1.26 2.37-2.58.05-3.64.02-7.29.03-10.93-1.76-.01-3.52 0-5.28 0V.02z" />
                                </svg>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
