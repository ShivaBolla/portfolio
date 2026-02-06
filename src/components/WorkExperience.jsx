'use client';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/constants';
import { Briefcase } from 'lucide-react';

const WorkExperience = () => {
    return (
        <section className="py-24 px-4 bg-black relative">
            <div className="absolute top-0 left-0 w-full h-full bg-charcoal/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-charcoal/10 via-black to-black pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-tiffany-blue mb-4">
                        Professional Journey
                    </h2>
                    <div className="w-24 h-1 bg-gamboge mx-auto rounded-full" />
                </motion.div>

                <div className="space-y-12">
                    {RESUME_DATA.workExperience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Connector (Desktop) */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rich-black border-2 border-blue-munsell z-10" />
                            </div>

                            <div className={`md:flex items-center justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Date */}
                                <div className={`md:w-1/2 mb-4 md:mb-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <span className="inline-block px-4 py-1 rounded-full bg-blue-munsell/10 text-blue-munsell text-sm font-mono border border-blue-munsell/20">
                                        {exp.year}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="md:w-1/2">
                                    <div className="glass-panel p-6 rounded-xl relative hover:bg-white/5 transition-colors group">
                                        {/* Mobile Timeline Dot */}
                                        <div className="md:hidden absolute -left-[37px] top-6 w-4 h-4 rounded-full bg-rich-black border-2 border-blue-munsell z-10" />
                                        <div className="md:hidden absolute -left-[30px] top-0 bottom-0 w-px bg-white/10" />

                                        <h3 className="text-2xl font-bold text-white group-hover:text-tiffany-blue transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-gamboge font-medium mb-3 flex items-center gap-2">
                                            <Briefcase size={16} /> {exp.company}
                                        </p>
                                        <p className="text-foreground/80 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WorkExperience;
