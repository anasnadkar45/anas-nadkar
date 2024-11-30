import { StaticImageData } from 'next/image'
import Devzenith1 from '../../public/Devzenith.png'
import Devzenith2 from '../../public/Devzenith2.png'
import Devzenith3 from '../../public/Devzenith3.png'
import Devzenith4 from '../../public/Devzenith4.png'
import Digimarket from '../../public/Digimarket.png'
import Projectshub1 from '../../public/Projectshub1.png'
import Projectshub2 from '../../public/Projectshub2.png'
import Studify1 from '../../public/Studify1.png'
import Studify2 from '../../public/Studify2.png'
import Studify3 from '../../public/Studify3.png'
import Studify4 from '../../public/Studify4.png'
import Studify5 from '../../public/Studify5.png'

interface ProjectType {
  title: string
  description: string
  tags: string[]
  link: string
  images: StaticImageData[]
}

export const projects: ProjectType[] = [
  {
    title: 'Studify',
    description: 'An AI-powered study assistant that generates personalized study plans from PDF uploads, featuring AI-curated resources, quizzes, and summaries to enhance study efficiency. Includes community features for sharing study plans and tracking progress, with optimized resource load times for an improved user experience.',
    tags: ['Next.js', 'Tailwind', 'TypeScript', 'Gemini AI', 'Supabase', 'Prisma', 'KindeAuth'],
    link: 'https://studify-omega.vercel.app/',
    images: [Studify1, Studify2, Studify3, Studify4, Studify5],
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
]

