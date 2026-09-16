// components/Header.jsx
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">🏎️ CarReview Hub</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-secondary transition">Home</Link>
          <Link href="/launches" className="hover:text-secondary transition">Launches</Link>
          <Link href="/reviews" className="hover:text-secondary transition">Reviews</Link>
          <Link href="/about" className="hover:text-secondary transition">About</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-gray-700">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-800">Home</Link>
          <Link href="/launches" className="block px-4 py-2 hover:bg-gray-800">Launches</Link>
          <Link href="/reviews" className="block px-4 py-2 hover:bg-gray-800">Reviews</Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-800">About</Link>
        </div>
      )}
    </nav>
  )
}
