'use client';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/constants';
import { User, Mail, MapPin, Phone } from 'lucide-react';

const About = () => {
    return (
        <section className="py-24 px-4 bg-black relative flex items-center justify-center">
            <div className="max-w-4xl mx-auto relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden"
                >
                    {/* Gradient Accent */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-700/20 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-blue-munsell/10 rounded-xl text-blue-munsell">
                                <User size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                About Me
                            </h2>
                        </div>

                        <h3 className="text-xl md:text-2xl text-tiffany-blue font-medium mb-6">
                            {RESUME_DATA.personalInfo.title}
                        </h3>

                        <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-10 font-light">
                            {RESUME_DATA.personalInfo.about}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8">
                            <div className="flex items-center gap-3 text-foreground/70 group hover:text-blue-munsell transition-colors">
                                <Mail className="w-5 h-5 text-gamboge" />
                                <a href={`mailto:${RESUME_DATA.personalInfo.email}`} className="text-sm hover:underline truncate">
                                    {RESUME_DATA.personalInfo.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-foreground/70 group hover:text-blue-munsell transition-colors">
                                <Phone className="w-5 h-5 text-gamboge" />
                                <span className="text-sm">
                                    {RESUME_DATA.personalInfo.phone}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-foreground/70 group hover:text-blue-munsell transition-colors">
                                <MapPin className="w-5 h-5 text-gamboge" />
                                <span className="text-sm">
                                    {RESUME_DATA.personalInfo.location}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
