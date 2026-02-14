"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative">
      <nav aria-label="Main navigation" className="max-w-6xl mx-auto flex justify-between items-center text-[var(--primary)] p-6">
        <Link href="/" className="text-xl md:text-3xl z-50">
          Dr. Maya Reynolds, PsyD
        </Link>

        <div className="hidden md:flex gap-8 text-xl">
          <Link href="/blog" title="Read our blog articles">Blog</Link>
          <Link href="/contact" title="Contact Dr. Maya Reynolds">Contact</Link>
          <Link href="/office" title="Office information and location">Office</Link>
        </div>

        <button  aria-label="Toggle navigation menu" className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 bg-[var(--background)] flex flex-col items-center justify-center gap-10 text-3xl">
          <Link href="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link href="/office" onClick={() => setIsOpen(false)}>
            Office
          </Link>
        </div>
      )}
    </header>
  );
}
