'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, ArrowUpRight, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from '@/hooks/use-toast'
import { poppins } from '../layout'

export function Hero() {
    const [isCopied, setIsCopied] = useState(false)
    const email = "anasnadkar23@gmail.com"

    const copyEmail = () => {
        navigator.clipboard.writeText(email)
        setIsCopied(true)
        toast({
            title: "Email copied!",
            description: "The email address has been copied to your clipboard.",
        })
        setTimeout(() => setIsCopied(false), 2000)
    }

    const buttonVariants = {
        initial: { scale: 1 },
        tap: { scale: 0.95 },
    }

    return (
        <main id='home' className="mt-32 md:mt-44">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl space-y-6"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className={`${poppins.className} text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight`}
                >
                    Hi, Im Anas Nadkar
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-xl text-neutral-400"
                >
                    As a <span className={`${poppins.className} text-foreground/80`}>frontend developer</span>, I craft captivating digital experiences that seamlessly blend technical expertise and UI design
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-wrap gap-2"
                >
                    <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                        <Link
                            href="https://www.linkedin.com/in/anas-nadkar-2765121a9/"
                            target="_blank"
                            rel="noopener noreferrer"

                        >
                            <Button variant={'outline'} className="flex items-center py-6 gap-2 rounded-md bg-card border-2 border-dashed border-zinc-800 transition-all duration-500 hover:border-white/40">
                                <Linkedin className="h-5 w-5" />
                                <span>Connect with me</span>
                                <ArrowUpRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div variants={buttonVariants} initial="initial" whileHover="hover" whileTap="tap">
                        <Button
                            variant="outline"
                            className="flex items-center py-6 gap-2 rounded-md bg-card border-2 border-dashed border-zinc-800 transition-all duration-500 hover:border-white/40"
                            onClick={copyEmail}
                        >
                            {isCopied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                            <span>{isCopied ? "Copied!" : "Copy Email"}</span>
                        </Button>
                    </motion.div>

                    <SocialLink href="https://github.com/anasnadkar45/" icon={Github} label="GitHub" />
                    <SocialLink href="https://www.x.com/NadkarAnas45" icon={Twitter} label="Twitter" />
                </motion.div>
            </motion.div>
        </main>
    )
}

function SocialLink({
    href,
    icon: Icon,
    label
}: {
    href: string
    icon: typeof Github
    label: string
}) {
    return (
        <motion.div
            variants={{
                initial: { scale: 1 },
                hover: { scale: 1.1 },
                tap: { scale: 0.9 },
            }}
            initial="initial"
            whileTap="tap"
        >
            <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button
                    variant="outline"
                    className="flex items-center py-6 gap-2 rounded-md bg-card border-2 border-dashed border-zinc-800 transition-all duration-500 hover:border-white/40"
                >
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{label}</span>
                </Button>
            </Link>
        </motion.div>
    )
}