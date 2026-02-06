'use client';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/constants';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Skills = () => {
    return (
        <section className="py-24 px-4 bg-black relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dark-red/10 rounded-full blur-[100px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16 border-l-4 border-gamboge pl-6"
                >
                    Technical Skills
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {RESUME_DATA.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group relative p-6 glass-panel rounded-xl hover:bg-midnight-green/40 transition-colors cursor-default"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-munsell/10 rounded-lg text-blue-munsell group-hover:text-tiffany-blue group-hover:bg-blue-munsell/20 transition-all">
                                    <skill.icon size={24} />
                                </div>
                                <h3 className="text-lg font-medium text-foreground/90 group-hover:text-white">
                                    {skill.name}
                                </h3>
                            </div>

                            {/* Hover glow */}
                            <div className="absolute inset-0 border border-blue-munsell/0 rounded-xl group-hover:border-blue-munsell/30 transition-all duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
