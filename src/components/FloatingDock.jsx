'use client';
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Home, Briefcase, Code, User, FileText, Github, Linkedin, Cpu, GraduationCap } from "lucide-react";
import Link from "next/link";
import { RESUME_DATA } from "@/constants";

const FloatingDock = () => {
    let mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.clientX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 mx-auto flex h-16 items-end gap-4 rounded-2xl bg-midnight-green/30 px-4 pb-3 backdrop-blur-md border border-white/10 z-50 shadow-2xl"
        >
            <Icon icon={<Home size={20} />} href="#home" mouseX={mouseX} label="Home" />
            <Icon icon={<User size={20} />} href="#about" mouseX={mouseX} label="About" />
            <Icon icon={<Briefcase size={20} />} href="#work-experience" mouseX={mouseX} label="Work" />
            <Icon icon={<Code size={20} />} href="#projects" mouseX={mouseX} label="Projects" />
            <Icon icon={<Cpu size={20} />} href="#skills" mouseX={mouseX} label="Skills" />
            <Icon icon={<GraduationCap size={20} />} href="#experience" mouseX={mouseX} label="Education" />

            {/* Divider */}
            <div className="h-8 w-px bg-white/10 mx-1" />

            <Icon icon={<Github size={20} />} href={RESUME_DATA.personalInfo.github} mouseX={mouseX} label="GitHub" external standout />
            <Icon icon={<Linkedin size={20} />} href={RESUME_DATA.personalInfo.linkedin} mouseX={mouseX} label="LinkedIn" external standout />

            <Icon icon={<FileText size={20} />} href={RESUME_DATA.personalInfo.resumeLink} mouseX={mouseX} label="Resume" external />
        </motion.div>
    );
};

function Icon({ mouseX, icon, href, label, external }) {
    let ref = useRef(null);

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    const Component = external ? 'a' : 'a';

    return (
        <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
            <motion.div
                ref={ref}
                style={{ width }}
                className={`aspect-square flex items-center justify-center rounded-full border shadow-inner transition-colors duration-200 group relative
                    ${external && label !== 'Resume' ? 'bg-blue-munsell/20 border-blue-munsell/50 hover:bg-blue-munsell text-tiffany-blue hover:text-rich-black hover:shadow-[0_0_20px_rgba(10,147,150,0.5)]'
                        : 'bg-midnight-green/80 border-white/5 hover:bg-blue-munsell/80 text-white/80 hover:text-white'}`}
            >
                <span className="transition-colors">
                    {icon}
                </span>

                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-rich-black text-tiffany-blue text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
                    {label}
                </span>
            </motion.div>
        </a>
    );
}

export default FloatingDock;
