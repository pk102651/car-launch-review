// components/Footer.jsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-300 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <h5 className="text-white font-bold mb-4">About</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-secondary transition">About Us</Link></li>
              <li><Link href="/" className="hover:text-secondary transition">Careers</Link></li>
              <li><Link href="/" className="hover:text-secondary transition">Press</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Content</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/launches" className="hover:text-secondary transition">Launches</Link></li>
              <li><Link href="/reviews" className="hover:text-secondary transition">Reviews</Link></li>
              <li><Link href="/" className="hover:text-secondary transition">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-secondary transition">Privacy</Link></li>
              <li><Link href="/" className="hover:text-secondary transition">Terms</Link></li>
              <li><Link href="/" className="hover:text-secondary transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4">Follow</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-secondary transition">Twitter</Link></li>
              <li><Link href="/" className="hover:text-secondary transition">Facebook</Link></li>
              <li><Link href="/" className="hover:text-secondary transition">Instagram</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p>&copy; 2026 Car Review Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
