'use client'

import Link from 'next/link'

export default function ReviewsPage() {
  const reviews = [
    { id: 1, title: 'Tesla Model S Plaid Review', rating: 4.8, author: 'John Doe', date: '2026-01-15' },
    { id: 2, title: 'BMW M5 G7 - A Masterpiece', rating: 4.7, author: 'Jane Smith', date: '2026-01-14' },
    { id: 3, title: 'Audi RS e-tron GT Deep Dive', rating: 4.6, author: 'Mike Johnson', date: '2026-01-13' },
    { id: 4, title: 'Mercedes AMG C63 Performance Test', rating: 4.9, author: 'Sarah Williams', date: '2026-01-12' },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
        <div className="container-custom flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold">🏎️ CarReview Hub</Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-secondary transition">Home</Link>
            <Link href="/launches" className="hover:text-secondary transition">Launches</Link>
            <Link href="/reviews" className="hover:text-secondary transition">Reviews</Link>
            <Link href="/about" className="hover:text-secondary transition">About</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-gray-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Expert Car Reviews</h1>
          <p className="text-gray-300">In-depth analysis and ratings of the latest vehicles</p>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{review.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>By {review.author}</span>
                      <span>{new Date(review.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-secondary">{review.rating}</div>
                    <div className="text-sm text-gray-600">/5.0</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  This comprehensive review covers performance, comfort, technology, and value for money. Our experts have thoroughly tested this vehicle to provide you with an accurate assessment.
                </p>
                <Link href={`/reviews/${review.id}`} className="text-secondary font-semibold hover:underline">
                  Read Full Review →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-gray-300 py-8">
        <div className="container-custom text-center">
          <p>&copy; 2026 Car Review Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
