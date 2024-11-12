'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';
import Devzenith1 from '../../../public/Devzenith.png';
import Devzenith2 from '../../../public/Devzenith2.png';
import Devzenith3 from '../../../public/Devzenith3.png';
import Devzenith4 from '../../../public/Devzenith4.png';
import Digimarket from '../../../public/Digimarket.png';
import Projectshub1 from '../../../public/Projectshub1.png';
import Projectshub2 from '../../../public/Projectshub2.png';
import Studify1 from '../../../public/Studify1.png'
import Studify2 from '../../../public/Studify2.png'
import Studify3 from '../../../public/Studify3.png'
import Studify4 from '../../../public/Studify4.png'
import Studify5 from '../../../public/Studify5.png'

interface ProjectType {
  title: string;
  description: string;
  tags: string[];
  link: string;
  images: StaticImageData[];
}

const projects: ProjectType[] = [
  {
    title: 'Studify',
    description: 'An AI-powered study assistant that generates personalized study plans from PDF uploads, featuring AI-curated resources, quizzes, and summaries to enhance study efficiency. Includes community features for sharing study plans and tracking progress, with optimized resource load times for an improved user experience.',
    tags: ['Next.js', 'Tailwind', 'TypeScript', 'Gemini AI', 'Supabase', 'Prisma', 'KindeAuth'],
    link: 'https://studify-app.vercel.app/', // Replace with the actual Studify link if available
    images: [Studify1, Studify2, Studify3, Studify4,Studify5], // Replace with actual images for Studify if available
  },
  {
    title: 'DevZenith',
    description: 'A collaboration platform enabling users to join projects based on skills like frontend, backend, AI/ML, and more, promoting teamwork and productivity through task management, resources sharing, and video meetings.',
    tags: ['Next.js', 'Tailwind', 'TypeScript', 'Supabase', 'Prisma', 'KindeAuth'],
    link: 'https://dev-zenith-v2.vercel.app/',
    images: [Devzenith1, Devzenith2, Devzenith3, Devzenith4],
  },
  {
    title: 'DigiMarket',
    description: 'A digital product marketplace with optimized performance, Stripe integration for secure payments, and enhanced database query speed using Prisma and Postgres.',
    tags: ['Next.js', 'Tailwind', 'Prisma', 'Postgres', 'Stripe'],
    link: 'https://digi-market-gamma.vercel.app/',
    images: [Digimarket],
  },
  {
    title: 'ProjectsHub',
    description: 'A platform showcasing student side projects, with tools for sharing, enhanced user engagement, and robust data management using Prisma ORM and Postgres.',
    tags: ['Next.js', 'React.js', 'Tailwind', 'Prisma', 'Postgres'],
    link: 'https://projectshub-two.vercel.app/',
    images: [Projectshub1, Projectshub2],
  },
];

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  images: StaticImageData[];
  index: number;
}

export function Project() {
  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20 relative"
      >
        <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-zinc-500">
          Projects
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Building impactful projects with cutting-edge technologies to deliver exceptional digital experiences.
        </p>
      </motion.div>
      <div className="space-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tags, link, images, index }: ProjectCardProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      viewport={{ once: true }}
      className={`flex flex-col lg:flex-row gap-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}
    >
      <div className="w-full lg:w-7/12 relative group">
        <div className="relative h-[300px] overflow-hidden rounded-2xl">
          {images.map((image, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={{
                opacity: currentSlide === idx ? 1 : 0,
                scale: currentSlide === idx ? 1 : 1.1,
              }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
              style={{ display: currentSlide === idx ? 'block' : 'none' }}
            >
              <Image
                src={image}
                alt={`${title} preview ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={idx === 0}
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 backdrop-blur-sm
                        text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 backdrop-blur-sm
                        text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-5/12 flex flex-col justify-center">
        <Link href={link} className="group relative isolate">
          <div className="relative z-10">
            <span className="text-zinc-500 font-mono text-sm tracking-wider">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="text-3xl font-bold mt-2 mb-4 text-white group-hover:text-zinc-200 transition-colors flex items-center gap-2">
              {title}
              <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-sm rounded-full bg-white/5 text-zinc-300 
                                        border border-white/10 group-hover:border-white/20 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-white/5 to-transparent 
                        opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
        </Link>
      </div>
    </motion.div>
  );
}
