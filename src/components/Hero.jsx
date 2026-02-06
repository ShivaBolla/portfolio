'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/constants';

const Hero = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const symbols = ['< >', '{ }', '/', '0', '1', '[ ]', '( )', ';', '#'];
        const particles = [];
        const particleCount = 60;

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
                this.size = Math.random() * 14 + 10;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.3 + 0.1;
            }

            update(mouseX, mouseY) {
                this.x += this.speedX;
                this.y += this.speedY;

                // Mouse interaction (parallax-like)
                const dx = this.x - mouseX;
                const dy = this.y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 200) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (200 - distance) / 200;
                    this.x += forceDirectionX * force * 0.5;
                    this.y += forceDirectionY * force * 0.5;
                }

                // Wrap around screen
                if (this.x > width) this.x = 0;
                if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                if (this.y < 0) this.y = height;
            }

            draw() {
                ctx.fillStyle = `rgba(148, 210, 189, ${this.opacity})`; // Tiffany Blue
                ctx.font = `${this.size}px monospace`;
                ctx.fillText(this.symbol, this.x, this.y);
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(particle => {
                particle.update(mouseX, mouseY);
                particle.draw();
            });
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />

            <div className="z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-tiffany-blue tracking-widest text-sm md:text-base mb-4 uppercase font-mono">
                        {RESUME_DATA.personalInfo.title}
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-tiffany-blue via-blue-munsell to-citron pb-2">
                        {RESUME_DATA.personalInfo.name}
                    </h1>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted">
                <span className="text-xs tracking-widest uppercase opacity-50">Scroll Down</span>
            </div>
        </section >
    );
};

export default Hero;
