'use client';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/constants';
import { GraduationCap, Award, BadgeCheck } from 'lucide-react';

const Experience = () => {
    return (
        <section className="py-24 px-4 bg-black relative">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">

                {/* Left Column: Education & Experience */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <GraduationCap className="text-gamboge" /> Education & Training
                    </h2>
                    <div className="space-y-12 border-l border-white/10 pl-8 ml-3 relative">

                        {/* Experience (Training) */}
                        {RESUME_DATA.experience.map((exp, idx) => (
                            <div key={`exp-${idx}`} className="relative">
                                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-blue-munsell border-4 border-rich-black" />
                                <h3 className="text-xl font-bold text-tiffany-blue">{exp.role}</h3>
                                <p className="text-white/60 mb-2">{exp.company}</p>
                                <p className="text-foreground/80 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        ))}

                        {/* Education */}
                        {RESUME_DATA.education.map((edu, idx) => (
                            <div key={`edu-${idx}`} className="relative">
                                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-gamboge border-4 border-rich-black" />
                                <h3 className="text-xl font-bold text-tiffany-blue">{edu.degree}</h3>
                                <p className="text-white/60">{edu.institution}</p>
                                <div className="flex items-center gap-4 mt-1 text-sm text-foreground/50">
                                    <span>{edu.year}</span>
                                    <span>•</span>
                                    <span className="text-gamboge">{edu.score}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Certifications & Achievements */}
                <div className="space-y-16">

                    {/* Certifications */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <BadgeCheck className="text-blue-munsell" /> Certifications
                        </h2>
                        <ul className="space-y-4">
                            {RESUME_DATA.certifications.map((cert, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-4 glass-panel rounded-lg flex items-center gap-4 hover:bg-white/5 transition-colors"
                                >
                                    <span className="w-2 h-2 rounded-full bg-blue-munsell shrink-0" />
                                    <span className="text-foreground/90">{cert}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                            <Award className="text-ruby-red" /> Achievements
                        </h2>
                        <ul className="space-y-4">
                            {RESUME_DATA.achievements.map((ach, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-4 glass-panel rounded-lg flex items-start gap-4 hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-gamboge mt-1">★</span>
                                    <span className="text-foreground/90">{ach}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Experience;
