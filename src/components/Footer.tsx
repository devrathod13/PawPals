import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-16 shadow-lg">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold text-primary-600 tracking-tight">PawPals</h3>
          <p className="text-gray-600 leading-relaxed">Connecting loving pets with caring families</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-gray-800 uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/animals" className="text-gray-600 hover:text-primary-600 transition-colors duration-300 ease-in-out">Find a Pet</Link></li>
            <li><Link href="/how-to-adopt" className="text-gray-600 hover:text-primary-600 transition-colors duration-300 ease-in-out">Adoption Process</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors duration-300 ease-in-out">About Us</Link></li>
            <li><Link href="/donate" className="text-gray-600 hover:text-primary-600 transition-colors duration-300 ease-in-out">Donate</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-gray-800 uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.61 18 2 12.39 2 6V3z" />
              </svg>
              <span>(548) 333-0424</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>devnitarathod@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Saskatchewan, SK</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-gray-800 uppercase tracking-wider">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 ease-in-out flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
              </svg>
              <span>Facebook</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 ease-in-out flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </Link>
          </div>
        </div>
      </div>
     
        <div className="space-x-4 text-xs text-gray-400 text-center">
          <Link href="/privacy" className="hover:text-primary-600">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary-600">Terms of Service</Link>
        </div>
      
      
    </footer>
  );
}
