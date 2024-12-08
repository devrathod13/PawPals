export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">About PawPals</h1>
        
        <section className="bg-white shadow-lg rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At PawPals, we believe every animal deserves a loving home. 
            Our mission is to connect compassionate families with adorable pets 
            in need of forever homes, creating lasting bonds and second chances.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Rescue</h3>
            <p>We rescue animals from shelters and difficult situations.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-green-800">Care</h3>
            <p>Provide medical care, nutrition, and love to every animal.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-purple-800">Connect</h3>
            <p>Match animals with loving families who will cherish them.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
