'use client'

import { motion } from "framer-motion"
import {
    Code2,
    Database,
    Layout,
    Smartphone,
    Server,
    Cloud,
    Sparkles,
    ArrowRight
} from "lucide-react"
import { useState } from "react"

const techCategories = [
    {
        title: "Frontend Development",
        icon: Layout,
        description: "Building engaging and responsive web applications",
        technologies: ["ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "Redux"],
        gradient: "from-blue-500 to-cyan-500",
        bgGlow: "group-hover:bg-blue-500/20"
    },
    {
        title: "Backend Development",
        icon: Server,
        description: "Crafting scalable server-side solutions",
        technologies: ["NodeJS", "ExpressJS", "REST APIs"],
        gradient: "from-purple-500 to-pink-500",
        bgGlow: "group-hover:bg-purple-500/20"
    },
    {
        title: "Database Management",
        icon: Database,
        description: "Managing and optimizing data storage",
        technologies: ["PostgreSQL", "MongoDB", "Prisma ORM", "SQL", "NoSQL"],
        gradient: "from-green-500 to-emerald-500",
        bgGlow: "group-hover:bg-green-500/20"
    },
    {
        title: "Programming Languages",
        icon: Code2,
        description: "Core programming expertise",
        technologies: ["JavaScript", "C++", "Python"],
        gradient: "from-indigo-500 to-violet-500",
        bgGlow: "group-hover:bg-indigo-500/20"
    }
]

export function TechStack() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <section id="skills" className="pb-24 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-20 relative"
            >
                <Sparkles className="w-6 h-6 text-white/50 absolute -top-8 left-1/2 -translate-x-1/2" />
                <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-zinc-500">
                    Tech Expertise
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                    Leveraging modern technologies to build impactful digital experiences
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
                {techCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="relative h-full bg-card border-2 border-dashed border-zinc-800 rounded-2xl p-6 
                                backdrop-blur-sm transition-all duration-500 
                                hover:border-white/40 hover:shadow-lg hover:-translate-y-1 hover:cursor-pointer">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.gradient}`}>
                                    <category.icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                            </div>

                            <p className="text-zinc-400 mb-6 text-sm">
                                {category.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {category.technologies.map((tech, techIndex) => (
                                    <motion.span
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{
                                            opacity: hoveredIndex === index ? 1 : 0.7,
                                            scale: hoveredIndex === index ? 1 : 0.95
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            delay: techIndex * 0.05
                                        }}
                                        className={`px-3 py-1 text-sm rounded-full 
                                                bg-white/5 text-white/70 border border-white/10
                                                transition-colors duration-200
                                                ${hoveredIndex === index ? 'border-white/20' : ''}`}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                    opacity: hoveredIndex === index ? 1 : 0,
                                    x: hoveredIndex === index ? 0 : -10
                                }}
                                className="absolute bottom-4 right-4"
                            >
                                <ArrowRight className="w-5 h-5 text-white/50" />
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
