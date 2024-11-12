'use client'

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="pb-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-zinc-500">
          Lets Connect
        </h2>
        <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
          Reach out for top-notch designs. If you think Id be a great fit
          for your project, email me—Im open to new opportunities.
        </p>
        
        <Button
          variant="outline"
          className="group relative inline-flex items-center gap-1.5 text-lg bg-card"
          asChild
        >
          <a href="mailto:anasnadkar23@gmail.com">
            Get in Touch
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Button>

        <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <SocialLink href="https://www.x.com/NadkarAnas45" icon="𝕏" label="Twitter" />
          <SocialLink href="https://www.linkedin.com/in/anas-nadkar-2765121a9/" icon="in" label="LinkedIn" />
          <SocialLink href="https://github.com/anasnadkar45/" icon={<Github />} label="Github" />
          <SocialLink href="https://drive.google.com/file/d/11QC4TT_2VKsXQn0itPu2VvOR30pUfjT-/view?usp=drive_link" icon="📄" label="Read.cv" />
        </div>
      </motion.div>
    </section>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between p-4 rounded-xl bg-card border-2 border-dashed border-zinc-800 backdrop-blur-sm transition-colors hover:border-white/40"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <span className="flex items-center gap-3">
        <span className="text-lg">{icon}</span>
        <span className="text-white/90">{label}</span>
      </span>
      <ArrowUpRight className="w-5 h-5 text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  )
}