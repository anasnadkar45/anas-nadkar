// Updated Navbar Component
'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from '../../../public/Anas.png'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <nav className="fixed top-2 left-4 right-4 max-w-4xl mx-auto z-50 bg-[#101010c2] backdrop-blur-md border border-dashed rounded-lg border-border">
            <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Avatar className="h-10 w-10 border-2 border-primary/50">
                                <AvatarImage src={Logo.src} alt="Anas Nadkar" />
                                <AvatarFallback>AN</AvatarFallback>
                            </Avatar>
                            <span className="ml-3 text-xl font-semibold">Anas Nadkar</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <NavLinks />
                        <Button
                            className="group relative inline-flex items-center gap-1.5 text-lg"
                            asChild
                        >
                            <a href="mailto:anasnadkar23@gmail.com">
                                Get in Touch
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>
                        </Button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <Button variant="ghost" size="icon" onClick={toggleMenu}>
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLinks mobile />
                        <div className="flex items-center justify-between mt-4">
                            <Button
                                className="group relative inline-flex items-center gap-1.5 text-lg"
                                asChild
                            >
                                <a href="mailto:anasnadkar23@gmail.com">
                                    Get in Touch
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

// Updated NavLinks Component
const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
    const links = [
        { href: '#home', label: 'Home' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
        <>
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className={`${mobile
                        ? 'block text-base font-medium'
                        : 'text-sm font-medium'
                        } px-3 py-2 rounded-md text-foreground/60 hover:text-foreground hover:bg-accent/50 hover:cursor-pointer transition-colors`}
                >
                    {link.label}
                </a>
            ))}
        </>
    )
}
