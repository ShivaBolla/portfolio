'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RESUME_DATA } from '@/constants';
import { Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    const projects = RESUME_DATA.projects;
    const totalPanels = projects.length + 1;

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            { translateX: 0 },
            {
                translateX: `-${(totalPanels - 1) * 100}vw`,
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: `+=${totalPanels * 1000}`,
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => { pin.kill(); };
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

/* ── Small helper label component ─────────────────────── */
const SectionLabel = ({ children }) => (
    <p className="text-[10px] font-bold text-gamboge uppercase tracking-[0.15em] mb-2 flex items-center gap-2">
        <span className="block w-3 h-px bg-gamboge/60 flex-shrink-0" />
        {children}
    </p>
);

/* ── Main project card ─────────────────────────────────── */
const ProjectCard = ({ project, index }) => {
    const hasStructured = !!project.workflow;

    return (
        <div className="w-full max-w-5xl h-[78vh] glass-panel rounded-3xl flex flex-col md:flex-row relative overflow-hidden group hover:border-blue-munsell/50 transition-colors">

            {/* Glow decoration */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-munsell/20 blur-[70px] rounded-full group-hover:bg-blue-munsell/30 transition-all pointer-events-none" />

            {/* ── LEFT: scrollable content area ── */}
            <div className="flex flex-col flex-1 relative z-10 overflow-y-auto p-8 md:p-10 scrollbar-thin scrollbar-thumb-blue-munsell/20">

                {/* Watermark index */}
                <span className="text-[6rem] font-bold text-white/[0.04] absolute -top-4 -left-2 select-none leading-none pointer-events-none">
                    0{index}
                </span>

                {/* Project title */}
                <h3 className="text-2xl md:text-3xl font-bold text-tiffany-blue mb-2 mt-1 leading-tight">
                    {project.title}
                </h3>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((t, i) => (
                        <span
                            key={i}
                            className="px-2 py-0.5 text-[10px] rounded-full border border-blue-munsell/30 text-blue-munsell/80 font-mono"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed mb-5">
                    {project.description}
                </p>

                {/* ── STRUCTURED sections (Sign Language project) ── */}
                {hasStructured ? (
                    <div className="space-y-5 text-sm">

                        {/* Workflow */}
                        <div>
                            <SectionLabel>Workflow</SectionLabel>
                            <div className="space-y-2.5 pl-1">
                                {project.workflow.map((w, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <span className="mt-0.5 w-5 h-5 rounded-full bg-midnight-green border border-blue-munsell/40 text-tiffany-blue text-[9px] font-bold flex-shrink-0 flex items-center justify-center">
                                            {i + 1}
                                        </span>
                                        <p>
                                            <span className="font-semibold text-foreground/90">{w.step}:</span>{' '}
                                            <span className="text-foreground/60">{w.desc}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Python Libraries Used */}
                        <div>
                            <SectionLabel>Python Libraries Used</SectionLabel>
                            <div className="pl-1 space-y-1">
                                {project.pythonLibraries.map((lib, i) => (
                                    <div key={i} className="flex items-baseline gap-2">
                                        <span className="font-semibold text-tiffany-blue whitespace-nowrap w-20 flex-shrink-0">
                                            {lib.name}:
                                        </span>
                                        <span className="text-foreground/55 text-xs">{lib.role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Outcome */}
                        <div>
                            <SectionLabel>Outcome</SectionLabel>
                            <p className="text-foreground/60 pl-1">✅ {project.outcome}</p>
                        </div>

                        {/* Tools & Technologies */}
                        <div>
                            <SectionLabel>Tools &amp; Technologies</SectionLabel>
                            <div className="pl-1 space-y-1 text-xs font-mono">
                                {[
                                    { label: 'Language', value: project.toolsAndTech.language },
                                    { label: 'Libraries', value: project.toolsAndTech.libraries },
                                    { label: 'Other Tools', value: project.toolsAndTech.otherTools },
                                    { label: 'Model File', value: project.toolsAndTech.modelFile },
                                    { label: 'Dataset', value: project.toolsAndTech.dataset },
                                ].map(({ label, value }) => (
                                    <div key={label} className="flex gap-2">
                                        <span className="text-foreground/40 w-24 flex-shrink-0">{label}:</span>
                                        <span className="text-gamboge">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                ) : (
                    /* Fallback: simple bullet list for other projects (e.g. Tourism) */
                    <ul className="space-y-1.5 text-foreground/60 text-sm list-disc pl-5">
                        {project.details.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                )}

                {/* CTA button */}
                <div className="flex gap-3 mt-6">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-midnight-green text-white text-sm rounded-lg hover:bg-blue-munsell transition-colors">
                        <Github size={16} /> View Code
                    </button>
                </div>
            </div>

            {/* ── RIGHT: visual accent panel ── */}
            <div className="w-52 flex-shrink-0 rounded-r-3xl bg-black/40 border-l border-white/5 flex flex-col items-center justify-center p-6 relative overflow-hidden gap-5">
                <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:18px_18px]" />
                <div className="w-28 h-28 border border-blue-munsell/30 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 relative z-10 bg-black/30">
                    <span className="text-5xl">{project.workflow ? '🤖' : '🏛️'}</span>
                </div>
                <div className="font-mono text-[10px] text-blue-munsell/50 text-center relative z-10 leading-relaxed px-2">
                    {'// ' + project.title.replace(/\s+/g, '_').toLowerCase()}
                </div>
            </div>
        </div>
    );
};

export default Projects;
