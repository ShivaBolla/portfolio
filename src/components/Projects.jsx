'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RESUME_DATA } from '@/constants';
import { Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    const projects = RESUME_DATA.projects;
    const totalPanels = projects.length + 1; // 1 for the title panel

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: `-${(totalPanels - 1) * 100}vw`,
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: `+=${totalPanels * 1000}`, // Adjust scroll length based on content
                    scrub: 0.6,
                    pin: true,
                },
            }
        );

        return () => {
            pin.kill();
        };
    }, [totalPanels]);

    return (
        <section className="overflow-hidden bg-black" ref={triggerRef}>
            <div
                ref={sectionRef}
                className="flex h-screen flex-row relative"
                style={{ width: `${totalPanels * 100}vw` }}
            >

                {/* Panel 1: Title */}
                <div className="flex h-screen w-screen flex-col items-center justify-center bg-black relative border-r border-white/5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,147,150,0.1),transparent)]" />
                    <h2 className="text-9xl font-bold opacity-10 text-nowrap select-none absolute">
                        SELECTED WORKS
                    </h2>
                    <h2 className="text-6xl md:text-8xl font-bold text-tiffany-blue z-10 relative">
                        PROJECTS
                    </h2>
                    <p className="max-w-md text-center mt-6 text-foreground/60 z-10">
                        A showcase of technical implementations and real-world applications.
                        <br />
                        <span className="text-sm text-gamboge mt-2 block">Scroll Down &rarr; Right</span>
                    </p>
                </div>

                {/* Project Panels */}
                {projects.map((project, index) => (
                    <div key={index} className="flex h-screen w-screen items-center justify-center bg-black relative border-r border-white/5 p-8">
                        <ProjectCard project={project} index={index + 1} />
                    </div>
                ))}

            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    return (
        <div className="w-full max-w-4xl h-[70vh] glass-panel rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 relative overflow-hidden group hover:border-blue-munsell/50 transition-colors">

            {/* Decoration */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-munsell/20 blur-[60px] rounded-full group-hover:bg-blue-munsell/30 transition-all" />

            <div className="flex flex-col justify-between flex-1 relative z-10">
                <div>
                    <span className="text-9xl font-bold text-white/5 absolute -top-10 -left-10 select-none">
                        0{index}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold text-tiffany-blue mb-2 mt-4">
                        {project.title}
                    </h3>
                    <p className="text-lg text-gamboge mb-6 font-mono">
                        {project.technologies.join(" / ")}
                    </p>
                    <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                        {project.description}
                    </p>
                    <ul className="space-y-2 mb-8 text-foreground/60 list-disc pl-5">
                        {project.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                        ))}
                    </ul>
                </div>

                <div className="flex gap-4 mt-auto">
                    <button className="flex items-center gap-2 px-6 py-3 bg-midnight-green text-white rounded-lg hover:bg-blue-munsell transition-colors">
                        <Github size={20} /> View Code
                    </button>
                    {/* Placeholder for live link if it existed */}
                </div>
            </div>

            {/* Visual Side (Abstract Representation since no images) */}
            <div className="flex-1 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center p-6 relative overflow-hidden">
                {/* Abstract visual elements */}
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                <div className="w-3/4 h-3/4 border border-blue-munsell/30 rounded-lg flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500">
                    <div className="text-center">
                        <div className="text-6xl mb-4 opacity-50">
                            {index === 1 ? '✋' : '🏛️'}
                        </div>
                        <div className="font-mono text-xs text-blue-munsell">
                            // {project.title.replace(/\s+/g, '_').toLowerCase()}.jsx
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
