"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <header className="border" >
    //   <nav className="max-w-6xl mx-auto grid grid-cols-12 items-center text-[var(--primary)] p-6">

    //     <Link href="/" className="col-span-6 text-xl md:text-3xl">
    //       Lilac Template
    //     </Link>

    //     <div className="col-span-6 flex justify-end gap-8 md:text-xl font-normal ">
    //       <Link href="/blog">Blog</Link>
    //       <Link href="/contact">Contact</Link>
    //     </div>

    //   </nav>
    // </header>
    <header className="relative">
      <nav className="max-w-6xl mx-auto flex justify-between items-center text-[var(--primary)] p-6">
        <Link href="/" className="text-xl md:text-3xl z-50">
          Dr. Maya Reynolds, PsyD
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xl">
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
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
        </div>
      )}
    </header>
  );
}
