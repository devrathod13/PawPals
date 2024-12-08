import Link from "next/link";

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold">PawPals</h1>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link 
            href="/animals" 
            className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
          >
            Find a Pet
          </Link>
          <Link 
            href="/how-to-adopt" 
            className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
          >
            Adoption Process
          </Link>
          <Link 
            href="/about" 
            className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
          >
            About Us
          </Link>
          <Link 
            href="/donate" 
            className="btn-primary px-4 py-2 rounded-full"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
